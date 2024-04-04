<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        
        // $data = [
        //     'message' => 'Welcome!',
        //     'status' => 'success'
        // ];
    
         //return response()->json($request);
        $user = User::where('u_email',$request->email)->first();
        
        //check if user is found
        if (!$user) {
            return response()->json(['error' => 'Invalid email. Please enter a valid email.'], 400);
        }
       // return response()->json($user);
       //$password =$request->password;
       
       //encrypt the password
       // $encrypted_pass = EncryptionDecryptionHelper::encryptData($password);
     
       
        //if user exists validate password and redirect to respective page
        if (strcmp($user->u_password, $request->password) === 0) {
            return response()->json(['message' => 'Admin logged in successfully'], 200);
        }else {
            // Password does not match, return error response
            return response()->json(['error' => 'Invalid password. Please enter a valid password.'], 400);
        }


    }
}
