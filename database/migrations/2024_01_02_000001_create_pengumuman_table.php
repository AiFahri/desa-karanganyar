<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('pengumuman', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->string('slug');
            $table->timestamp('tanggal_publish')->useCurrent();
            $table->datetime('waktu_acara')->nullable();
            $table->string('tempat_acara');
            $table->text('deskripsi');
            $table->string('published_by')->default('Admin Desa Karanganyar');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('pengumuman');
    }
};