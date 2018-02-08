<?php
namespace App\Http\Controllers\Auth;


use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;
use Redirect;
use Socialite;

class OauthController extends Controller
{
  /**
   * Redirect the user to the GitHub authentication page.
   *
   * @return Response
   */
  public function redirectToProvider()
  {
      return Socialite::driver('github')->redirect();
  }

  /**
   * Obtain the user information from GitHub.
   *
   * @return Response
   */
  public function handleProviderCallback()
  {
      try {
          $user = Socialite::driver('github')->user();
      } catch (Exception $e) {
          return Redirect::to('auth/github');
      }

      $authUser = $this->findOrCreateUser($user);

      Auth::login($authUser, true);

    /*  if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {

      }else{

      }*/

      try {
          $user = Socialite::driver('github')->user();
      } catch (Exception $e) {
          return Redirect::to('auth/github');
      }
      $authUser = $this->findOrCreateUser($user);

      if(Auth::login($authUser, true)){
        $user = Auth::user();
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        dd($success['token']);
        return response()->json(['success' => true, 'token' => $user->createToken('MyApp')->accessToken]);
      }else{
        return response()->json(['success' => false, 'err' => "Error..."]);
      }


    //  return Redirect::to('home');
  }

  /**
   * Return user if exists; create and return if doesn't
   *
   * @param $githubUser
   * @return User
   */
  private function findOrCreateUser($githubUser)
  {

      if ($authUser = User::where('github_id', $githubUser->id)->first()) {
          return $authUser;
      }

     return User::create([
          'name' => $githubUser->name,
          'email' => $githubUser->email,
          'password' => "",
          'admin' => false,
          'github_id' => $githubUser->id,
      ]);

  }
}

/*


if(Auth::login($authUser, true)){
  $user = Auth::user();
  $success['token'] =  $user->createToken('MyApp')->accessToken;
  $changeUser = DB::table('users')
         ->where('id', Auth::user()->id)
         ->update(['remember_token' => $user->createToken('MyApp')->accessToken]);
  return response()->json(['success' => true, 'token' => $user->createToken('MyApp')->accessToken]);
}else{
  return response()->json(['success' => false, 'err' => "Error..."]);
}


namespace App\Http\Controllers\Auth;


use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Auth;
use Redirect;
use Socialite;

class OauthController extends Controller
{

  public function redirectToProvider()
  {
      return Socialite::driver('github')->redirect();
  }


  public function handleProviderCallback()
  {
      //return response()->json(['toto' => "totoot"]);

      try {
          $user = Socialite::driver('github')->user();
      } catch (Exception $e) {
          return Redirect::to('auth/github');
      }
      $authUser = $this->findOrCreateUser($user);
      dd(Auth::login($authUser, true));

      if(Auth::login($authUser, true)){
        $user = Auth::user();
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        return response()->json(['success' => true, 'token' => $user->createToken('MyApp')->accessToken]);
      }else{
        return response()->json(['success' => false, 'err' => "Error..."]);
      }
  }


  private function findOrCreateUser($githubUser)
  {

      if ($authUser = User::where('github_id', $githubUser->id)->first()) {
          return $authUser;
      }
     return User::create([
          'name' => $githubUser->name,
          'email' => $githubUser->email,
          'password' => "",
          'admin' => false,
          'github_id' => $githubUser->id,
      ]);

  }
}

*/
