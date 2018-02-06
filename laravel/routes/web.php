<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Mail\OrderShipped;
use App\Mail\MailTransac;
Route::get('/', function () {
    return view('welcome');
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/activity', 'ActivityReportController@index')->name('activity');
Route::post('/activity', 'ActivityReportController@store');
Route::get('/account', 'ActivityReportController@show');


Route::get('storage/{filename}', function ($filename) {
    if (Auth::check()) {
        $path = '/var/www/html/public/temp/' . $filename .'.txt';

        if (!File::exists($path)) {
            abort(404);
        }

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);

        return $response;
    } else {
        return view('auth.login');
    }
});

Route::get('/try', function () {
    return response()
        ->json([
            'toot' => "HOLA C'EST LARAVEL",
        ]);
});


Route::get('/donation', 'DonationsController@index')->name('donation');

Route::post('/donation', 'DonationsController@store');

Route::get('/mail', function () {
  try
    {
        Mail::send('welcome', array('key' => 'value'), function($message)
        {
            $message->from('groupe2@asr.lan');
            $message->to('catarino.laure@gmail.com', 'John Smith')->subject('Welcome!');
        });
    }
    catch (\Exception $e)
    {
        dd($e->getMessage());
    }
});


Route::get('metrics/{filename}', function ($filename) { //Récupération du fichier d'analyse
  //  if (Auth::check()) {
        $path = '/var/www/html/public/temp/' . $filename . '/index.html';

        if (!File::exists($path)) {
            abort(404);
        } /*else {
            return response()->file($path);
        }*/


          $file = File::get($path);
          $type = File::mimeType($path);

          $response = Response::make($file, 200);

          return $response;

        //  $response->header("Content-Type", $type);
//return File::get($path);

      //  return Redirect::to($path);

    /*return response()
      ->json([
          'success' => true,
          'resultActivityReport' => $response
    ]);*/
  /*  } else {
        return view('auth.login');
    }*/
});

Route::get('/jobs', 'ActivityReportController@show');
Route::get('/google', function () {
    return view('google');
});

//OAUTH WITH GITHUB
Route::get('auth/github', 'Auth\OauthController@redirectToProvider');
Route::get('auth/github/callback', 'Auth\OauthController@handleProviderCallback');
