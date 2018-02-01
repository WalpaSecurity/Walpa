<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use Validator;
use Mail;
use App\Mail\OrderShipped;
use App\Mail\MailTransac;
use File;
use Response;

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
      }else{
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
      $name_file = $id ."_RESULT_" . $number ;

      $activityReport = DB::table('activityReport')->insert(
        [ 'statut' => 'EN_COURS',
          "url" => $request->url,
          "file_name" => $name_file,
          "user_id" => $id]
      );

      //COMMENCEMENT DE L'ANALYSE DU FICHIER PHP :
      shell_exec("git clone ". $request->url ." /var/www/html/public/temp");

        //PHP CODE SNIFFER : that tokenizes PHP, JavaScript and CSS files to detect violations of a defined coding standard
      shell_exec("sudo apt-get install php-codesniffer");
      $PHPCODESNIFFER = shell_exec("phpcs --standard=LaravelCodeSniffer/Standards/Laravel/ /var/www/html/public/temp");

        //PHP LOC : is a tool for quickly measuring the size and analyzing the structure of a PHP project
      shell_exec("sudo apt-get install phploc");
      $PHPLOC = shell_exec("phploc /var/www/html/public/temp");

        //PHP Copy/Paste Detector : is a Copy/Paste Detector (CPD) for PHP code.
      shell_exec("sudo apt-get install phpcpd");
      $PHPCPD = shell_exec("phpcpd /var/www/html/public/temp");

        //Phortress : static code analyser for potential vulnerabilities
    //  shell_exec("sudo apt-get install phpunit");
  //    $PHortress = shell_exec("phpunit /var/www/html/public/temp"); //MARCHE PAS

      //Rassemblement de tous les résultats
      $str_result = "-------------------------------------------------------------------------------- \n Détection des violations dans les fichiers PHP, JS et CSS : \n\n\n " . $PHPCODESNIFFER ;
      $str_result .= "\n-------------------------------------------------------------------------------- \n\n Analyse de la taille et la structure du projet PHP : \n\n\n" . $PHPLOC ;
      $str_result .= "\n-------------------------------------------------------------------------------- \n Détecteur de copier/coller : \n\n " . $PHPCPD;
  //  $str_result .= "\n -------------------------------------------------------------------------------- \n Analyse des potentiels vulnérabilités \n " . $PHortress;

    //  shell_exec("rm /var/www/html/public/temp/result.txt");
      //Création du fichier texte qui va contenir le résultat
      shell_exec("touch /var/www/html/public/temp/". $name_file .".txt");

      $file = '/var/www/html/public/temp/'. $name_file .'.txt';
      // Ouvre un fichier pour lire un contenu existant
      $current = file_get_contents($file);
      $current .= $str_result ;
      file_put_contents($file, $current);

    //  Mail::to("catarino.laure@gmail.com")->send(new MailTransac($current));

      //Analyse terminée
      $activityReport = DB::table('activityReport')
              ->where('user_id', $id)
              ->where('url', $request->url)
              ->where('file_name', $name_file)
              ->update(['statut' => "TERMINEE"]);

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
                       ->select('file_name')
                       ->where('user_id', $id)
                       ->get();

        $resultActivityReport = array();
        foreach ($activityReport as $data) {
          array_push($resultActivityReport, $data->file_name);
        }
        /*
        return view('activityHisto', [
            'history' => $resultActivityReport
        ]);
        */
        return response()
          ->json([
              'success' => true,
              'history' => $resultActivityReport
        ]);


      }else{
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
