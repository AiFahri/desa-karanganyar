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
        if (!$this->foto_ktp_path) return null;
        
        // Generate temporary signed URL (valid for 1 hour)
        try {
            return Storage::disk('s3_idcloudhost')->temporaryUrl(
                $this->foto_ktp_path, 
                now()->addHours(1)
            );
        } catch (\Exception $e) {
            // Fallback to direct URL if signing fails
            return 'https://is3.cloudhost.id/karanganyar/' . $this->foto_ktp_path;
        }
    }

    public function getFotoKkUrlAttribute()
    {
        if (!$this->foto_kk_path) return null;
        
        // Generate temporary signed URL (valid for 1 hour)
        try {
            return Storage::disk('s3_idcloudhost')->temporaryUrl(
                $this->foto_kk_path, 
                now()->addHours(1)
            );
        } catch (\Exception $e) {
            // Fallback to direct URL if signing fails
            return 'https://is3.cloudhost.id/karanganyar/' . $this->foto_kk_path;
        }
    }

    public function getSuratJadiUrlAttribute()
    {
        if (!$this->file_surat_jadi_path) return null;
        
        // Generate temporary signed URL for download (valid for 1 hour)
        try {
            return Storage::disk('s3_idcloudhost')->temporaryUrl(
                $this->file_surat_jadi_path, 
                now()->addHours(1)
            );
        } catch (\Exception $e) {
            // Fallback to direct URL if signing fails
            return 'https://is3.cloudhost.id/karanganyar/' . $this->file_surat_jadi_path;
        }
    }

    protected $appends = ['foto_ktp_url', 'foto_kk_url', 'surat_jadi_url'];
}




