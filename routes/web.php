<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/timeline', function () {
    return view('home');
});

Route::get('/tasks', function () {
    return view('home');
});

Route::get('/getTasks', 'TaskController@getTasks');
Route::put('/tasks/updateStatus', 'TaskController@updateStatus');

Route::get('/users', 'UserController@index');
