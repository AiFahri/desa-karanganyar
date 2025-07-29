<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PengajuanSurat;
use App\Mail\LetterReadyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PengajuanSuratController extends Controller
{
    public function index(Request $request)
    {
        $query = PengajuanSurat::with(['suratJenis', 'user'])
            ->latest();

        // Filter by search
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('nama_lengkap', 'like', "%{$search}%")
                  ->orWhere('nik_pemohon', 'like', "%{$search}%")
                  ->orWhereHas('suratJenis', function($sq) use ($search) {
                      $sq->where('nama_jenis', 'like', "%{$search}%");
                  });
            });
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $pengajuanSurat = $query->paginate(10)->withQueryString();
        
        // Append accessor attributes
        $pengajuanSurat->getCollection()->transform(function ($item) {
            return $item->append(['foto_ktp_url', 'foto_kk_url', 'surat_jadi_url']);
        });
        
        // Append accessor attributes
        $pengajuanSurat->getCollection()->transform(function ($item) {
            return $item->append(['foto_ktp_url', 'foto_kk_url', 'surat_jadi_url']);
        });

        return Inertia::render('AdminPengajuanLayanan', [
            'pengajuanSurat' => $pengajuanSurat,
            'filters' => $request->only(['search', 'status'])
        ]);
    }

    public function show(PengajuanSurat $pengajuanSurat)
    {
        $pengajuanSurat->load(['user', 'suratJenis']);
        
        return Inertia::render('AdminPengajuanSuratDetail', [
            'pengajuan' => $pengajuanSurat
        ]);
    }

    public function update(Request $request, PengajuanSurat $pengajuanSurat)
    {
        $request->validate([
            'status' => 'required|in:sedang diproses,selesai,ditolak',
            'catatan_admin' => 'nullable|string|max:1000'
        ]);

        $oldStatus = $pengajuanSurat->status;
        
        $pengajuanSurat->update([
            'status' => $request->status,
            'catatan_admin' => $request->catatan_admin
        ]);

        // Send email notification if status changed to 'selesai'
        if ($oldStatus !== 'selesai' && $request->status === 'selesai') {
            Mail::to($pengajuanSurat->user->email)->queue(new LetterReadyEmail($pengajuanSurat));
            
            Log::info('Letter ready email sent', [
                'pengajuan_id' => $pengajuanSurat->id,
                'user_email' => $pengajuanSurat->user->email
            ]);
        }

        return redirect()->back()->with('success', 'Status pengajuan berhasil diperbarui.');
    }

    public function uploadSuratJadi(Request $request, PengajuanSurat $pengajuanSurat)
    {
        $request->validate([
            'file_surat' => 'required|file|mimes:pdf,doc,docx|max:5000'
        ], [
            'file_surat.required' => 'File surat harus diupload',
            'file_surat.mimes' => 'Format file harus: PDF, DOC, atau DOCX',
            'file_surat.max' => 'Ukuran file maksimal 5MB'
        ]);

        try {
            if ($pengajuanSurat->file_surat_jadi_path) {
                Storage::disk('s3_idcloudhost')->delete($pengajuanSurat->file_surat_jadi_path);
            }

            $file = $request->file('file_surat');
            $filename = 'surat-' . $pengajuanSurat->id . '-' . $pengajuanSurat->nik_pemohon . '-' . time() . '.' . $file->getClientOriginalExtension();
            $path = 'layanan_surat/generated_surat/' . $filename;
            
            $disk = Storage::disk('s3_idcloudhost');
            $result = $disk->put($path, file_get_contents($file->getRealPath()), [
                'visibility' => 'private'
            ]);
            
            if ($result) {
                $pengajuanSurat->update([
                    'file_surat_jadi_path' => $path,
                    'status' => 'selesai'
                ]);

                // Send email notification
                Mail::to($pengajuanSurat->user->email)->queue(new LetterReadyEmail($pengajuanSurat));
                
                Log::info('Surat jadi uploaded successfully', [
                    'pengajuan_id' => $pengajuanSurat->id,
                    'path' => $path
                ]);

                return redirect()->back()->with('success', 'File surat berhasil diupload dan status diubah menjadi selesai.');
            } else {
                return redirect()->back()->withErrors(['file_surat' => 'Gagal upload file surat']);
            }

        } catch (\Exception $e) {
            Log::error('Upload Surat Jadi Error', [
                'message' => $e->getMessage(),
 
               'pengajuan_id' => $pengajuanSurat->id
            ]);
            return redirect()->back()->withErrors(['file_surat' => 'Error upload: ' . $e->getMessage()]);
        }
    }
}


