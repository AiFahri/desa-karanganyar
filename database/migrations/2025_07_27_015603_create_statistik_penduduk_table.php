<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('statistik_penduduk', function (Blueprint $table) {
            $table->id();
            $table->integer('jumlah_penduduk')->unsigned();
            $table->integer('jumlah_kepala_keluarga')->unsigned();
            $table->integer('jumlah_pria')->unsigned();
            $table->integer('jumlah_wanita')->unsigned();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('statistik_penduduk');
    }
};