<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('surat_jenis', function (Blueprint $table) {
            $table->id();
            $table->string('nama_jenis')->unique();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('surat_jenis');
    }
};