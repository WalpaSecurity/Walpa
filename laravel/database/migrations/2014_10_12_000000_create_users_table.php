<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->boolean('admin')->default(false); 
            $table->string('password');

            $table->string('github_id');


            $table->rememberToken();
            $table->timestamps();
        });

        // Insert Admin
          DB::table('users')->insert(
              array(
                'name' => "Walpa Admin",
                'email' => "admin@walpa.com",
                'password' => bcrypt("000000"),
                'admin' => true,
                'github_id' => "",
              )
          );

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
