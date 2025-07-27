<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('umkm', function (Blueprint $table) {
            $table->id();
            $table->string('merk_dagang')->unique();
            $table->string('deskripsi_singkat');
            $table->text('deskripsi_lengkap');
            $table->text('menu_umkm');
            $table->json('media_sosial')->nullable();
            $table->string('kontak_pemesanan');
            $table->string('gambar_path');
            $table->foreignId('published_by')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('umkm');
    }
};