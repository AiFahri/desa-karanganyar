<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Umkm extends Model
{
    use HasFactory;

    protected $table = 'umkm';

    protected $fillable = [
        'merk_dagang',
        'deskripsi_singkat', 
        'deskripsi_lengkap',
        'menu_umkm',
        'media_sosial',
        'kontak_pemesanan',
        'gambar_path',
        'published_by'
    ];

    protected $casts = [
        'media_sosial' => 'array',
    ];

    public function publisher()
    {
        return $this->belongsTo(User::class, 'published_by');
    }

    public function getGambarUrlAttribute()
    {
        return $this->gambar_path ? 
            'https://is3.cloudhost.id/karanganyar/' . $this->gambar_path : 
            null;
    }
}