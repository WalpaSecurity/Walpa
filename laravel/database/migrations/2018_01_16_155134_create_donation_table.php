<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDonationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
         Schema::create('donations', function (Blueprint $table) {
             $table->increments('id');
             $table->string('lastName');
             $table->string('firstName');
             $table->string('email');
             $table->decimal('amount');
             $table->enum('type', ['bitcoin', 'euro', 'ether']);
             $table->timestamps();
         });
     }

     /**
      * Reverse the migrations.
      *
      * @return void
      */
     public function down()
     {
         Schema::dropIfExists('donations');
     }
}
