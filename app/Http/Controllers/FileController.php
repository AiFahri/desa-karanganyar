<?php

namespace App\Http\Controllers;

use App\Models\PengajuanSurat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function serveLayananSurat($filename)
    {
        // Extract user ID and NIK from filename pattern: {user_id}-{nik}-{type}-{timestamp}.{ext}
        $parts = explode('-', $filename);
        if (count($parts) < 3) {
            abort(404);
        }
        
        $fileUserId = $parts[0];
        
        // Check if user owns this file or is admin
        if (auth()->id() != $fileUserId && !auth()->user()->isAdmin()) {
            abort(403, 'Unauthorized access to file');
        }
        
        $path = 'layanan_surat/' . $filename;
        
        if (!Storage::disk('s3_idcloudhost')->exists($path)) {
            abort(404);
        }
        
        try {
            $file = Storage::disk('s3_idcloudhost')->get($path);
            $mimeType = Storage::disk('s3_idcloudhost')->mimeType($path);
            
            return response($file, 200)
                ->header('Content-Type', $mimeType)
                ->header('Content-Disposition', 'inline; filename="' . $filename . '"');
        } catch (\Exception $e) {
            abort(404);
        }
    }
    
    public function serveAdminLayananSurat($filename)
    {
        $path = 'layanan_surat/' . $filename;
        
        if (!Storage::disk('s3_idcloudhost')->exists($path)) {
            abort(404);
        }
        
        try {
            $file = Storage::disk('s3_idcloudhost')->get($path);
            $mimeType = Storage::disk('s3_idcloudhost')->mimeType($path);
            
            return response($file, 200)
                ->header('Content-Type', $mimeType)
                ->header('Content-Disposition', 'inline; filename="' . $filename . '"');
        } catch (\Exception $e) {
            abort(404);
        }
    }
    
    public function serveSuratJadi($pengajuanId)
    {
        $pengajuan = PengajuanSurat::findOrFail($pengajuanId);
        
        // Check if user owns this pengajuan or is admin
        if (auth()->id() != $pengajuan->user_id && !auth()->user()->isAdmin()) {
            abort(403, 'Unauthorized access to file');
        }
        
        if (!$pengajuan->file_surat_jadi_path) {
            abort(404, 'File surat jadi tidak ditemukan');
        }
        
        if (!Storage::disk('s3_idcloudhost')->exists($pengajuan->file_surat_jadi_path)) {
            abort(404);
        }
        
        try {
            $file = Storage::disk('s3_idcloudhost')->get($pengajuan->file_surat_jadi_path);
            $mimeType = Storage::disk('s3_idcloudhost')->mimeType($pengajuan->file_surat_jadi_path);
            
            $filename = 'surat-' . $pengajuan->surat_jenis->nama_jenis . '-' . $pengajuan->nama_lengkap . '.pdf';
            
            return response($file, 200)
                ->header('Content-Type', $mimeType)
                ->header('Content-Disposition', 'attachment; filename="' . $filename . '"');
        } catch (\Exception $e) {
            abort(404);
        }
    }
}