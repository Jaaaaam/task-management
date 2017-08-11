<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 10)->create()->each(function ($user) {
          $user->tasks()->save(factory(App\Task::class)->make());
          $user->events()->save(factory(App\Event::class)->make());
          // $tasks->users()->save(App/User::get());
        });
    }
}
