<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Umkm extends Model
{
    use HasFactory;

    protected $table = 'umkm';

    protected $fillable = [
        'merk_dagang',
        'slug',
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
        'menu_umkm' => 'array',
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

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($umkm) {
            if (empty($umkm->slug)) {
                $umkm->slug = Str::slug($umkm->merk_dagang);
            }
        });
    }
}
