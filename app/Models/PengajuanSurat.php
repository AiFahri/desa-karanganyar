<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class PengajuanSurat extends Model
{
    use HasFactory;

    protected $table = 'pengajuan_surat';

    protected $fillable = [
        'user_id',
        'surat_jenis_id',
        'nama_lengkap',
        'nik_pemohon',
        'no_kk_pemohon',
        'foto_ktp_path',
        'foto_kk_path',
        'status',
        'catatan_admin',
        'file_surat_jadi_path'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function suratJenis()
    {
        return $this->belongsTo(SuratJenis::class);
    }

    public function getFotoKtpUrlAttribute()
    {
        if (!$this->foto_ktp_path) {
            return null;
        }
        
        try {
            return Storage::disk('s3_idcloudhost')->url($this->foto_ktp_path);
        } catch (\Exception $e) {
            return null;
        }
    }

    public function getFotoKkUrlAttribute()
    {
        if (!$this->foto_kk_path) {
            return null;
        }
        
        try {
            return Storage::disk('s3_idcloudhost')->url($this->foto_kk_path);
        } catch (\Exception $e) {
            return null;
        }
    }

    public function getSuratJadiUrlAttribute()
    {
        if (!$this->file_surat_jadi_path) {
            return null;
        }
        
        try {
            return Storage::disk('s3_idcloudhost')->url($this->file_surat_jadi_path);
        } catch (\Exception $e) {
            return null;
        }
    }

    protected $appends = ['foto_ktp_url', 'foto_kk_url', 'surat_jadi_url'];
}


