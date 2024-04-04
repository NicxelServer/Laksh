<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    // function register(Request $req)
    // {
    //     $user = new User();
    //     $user->name = $req->input('name');
    //     $user->email = $req->input('email');
    //     $user->password = Hash::make($req->input('password'));
    //     $user->save();
    //     return $user;
    // }

    // function login(Request $req)
    // {
    //     // Validate request data
    //     $req->validate([
    //         'email' => 'required|email',
    //         'password' => 'required',
    //     ]);

    //     // Attempt to authenticate the user
    //     $credentials = $req->only('email', 'password');
    //     if (Auth::attempt($credentials)) {
    //         // Authentication successful, return authenticated user
    //         return Auth::user();
    //     } else {
    //         // Authentication failed, return error message
    //         return response()->json(['error' => 'Invalid credentials'], 401);
    //     }
    // }
}
