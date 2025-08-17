<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Berita extends Model
{
    use HasFactory;

    protected $table = 'berita';
    
    protected $fillable = [
        'judul',
        'slug',
        'tanggal_publish',
        'deskripsi',
        'gambar',
        'published_by',
        'user_id'
    ];

    protected $casts = [
        'tanggal_publish' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($berita) {
            if (empty($berita->slug)) {
                $berita->slug = static::generateUniqueSlug($berita->judul);
            }
        });
        
        static::updating(function ($berita) {
            if ($berita->isDirty('judul')) {
                $berita->slug = static::generateUniqueSlug($berita->judul, $berita->id);
            }
        });
    }

    protected static function generateUniqueSlug($title, $id = null)
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;
        
        // Check if the slug exists
        $query = static::where('slug', $slug);
        if ($id) {
            $query->where('id', '!=', $id);
        }
        
        // If slug exists, append a number
        while ($query->exists()) {
            $slug = $originalSlug . '-' . $count++;
            $query = static::where('slug', $slug);
            if ($id) {
                $query->where('id', '!=', $id);
            }
        }
        
        return $slug;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

