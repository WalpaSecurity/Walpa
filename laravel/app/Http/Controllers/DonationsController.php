<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Mail;
use App\Mail\OrderShipped;
use App\Mail\MailTransac;
use Illuminate\Validation\Rule;
use Validator;

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
            if ($data->type == "euro") {
                $donationE += $data->amount;
            } elseif ($data->type == "bitcoin") {
                $donationB += $data->amount;
            } elseif ($data->type == "ether") {
                $donationEt += $data->amount;
            }
        }

        return response()
            ->json([
            'success' => true,
            'data' => [
              'donationEuro' => $donationE,
              'donationBitCoin' => $donationB,
              'donationEther' => $donationEt,
            ]
            ]);

        /*  return view('donations', [
              'donationE' => $donationE,
              'donationB' => $donationB,
              'donationEi' => $donationEt,
          ]);*/
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
        $validator = Validator::make($request->all(), [
          'firstName' => 'required',
          'lastName' => 'required',
          'email' => 'required|email',
          'amount' => 'required',
          'type' => [
              'required',
              Rule::in(['euro', 'bitcoin', 'either']),
            ],
       ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $activityReport = DB::table('donations')->insert(
        ['firstName' => $request->firstName,
        "lastName" => $request->lastName,
        "email" => $request->email,
        "amount" => $request->amount,
        "type" => $request->type]
      );


      Mail::to("groupe2@asr.lan")->send(new OrderShipped($request));
        /*
        $order = $request;
        try
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

        //    Mail::to($request->email)->send(new MailTransac());


        if ($activityReport == 1) {
            return response()
            ->json([
            'success' => true,
            ]);
        } else {
            return response()
            ->json([
            'success' => false,
            ]);
        }
//       return redirect('/donation');
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
