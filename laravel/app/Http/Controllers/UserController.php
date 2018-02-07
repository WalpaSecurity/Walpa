<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
class UserController extends Controller
{

        public function googleLogin(Request $request)  {

            $gClient = new \Google_Client();
          //  $gClient->setApplicationName(config('services.google.app_name'));
            $gClient->setClientId("639601032152-pc7l02septjkki9li24c59cj089sm6h8.apps.googleusercontent.com");
            $gClient->setClientSecret("TFhMdQ_LheO3MEn3KHradDnO");
            $gClient->setRedirectUri("http://www.walpa.com/glogin");
          //  $gClient->setDeveloperKey(config('services.google.api_key'));
            $gClient->setScopes(array(
                'https://www.googleapis.com/auth/plus.me',
                'https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile',
            ));
            $google_oauthV2 = new \Google_Service_Oauth2($gClient);
            if ($request->get('code')){
                $gClient->authenticate($request->get('code'));
                $request->session()->put('token', $gClient->getAccessToken());
            }
            if ($request->session()->get('token'))
            {
                $gClient->setAccessToken($request->session()->get('token'));
            }
            if ($gClient->getAccessToken())
            {
                //For logged in user, get details from google using access token
                $guser = $google_oauthV2->userinfo->get();

                    $request->session()->put('name', $guser['name']);
                    if ($user =User::where('email',$guser['email'])->first())
                    {
                        echo "LOGIN";
                        die();
                    }else{
                      echo "REGISTER";
                      die();
                    }
             return redirect()->route('user.glist');
            } else
            {
                //For Guest user, get google login url
                $authUrl = $gClient->createAuthUrl();
                return redirect()->to($authUrl);
            }
        }
        public function listGoogleUser(Request $request){
          $users = User::orderBy('id','DESC')->paginate(5);
         return view('users.list',compact('users'))->with('i', ($request->input('page', 1) - 1) * 5);;
        }
}
