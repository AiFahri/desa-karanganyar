<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatistikPenduduk extends Model
{
    use HasFactory;

    protected $table = 'statistik_penduduk';

    protected $fillable = [
        'jumlah_penduduk',
        'jumlah_kepala_keluarga',
        'jumlah_pria',
        'jumlah_wanita',
    ];

    protected $casts = [
        'jumlah_penduduk' => 'integer',
        'jumlah_kepala_keluarga' => 'integer',
        'jumlah_pria' => 'integer',
        'jumlah_wanita' => 'integer',
    ];

    /**
     * Get the first (and only) record, create if doesn't exist
     */
    public static function getOrCreate()
    {
        return static::firstOrCreate([], [
            'jumlah_penduduk' => 0,
            'jumlah_kepala_keluarga' => 0,
            'jumlah_pria' => 0,
            'jumlah_wanita' => 0,
        ]);
    }

    /**
     * Validate that pria + wanita = total penduduk
     */
    public function isGenderSumValid(): bool
    {
        return ($this->jumlah_pria + $this->jumlah_wanita) === $this->jumlah_penduduk;
    }
}