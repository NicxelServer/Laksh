<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/', function () {
    $data = [
        'message' => 'Welcome to our API!',
        'status' => 'success'
    ];

    return response()->json($data);
});

//admin login 
Route::post('/login',[AuthController::class,'login']);

//user registrtion
Route::post('/register',[AuthController::class,'register']);

//user login
Route::post('/logsin',[AuthController::class,'uLogin']);

//create uom
Route::post('/unit-of-measurements',[AdminController::class,'createUOM']);

Route::get('/unit-of-measurements',[AdminController::class,'showUOM']);

Route::delete('/unit-of-measurements/{id}',[AdminController::class,'deleteUOM']);

//create category
Route::post('/categories',[CategoryController::class,'createCategory']);

//view categories
Route::get('/categories',[CategoryController::class,'viewCategories']);

//delete categories
Route::delete('/categories/{id}',[CategoryController::class,'deleteCategory']);

//create sub category
Route::post('/sub-categories',[CategoryController::class,'createSubCategory']);

//view sub categories
Route::get('/sub-categories',[CategoryController::class,'viewSubCategories']);

//delete sub categories
Route::delete('/sub-categories/{id}',[CategoryController::class,'deleteSubCategory']);


Route::middleware(['preventBackHistory'])->group(function () {



});





