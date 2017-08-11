<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index() {
      $tasks = \App\Task::with('users')->get();

      return $tasks;
    }
}
