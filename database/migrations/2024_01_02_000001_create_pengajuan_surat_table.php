<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('pengajuan_surat', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('surat_jenis_id')->constrained('surat_jenis')->onDelete('cascade');
            $table->string('nama_lengkap');
            $table->string('nik_pemohon', 16);
            $table->string('no_kk_pemohon', 16);
            $table->string('foto_ktp_path');
            $table->string('foto_kk_path');
            $table->enum('status', ['sedang diproses', 'selesai', 'ditolak'])->default('sedang diproses');
            $table->text('catatan_admin')->nullable();
            $table->string('file_surat_jadi_path')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('pengajuan_surat');
    }
};