<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use Validator;
use Mail;
use App\Mail\OrderShipped;

class ActivityReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $id = Auth::user()->id;
      $activityReport = DB::table('activityReport')
                     ->select('*')
                     ->where('user_id', $id)
                     ->get();

      return view('activity', [
          'report' => $activityReport
      ]);
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
    /*  $activityReport = DB::table('activityReport')->insert(
        [ 'statut' => 'EN_COURS',
          "url" => "test",
          "user_id" => $id]
      );*/


      //CLONAGE DU FICHIER GIT RENTRER DANS L'URL
      shell_exec("git clone http://github.com/antonioribeiro/laravelcs LaravelCodeSniffer");

      //COMMENCEMENT DE L'ANALYSE DU FICHIER PHP :
        //PHP CODE SNIFFER : that tokenizes PHP, JavaScript and CSS files to detect violations of a defined coding standard
      shell_exec("sudo apt-get install phpcs");
      shell_exec("git clone https://github.com/It-DreamTeam/Vox-Populi-Web.git /var/www/html/public/temp");
      $PHPCODESNIFFER = shell_exec("phpcs --standard=LaravelCodeSniffer/Standards/Laravel/ /var/www/html/public/temp");


        //PHP LOC : is a tool for quickly measuring the size and analyzing the structure of a PHP project
      shell_exec("sudo apt-get install phploc");
      $PHPLOC = shell_exec("phploc /var/www/html/public/temp");
        //PHP Copy/Paste Detector : is a Copy/Paste Detector (CPD) for PHP code.
      shell_exec("wget https://phar.phpunit.de/phpcpd.phar");
      $PHPCPD = shell_exec("php phpcpd.phar /var/www/html/public/temp");

      //Réunion de tous les résultats
      $str_result = "Détection des violations dans les fichiers PHP, JS et CSS : \n " . $PHPCODESNIFFER . "\n\n Analyse de la taille et la structure du projet PHP : \n" . $PHPLOC . "\n\n Détecteur de copier/coller : \n " . $PHPCPD;

      //Création du fichier texte qui va contenir le résultat
      shell_exec("touch /var/www/html/public/temp/result.txt");

      $file = '/var/www/html/public/temp/result.txt';
      // Ouvre un fichier pour lire un contenu existant
      $current = file_get_contents($file);
      $current .= $str_result ;
      file_put_contents($file, $current);

      Mail::to("catarino.laure@gmail.com")->send(new OrderShipped($current));

       return redirect('/activity');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
