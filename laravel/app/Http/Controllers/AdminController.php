<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;
use Illuminate\Support\Facades\Validator;
use Mail;
use App\User;
use App\Mail\RegisterEmail;

class AdminController extends Controller
{
  protected function getUser ()
  {
    $admin = Auth::user()->admin;

    if($admin == true){
    $users = DB::table('users')
               ->select('*')
               ->get();

      return response()
            ->json([
                'success' => true,
                'data' => $users,
            ]);
    }else{
      return response()
            ->json([
                'success' => false,
                'error' => 'Vous n\'etes pas admin.'
      ]);
    }
  }

  protected function changeID ($id)
  {
    $admin = Auth::user()->admin;

    if($admin == true){
        $changeUser = DB::table('users')
               ->where('id', $id)
               ->update(['admin' => true]);

        return response()->json(['success' => true,]);
    }else{
      return response()
            ->json([
                'success' => false,
                'error' => 'Vous n\'etes pas admin.'
      ]);
    }

  }

  protected function deleteAdmin ($id)
  {
    $admin = Auth::user()->admin;

    if($admin == true){
      $changeUser = DB::table('users')
          ->where('id', $id)
          ->update(['admin' => false]);

      return response()->json(['success' => true,]);
    }else{
      return response()
            ->json([
                'success' => false,
                'error' => 'Vous n\'etes pas admin.'
      ]);
    }
  }

  protected function addAdmin (Request $request)
  {

    $admin = Auth::user()->admin;

    if($admin == true){
      $validator = Validator::make($request->all(), [
          'name' => 'required|string|max:255',
          'email' => 'required|string|email|max:255|unique:users',
          'password' => 'required|string|min:6',
      ]);

      if ($validator->fails() ) {
          return response()->json(['error'=>$validator->errors()], 401);
      }

      if (User::where('email', $request['email'])->first()) {
        return response()
              ->json([
                  'success' => false,
                  'error' => 'Email deja utilisee'
        ]);
      }

        $result = DB::table('users')->insert(
          array(
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
            'admin' => true,
            'github_id' => "",
          )
      );
      
      Mail::to("groupe2@asr.lan")->send(new RegisterEmail($request));

      return response()->json(['success' => true,]);
    }else{
      return response()
            ->json([
                'success' => false,
                'error' => 'Vous n\'etes pas admin.'
      ]);
    }
  }
}
