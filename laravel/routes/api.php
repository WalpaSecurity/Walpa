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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'API\PassportController@login');
Route::post('register', 'API\PassportController@register');

//Obligation d'avoir la variable "Authorization : Bearer token" dans le Headers
Route::group(['middleware' => 'auth:api'], function(){
	Route::post('get-details', 'API\PassportController@getDetails'); //Récupère les informations d'un utilisateur
  Route::post('/activity', 'ActivityReportController@store'); //Envoi d'un rapport d'activité
  Route::get('/activity', 'ActivityReportController@index'); //Avoir tous les rapports d'activité d'un utilisateur
  Route::get('/account', 'ActivityReportController@show');

});
