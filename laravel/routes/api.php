<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
header('Access-Control-Allow-Origin:  *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'API\PassportController@login');
Route::post('register', 'API\PassportController@register');

//Obligation d'avoir la variable "Authorization : Bearer token" dans le Headers
Route::group(['middleware' => 'auth:api'], function () {
  Route::post('get-details', 'API\PassportController@getDetails'); //Récupère les informations d'un utilisateur
  Route::post('/activity', 'ActivityReportController@store'); //Envoi d'un rapport d'activité
  Route::get('/activity', 'ActivityReportController@index'); //Avoir tous les rapports d'activité d'un utilisateur
  Route::get('/account', 'ActivityReportController@show'); //Avoir tous les fichiers d'analyse d'un utilisateur
  Route::get('storage/{filename}', function ($filename) { //Récupération du fichier d'analyse
      if (Auth::check()) {
          $path = '/var/www/laravel/public/temp/' . $filename .'.txt';

          if (!File::exists($path)) {
              abort(404);
          } else {
              return response()->file($path);
          }
            $file = File::get($path);
            $type = File::mimeType($path);
            $response = Response::make($file, 200);
            $response->header("Content-Type", $type);

      } else {
          return response()->json(['success' => false, 'err' => "Error"]);
      }
  });

  Route::get('metrics/{filename}', function ($filename) { //Récupération du fichier d'analyse PHP Metrics
      if (Auth::check()) {
          $path = '/var/www/laravel/public/temp/' . $filename . '/index.html';
          if (!File::exists($path)) {
                return response()->json(['success' => false, 'err' => "File doesn't exist"]);
          }
            $file = File::get($path);
            $type = File::mimeType($path);
            $response = Response::make($file, 200);
            return $response;
      } else {
          return response()->json(['success' => false, 'err' => "Error"]);
      }
  });

  //Partie ADMIN
  Route::get('/admin', 'AdminController@getUser');
  Route::post('/admin/{id}', 'AdminController@changeID');
  Route::delete('/admin/{id}', 'AdminController@deleteAdmin');
  Route::post('/admin', 'AdminController@addAdmin');
  Route::delete('/user/{id}', 'AdminController@delete');
  Route::get('/projects', 'AdminController@getProjet');
});
