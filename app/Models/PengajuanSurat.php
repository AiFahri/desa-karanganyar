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
        return $this->foto_ktp_path ? 
            Storage::disk('s3_idcloudhost')->temporaryUrl($this->foto_ktp_path, now()->addMinutes(10)) : 
            null;
    }

    public function getFotoKkUrlAttribute()
    {
        return $this->foto_kk_path ? 
            Storage::disk('s3_idcloudhost')->temporaryUrl($this->foto_kk_path, now()->addMinutes(10)) : 
            null;
    }

    public function getSuratJadiUrlAttribute()
    {
        return $this->file_surat_jadi_path ? 
            Storage::disk('s3_idcloudhost')->temporaryUrl($this->file_surat_jadi_path, now()->addMinutes(30)) : 
            null;
    }
}