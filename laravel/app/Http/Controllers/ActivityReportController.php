<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use Validator;
use Mail;
use App\Mail\OrderShipped;
use App\Mail\MailTransac;
use File;
use Response;
use URL;
use App\Jobs\AnalyseProcess;


class ActivityReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $id = Auth::user()->id;
            $activityReport = DB::table('activityReport')
                       ->select('*')
                       ->where('user_id', $id)
                       ->get();

            return response()
           ->json([
                'success' => true,
                'report' => $activityReport
        ]);
        } else {
            return response()
           ->json([
                'success' => false,
                'error' => "Non connecté"
        ]);
        }
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
        //VERIFICATION SI L'URL EST BIEN RENTREE
        $validator = Validator::make($request->all(), [
             'url' => 'required',
         ]);

        if ($validator->fails()) {
            return redirect('/activity')
              ->withErrors($validator, 'activity');
        }

        //AJOUT DANS LA BDD DU COMMENCEMENT DE L'ANALYSE
        $id = Auth::user()->id;
        $number = rand();
        $name_file = $id ."_RESULT_" . $number ;

        $activityReport = DB::table('activityReport')->insert(
        [ 'statut' => 'EN_COURS',
          "url" => $request->url,
          "file_name" => $name_file,
          "user_id" => $id]
      );
	ProcessReport::dispatch($request->url, $number, $id, $name_file);
        return response()
        ->json([
            'success' => true,
            'fileName' => $name_file,
        ]);
        //  return redirect('/activity');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        if (Auth::check()) {
            $id = Auth::user()->id;
            $activityReport = DB::table('activityReport')
                       ->select('file_name', 'url', 'statut')
                       ->where('user_id', $id)
                       ->get();
            /*
            return view('activityHisto', [
                'history' => $resultActivityReport
            ]);
            */
            return response()
          ->json([
              'success' => true,
              'data' => $activityReport
        ]);
        } else {
            return view('auth.login');
        }
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
