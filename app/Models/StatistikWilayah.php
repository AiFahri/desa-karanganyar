<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatistikWilayah extends Model
{
    use HasFactory;

    protected $table = 'statistik_wilayah';

    protected $fillable = [
        'luas_wilayah',
        'jumlah_dusun',
        'jumlah_rw',
        'jumlah_rt',
    ];

    protected $casts = [
        'luas_wilayah' => 'decimal:2',
        'jumlah_dusun' => 'integer',
        'jumlah_rw' => 'integer',
        'jumlah_rt' => 'integer',
    ];

    /**
     * Get the first (and only) record, create if doesn't exist
     */
    public static function getOrCreate()
    {
        return static::firstOrCreate([], [
            'luas_wilayah' => 0,
            'jumlah_dusun' => 0,
            'jumlah_rw' => 0,
            'jumlah_rt' => 0,
        ]);
    }
}