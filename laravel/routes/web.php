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

Route::get('/', function () {
    return view('welcome');
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/activity', 'ActivityReportController@index')->name('activity');
Route::post('/activity', 'ActivityReportController@store');
Route::get('/account', 'ActivityReportController@show');


Route::get('storage/{filename}', function ($filename)
{
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
  }else{
    return view('auth.login');
  }

});

Route::get('/try', function ()
{
  return response()
        ->json([
            'toot' => "HOLA C'EST LARAVEL",
        ]);
});


Route::get('/donation', 'DonationsController@index')->name('donation');

Route::post('/donation', 'DonationsController@store');
