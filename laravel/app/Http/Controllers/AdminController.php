<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;

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
}
