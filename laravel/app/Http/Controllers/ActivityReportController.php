<?php

namespace App\Http\Controllers;


use App\Jobs\ProcessReport;
use Illuminate\Http\Request;
use Auth;
use DB;
use Validator;
use Mail;
use App\Mail\OrderShipped;
use App\Mail\MailTransac;
use App\Mail\ActivityEmail;
use File;
use Response;
use URL;
use App\Jobs\AnalyseProcess;


class ActivityReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $id = Auth::user()->id;
            $activityReport = DB::table('activityReport')
                       ->select('*')
                       ->where('user_id', $id)
                       ->get();

            return response()
           ->json([
                'success' => true,
                'report' => $activityReport
        ]);
        } else {
            return response()
           ->json([
                'success' => false,
                'error' => "Non connecté"
        ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //VERIFICATION SI L'URL EST BIEN RENTREE
        $validator = Validator::make($request->all(), [
             'url' => 'required',
         ]);

        if ($validator->fails()) {
            return redirect('/activity')
              ->withErrors($validator, 'activity');
        }

        //AJOUT DANS LA BDD DU COMMENCEMENT DE L'ANALYSE
        $id = Auth::user()->id;
        $number = rand();
        $name_file = $id ."_RESULT_" . $number;

        $activityReport = DB::table('activityReport')->insert([
           "statut" => 'EN_COURS',
           "url" => $request->url,
           "file_name" => $name_file,
           "user_id" => $id
         ]
        );

        //COMMENCEMENT DE L'ANALYSE DU FICHIER PHP :
        //Clonage du fichier git
        shell_exec("git clone ". $request->url ." /var/www/laravel/public/temp/".$number);
        $current = "Git clone terminée";
        Mail::to("groupe2@asr.lan")->send(new ActivityEmail($current));

        //PHP CODE SNIFFER : that tokenizes PHP, JavaScript and CSS files to detect violations of a defined coding standard
        $PHPCODESNIFFER = shell_exec("phpcs --standard=LaravelCodeSniffer/Standards/Laravel/ /var/www/laravel/public/temp/".$number);

        //PHP LOC : is a tool for quickly measuring the size and analyzing the structure of a PHP project
        $PHPLOC = shell_exec("phploc /var/www/laravel/public/temp/".$number);

        //PHP Copy/Paste Detector : is a Copy/Paste Detector (CPD) for PHP code.
        $PHPCPD = shell_exec("phpcpd /var/www/laravel/public/temp/".$number);

        //Phortress : static code analyser for potential vulnerabilities
        //shell_exec("sudo apt-get install phpunit");
        //    $PHortress = shell_exec("phpunit /var/www/html/public/temp"); //MARCHE PAS

        //PHP Coding Standards Fixer : The PHP Coding Standards Fixer (PHP CS Fixer) tool fixes your code to follow standards; whether you want to follow PHP coding standards as defined in the PSR-1, PSR-2$
        $PHPCoding = shell_exec("php-cs-fixer fix /var/www/laravel/public/temp/".$number);

        echo("_ fixer");

        $current = "Fichier en cours d'analyse...";
        Mail::to("groupe2@asr.lan")->send(new ActivityEmail($current));

        //  PHP Metrics :
        shell_exec("php ./vendor/bin/phpmetrics --report-html=myreport /var/www/laravel/public/temp/".$number);
        shell_exec("cp -R /var/www/laravel/myreport /var/www/laravel/public/temp/metrics_". $number);
       //        rmdir("/var/www/laravel/public/temp/".$number);
        shell_exec("rm -rf /var/www/laravel/public/temp/".$number);
        //  Rassemblement de tous les résultats
        $str_result = "Analyse terminée : \n\n ------------------- \n Detection des violations dans les fichiers PHP, JS et CSS : \n\n\n " . $PHPCODESNIFFER ;
        $str_result .= "\n----------------------------------------- \n\n Analyse de la taille et la structure du projet PHP : \n\n\n" . $PHPLOC ;
        $str_result .= "\n--------------------------------------------------- \n Detecteur de copier/coller : \n\n " . $PHPCPD;
        //  $str_result .= "\n -------------------------------------------------------------------------------- \n Analyse des potentiels vuln  rabilit  s \n " . $PHortress;
        $str_result .= "\n--------------------------------------------- \n Modifie le code PHP en standard : \n\n " . $PHPCoding;

        $str_result .= "\n-------------------------------------------------------------------------------- \n PHP Metrics : \n\n " . URL::asset('/metrics/metrics_'. $number);

        //  shell_exec("rm /var/www/html/public/temp/result.txt");
        //Cr  ation du fichier texte qui va contenir le r  sultat
        echo ("AVANT creation file");
        shell_exec("touch /var/www/laravel/public/temp/". $name_file .".txt");
        //file_put_contents("/var/www/laravel/public/temp/". $name_file . ".txt");
        echo("_ creation file");
        $file = '/var/www/laravel/public/temp/'. $name_file .'.txt';
        echo("_ dollard file");

        // Ouvre un fichier pour lire un contenu existant
        echo("\nBefore file_get_contents($file)\n");
        $current = file_get_contents($file);
        echo("After file_get_contents($file)\n");
        $current .= $str_result ;
        echo("After concat\n");
        file_put_contents($file, $current);
        echo("After file_put_contents()\n");

        //
        echo("After mail\n");

        Mail::to("groupe2@asr.lan")->send(new ActivityEmail($current));

        //Analyse terminée
        $activityReport = DB::table('activityReport')
              ->where('user_id', $id)
              ->where('url', $request->url)
              ->where('file_name', $name_file)
              ->update(['statut' => "TERMINEE"]);


	    // ProcessReport::dispatch($request->url, $number, $id, $name_file);

        return response()
        ->json([
            'success' => true,
            'fileName' => $name_file,
        ]);
        //  return redirect('/activity');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        if (Auth::check()) {
            $id = Auth::user()->id;
            $activityReport = DB::table('activityReport')
                       ->select('file_name', 'url', 'statut')
                       ->where('user_id', $id)
                       ->get();
            /*
            return view('activityHisto', [
                'history' => $resultActivityReport
            ]);
            */
            return response()
          ->json([
              'success' => true,
              'data' => $activityReport
        ]);
        } else {
            return view('auth.login');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


}
