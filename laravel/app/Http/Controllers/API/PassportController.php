<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use Mail;
use App\Mail\RegisterEmail;
use DB;

class PassportController extends Controller
{
    public $successStatus = 200;

    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            return response()->json(['success' => true, 'token' => $user->createToken('MyApp')->accessToken]);
        } else {
            return response()->json(['error'=>'Unauthorised or Unknow'], 401);
        }
    }

    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $user = DB::table('users')->insert(
          array(
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
            'admin' => false,
            'github_id' => "",
          )
      );
      if($user){
        $success =  $user;
        //    $success['token'] =  $user->createToken('MyApp')->accessToken;
        Mail::to("groupe2@asr.lan")->send(new RegisterEmail($request));
        return response()->json(['success'=>true, 'data' => $success]);
      }else{
        return response()->json(['success'=>false, 'err' => "Error"]);
      }
    }

    /**
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function getDetails()
    {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }
}
