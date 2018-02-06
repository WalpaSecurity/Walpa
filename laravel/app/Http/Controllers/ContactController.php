<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use Validator;
use Mail;
use App\Mail\ContactEmail;
use File;
use Response;
use URL;
use App\Jobs\AnalyseProcess;


class ContactController extends Controller
{

    public function index(Request $request)
    {
      $validator = Validator::make($request->all(), [
        'firstName' => 'required',
        'lastName' => 'required',
        'email' => 'required|email',
        'object' => 'required',
        'phone' => 'required',
        'message' => 'required',
     ]);

      if ($validator->fails()) {
          return response()->json(['error'=>$validator->errors()], 401);
      }

      Mail::to("groupe2@asr.lan")->send(new ContactEmail($request));

      return response()->json(['success'=>true]);
    }

}
