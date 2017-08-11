<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'position' => $faker->jobTitle,
        'birthday' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'image' => $faker->imageUrl($width=50, $height=50, 'people'),
        'remember_token' => str_random(10),
        // 'task_id' = $faker->randomElement(App\Task::all()->list('id'))
    ];
});

$factory->define(App\Task::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->text(100)  ,
        'description' => $faker->sentence(12, true),
        'priority' => $faker->randomElement(['low','mid','high']),
        'status' => $faker->randomElement(['todo','doing','done'])
    ];
});

$factory->define(App\Event::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->sentence(12, true),
        'place' => $faker->address,
        'date' => $faker->date('Y-m-d', 'now'),
        'time' => $faker->time('H:i:s', 'now')
    ];
});
