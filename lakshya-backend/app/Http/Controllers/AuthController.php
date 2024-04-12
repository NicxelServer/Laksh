<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Helpers\EncDecHelper;


class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        //find the user from email id
        $user = User::where('u_email',$request->email)->where('u_designation','admin')->first();
        
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
}
