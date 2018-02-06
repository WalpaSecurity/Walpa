<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],
    'google' => [
       'client_id'     => '639601032152-pc7l02septjkki9li24c59cj089sm6h8.apps.googleusercontent.com',
       'client_secret' => "TFhMdQ_LheO3MEn3KHradDnO",
       'redirect'      => "http://www.walpa.com/home"
   ],
   'github' => [
    'client_id' => env('GITHUB_ID'),
    'client_secret' => env('GITHUB_SECRET'),
    'redirect' => env('GITHUB_URL'),
],



];
