<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Mail;
use App\Mail\OrderShipped;
use App\Mail\MailTransac;

class DonationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $activityReport = DB::table('donations')
                     ->select('*')
                     ->get();

      $donationE = 0;
      $donationB = 0;
      $donationEt = 0;

      foreach ($activityReport as $data) {
        if($data->type == "euro"){
          $donationE += $data->amount;
        }else if($data->type == "bitcoin"){
          $donationB += $data->amount;
        }else if($data->type == "ether"){
          $donationEt += $data->amount;
        }
      }

      /*
      return response()
            ->json([
                'donationE' => $donationE,
                'donationB' => $donationB,
                'donationEi' => $donationEt,
            ]);
      */
      return view('donations', [
          'donationE' => $donationE,
          'donationB' => $donationB,
          'donationEi' => $donationEt,
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
      $activityReport = DB::table('donations')->insert(
        ['firstName' => $request->firstName,
        "lastName" => $request->lastName,
        "email" => $request->email,
        "amount" => $request->amount,
        "type" => $request->type]
      );
      $order = $request;


    /*  try
      {
          Mail::send('welcome', array('key' => 'value'), function($message)
          {
              $message->from('ex@xzzxxx.com');
              $message->to('catarino.laure@gmail.com', 'John Smith')->subject('Welcome!');
          });
      }
      catch (\Exception $e)
      {
          dd($e->getMessage());
      }*/

      Mail::to($request->email)->send(new MailTransac());


       return redirect('/donation');
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
