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


Route::get('/donation', 'DonationsController@index')->name('donation');

Route::post('/donation', 'DonationsController@store');
