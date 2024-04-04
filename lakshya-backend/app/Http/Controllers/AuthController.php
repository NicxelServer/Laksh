<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Helpers\EncDecHelper;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        //find the user from email id
        $user = User::where('u_email',$request->email)->first();
        
        //check email is invalid return invalid error msg
        if (!$user) {
            return response()->json(['error' => 'Invalid email. Please enter a valid email.'], 400);
        }
       //return response()->json($request);
        //enc the pass recived from the request
        $encPass = EncDecHelper::encryptData($request->password);
       
        //if user exists validate password and redirect to respective page
        if (strcmp($user->u_password, $encPass) === 0) {
            return response()->json(['message' => 'Admin logged in successfully'], 200);
        }else {
            // Password does not match, return error response
            return response()->json(['error' => 'Invalid password. Please enter a valid password.'], 400);
        }

    }


    function register(Request $req)
    {
        $user = new User();
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));
        $user->save();
        return $user;
    }

    function userlogin(Request $req)
    {
        // Validate request data
        $req->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Attempt to authenticate the user
        $credentials = $req->only('email', 'password');
        if (Auth::attempt($credentials)) {
            // Authentication successful, return authenticated user
            return Auth::user();
        } else {
            // Authentication failed, return error message
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    }
}
