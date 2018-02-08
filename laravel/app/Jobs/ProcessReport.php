<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class ProcessReport implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    private $url;
    private $number;
    private $id;
    private $name_file;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($url, $number, $id, $name_file)
    {
        $this->url = $url;
      	$this->number = $number;
      	$this->id = $id;
      	$this->name_file = $name_file;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
	      //COMMENCEMENT DE L'ANALYSE DU FICHIER PHP :
        //Clonage du fichier git
        shell_exec("git clone ". $this->url ." /var/www/laravel/public/temp/".$this->number);

        //PHP CODE SNIFFER : that tokenizes PHP, JavaScript and CSS files to detect violations of a defined coding standard
        $PHPCODESNIFFER = shell_exec("phpcs --standard=LaravelCodeSniffer/Standards/Laravel/ /var/www/laravel/public/temp/".$this->number);

        //PHP LOC : is a tool for quickly measuring the size and analyzing the structure of a PHP project
        $PHPLOC = shell_exec("phploc /var/www/laravel/public/temp/".$this->number);

        //PHP Copy/Paste Detector : is a Copy/Paste Detector (CPD) for PHP code.
        $PHPCPD = shell_exec("phpcpd /var/www/laravel/public/temp/".$this->number);

        //Phortress : static code analyser for potential vulnerabilities
        //shell_exec("sudo apt-get install phpunit");
        //    $PHortress = shell_exec("phpunit /var/www/html/public/temp"); //MARCHE PAS

        //PHP Coding Standards Fixer : The PHP Coding Standards Fixer (PHP CS Fixer) tool fixes your code to follow standards; whether you want to follow PHP coding standards as defined in the PSR-1, PSR-2$
        //$PHPCoding = shell_exec("php-cs-fixer fix /var/www/laravel/public/temp/".$this->number);
        echo("_ fixer");
        //  PHP Metrics :
        //  shell_exec("php ./vendor/bin/phpmetrics --report-html=myreport /var/www/html/public/temp/".$number);
        //  shell_exec("cp -R /var/www/html/myreport /var/www/html/public/temp/metrics_". $number);
//        rmdir("/var/www/laravel/public/temp/".$this->number);
        shell_exec("rm -rf /var/www/laravel/public/temp/".$this->number);
        //  Rassemblement de tous les résultats
        $str_result = "-------------------------------------------------------------------------------- \n D  tection des violations dans les fichiers PHP, JS et CSS : \n\n\n " . $PHPCODESNIFFER ;
        $str_result .= "\n-------------------------------------------------------------------------------- \n\n Analyse de la taille et la structure du projet PHP : \n\n\n" . $PHPLOC ;
        $str_result .= "\n-------------------------------------------------------------------------------- \n D  tecteur de copier/coller : \n\n " . $PHPCPD;
        //  $str_result .= "\n -------------------------------------------------------------------------------- \n Analyse des potentiels vuln  rabilit  s \n " . $PHortress;
        ///$str_result .= "\n-------------------------------------------------------------------------------- \n Modifie le code PHP en standard : \n\n " . $PHPCoding;

      //  $str_result .= "\n-------------------------------------------------------------------------------- \n PHP Metrics : \n\n " . URL::asset('/metrics/metrics_'. $number);

        //  shell_exec("rm /var/www/html/public/temp/result.txt");
        //Cr  ation du fichier texte qui va contenir le r  sultat
        echo ("AVANT creation file");
        shell_exec("touch /var/www/laravel/public/temp/". $this->name_file .".txt");
        //file_put_contents("/var/www/laravel/public/temp/". $this->name_file . ".txt");
        echo("_ creation file");
        $file = '/var/www/laravel/public/temp/'. $this->name_file .'.txt';
        echo("_ dollard file");

goirejgoejro;
        // Ouvre un fichier pour lire un contenu existant
        $current = file_get_contents($file);
        $current .= $str_result ;
        file_put_contents($file, $current);

        Mail::to("groupe2@asr.lan")->send(new MailTransac());

        //Analyse termin  e
        $activityReport = DB::table('activityReport')
              ->where('user_id', $this->id)
              ->where('url', $this->url)
              ->where('file_name', $this->name_file)
              ->update(['statut' => "TERMINEE"]);
        echo("On arrive à la fin putain");
        //rmdir("/var/www/laravel/public/temp/".$this->number);
        shell_exec("rm -rf /var/www/laravel/public/temp/".$this->number);
    }
}
