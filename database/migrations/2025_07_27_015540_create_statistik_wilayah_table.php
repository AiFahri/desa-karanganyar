<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('statistik_wilayah', function (Blueprint $table) {
            $table->id();
            $table->decimal('luas_wilayah', 8, 2)->comment('Luas wilayah dalam km²');
            $table->integer('jumlah_dusun')->unsigned();
            $table->integer('jumlah_rw')->unsigned();
            $table->integer('jumlah_rt')->unsigned();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('statistik_wilayah');
    }
};