<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Pengumuman extends Model
{
    use HasFactory;

    protected $table = 'pengumuman';
    
    protected $fillable = [
        'judul',
        'slug',
        'tanggal_publish',
        'waktu_acara',
        'tempat_acara',
        'deskripsi',
        'published_by',
        'user_id'
    ];

    protected $casts = [
        'tanggal_publish' => 'datetime',
        'waktu_acara' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($pengumuman) {
            $pengumuman->slug = Str::slug($pengumuman->judul);
            
            $originalSlug = $pengumuman->slug;
            $count = 1;
            while (static::where('slug', $pengumuman->slug)->exists()) {
                $pengumuman->slug = $originalSlug . '-' . $count;
                $count++;
            }
        });

        static::updating(function ($pengumuman) {
            if ($pengumuman->isDirty('judul')) {
                $pengumuman->slug = Str::slug($pengumuman->judul);
                
                $originalSlug = $pengumuman->slug;
                $count = 1;
                while (static::where('slug', $pengumuman->slug)->where('id', '!=', $pengumuman->id)->exists()) {
                    $pengumuman->slug = $originalSlug . '-' . $count;
                    $count++;
                }
            }
        });
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

