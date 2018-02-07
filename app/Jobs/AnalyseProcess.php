<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class AnalyseProcess implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $analyse;
    protected $id;
    protected $name;
    protected $number;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($analyse, $id, $name, $number)
    {
         $this->analyse = $analyse;
         $this->id = $id;
         $this->name = $name;
         $this->number = $number;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

      try
        {
            Mail::send('welcome', array('key' => 'value'), function($message)
            {
                $message->from('groupe2@asr.lan');
                $message->to('groupe2@asr.lan', 'John Smith')->subject('Welcome!');
            });
        }
        catch (\Exception $e)
        {
            dd($e->getMessage());
        }


      //         //COMMENCEMENT DE L'ANALYSE DU FICHIER PHP :
      //         //Clonage du fichier git
      //         shell_exec("git clone ". $analyse ." /var/www/html/public/temp/".$number);
      //
      //         //PHP CODE SNIFFER : that tokenizes PHP, JavaScript and CSS files to detect violations of a defined coding standard
      //         shell_exec("sudo apt-get install php-codesniffer");
      //         $PHPCODESNIFFER = shell_exec("phpcs --standard=LaravelCodeSniffer/Standards/Laravel/ /var/www/html/public/temp/".$number);
      //
      //         //PHP LOC : is a tool for quickly measuring the size and analyzing the structure of a PHP project
      //         shell_exec("sudo apt-get install phploc");
      //         $PHPLOC = shell_exec("phploc /var/www/html/public/temp/".$number);
      //
      //         //PHP Copy/Paste Detector : is a Copy/Paste Detector (CPD) for PHP code.
      //         shell_exec("sudo apt-get install phpcpd");
      //         $PHPCPD = shell_exec("phpcpd /var/www/html/public/temp/".$number);
      //
      //         //Phortress : static code analyser for potential vulnerabilities
      //         //shell_exec("sudo apt-get install phpunit");
      //         //    $PHortress = shell_exec("phpunit /var/www/html/public/temp"); //MARCHE PAS
      //
      //         //PHP Coding Standards Fixer : The PHP Coding Standards Fixer (PHP CS Fixer) tool fixes your code to follow standards; whether you want to follow PHP coding standards as defined in the PSR-1, PSR-2, etc., or other community driven ones like the Symfony one.
      //         shell_exec("wget http://cs.sensiolabs.org/download/php-cs-fixer-v2.phar -O php-cs-fixer");
      //         shell_exec("sudo chmod a+x php-cs-fixer");
      //         shell_exec("sudo mv php-cs-fixer /usr/local/bin/php-cs-fixer");
      //         $PHPCoding = shell_exec("php-cs-fixer fix /var/www/html/public/temp/".$number);
      //
      //         //PHP Metrics :
      //         shell_exec("php ./vendor/bin/phpmetrics --report-html=myreport /var/www/html/public/temp/".$number);
      //
      //         //Rassemblement de tous les résultats
      //         $str_result = "-------------------------------------------------------------------------------- \n Détection des violations dans les fichiers PHP, JS et CSS : \n\n\n " . $PHPCODESNIFFER ;
      //         $str_result .= "\n-------------------------------------------------------------------------------- \n\n Analyse de la taille et la structure du projet PHP : \n\n\n" . $PHPLOC ;
      //         $str_result .= "\n-------------------------------------------------------------------------------- \n Détecteur de copier/coller : \n\n " . $PHPCPD;
      //         //  $str_result .= "\n -------------------------------------------------------------------------------- \n Analyse des potentiels vulnérabilités \n " . $PHortress;
      //         $str_result .= "\n-------------------------------------------------------------------------------- \n Modifie le code PHP en standard : \n\n " . $PHPCoding;
      //
      //         shell_exec("cp -R /var/www/html/myreport /var/www/html/public/temp/metrics_". $number);
      //
      //         /*$path = '/var/www/html/myreport/index.html';
      //         $file = File::get($path);
      //         $type = File::mimeType($path);
      //         $response = Response::make($file, 200);
      //         $response->header("Content-Type", $type);
      // */
      //         $str_result .= "\n-------------------------------------------------------------------------------- \n PHP Metrics : \n\n " . URL::asset('/metrics/metrics_'. $number);
      //
      //         //  shell_exec("rm /var/www/html/public/temp/result.txt");
      //         //Création du fichier texte qui va contenir le résultat
      //         shell_exec("touch /var/www/html/public/temp/". $name .".txt");
      //
      //         $file = '/var/www/html/public/temp/'. $name .'.txt';
      //         // Ouvre un fichier pour lire un contenu existant
      //         $current = file_get_contents($file);
      //         $current .= $str_result ;
      //         file_put_contents($file, $current);
      //
      //         try
      //           {
      //               Mail::send('welcome', array('key' => 'value'), function($message)
      //               {
      //                   $message->from('groupe2@asr.lan');
      //                   $message->to('groupe2@asr.lan', 'John Smith')->subject('Welcome!');
      //               });
      //           }
      //           catch (\Exception $e)
      //           {
      //               dd($e->getMessage());
      //           }
      //
      //         //    Mail::to("catarino.laure@gmail.com")->send(new MailTransac($current));
      //
      //         //Analyse terminée
      //         $activityReport = DB::table('activityReport')
      //               ->where('user_id', $id)
      //               ->where('url', $analyse)
      //               ->where('file_name', $name)
      //               ->update(['statut' => "TERMINEE"]);
      //
      //         shell_exec("rm -rf /var/www/html/public/temp/".$number);

    }
}
