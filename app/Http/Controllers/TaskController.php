<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index() {
      // $tasks = \App\Task::with('users')->get();
      //
      // return $tasks;
    }

    public function getTasks() {
      $tasks = \App\Task::with('users')->get();

      return $tasks;
    }

    public function updateStatus(Request $request) {
     $task = \App\Task::find($request->id);

     $task->status = $request->status;
     $task->save();
   }
}
