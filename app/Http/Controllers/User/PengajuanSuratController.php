<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\PengajuanSuratStoreRequest;
use App\Models\PengajuanSurat;
use App\Models\SuratJenis;
use App\Mail\NewSubmissionEmail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PengajuanSuratController extends Controller
{
    public function create()
    {
        $suratJenis = \App\Models\SuratJenis::all();
        
        \Log::info('PengajuanSurat create method called', [
            'surat_jenis_count' => $suratJenis->count(),
            'surat_jenis_data' => $suratJenis->toArray()
        ]);
        
        return inertia('SubLayananBuatSurat', [
            'suratJenis' => $suratJenis
        ]);
    }

    public function store(PengajuanSuratStoreRequest $request)
    {
        $data = $request->validated();
        
        try {
            if ($request->hasFile('foto_ktp')) {
                $ktpFile = $request->file('foto_ktp');
                $extension = $ktpFile->getClientOriginalExtension();
                $ktpFilename = auth()->id() . '-' . $data['nik_pemohon'] . '-ktp-' . time() . '.' . $extension;
                $ktpPath = 'layanan_surat/' . $ktpFilename;
                
                $disk = Storage::disk('s3_idcloudhost');
                $result = $disk->put($ktpPath, file_get_contents($ktpFile->getRealPath()), [
                    'visibility' => 'public',
                    'ACL' => 'public-read',
                    'ContentType' => $ktpFile->getMimeType()
                ]);
                
                if ($result) {
                    $data['foto_ktp_path'] = $ktpPath;
                } else {
                    return redirect()->back()->withErrors(['foto_ktp' => 'Gagal upload foto KTP']);
                }
            }

            if ($request->hasFile('foto_kk')) {
                $kkFile = $request->file('foto_kk');
                $extension = $kkFile->getClientOriginalExtension();
                $kkFilename = auth()->id() . '-' . $data['nik_pemohon'] . '-kk-' . time() . '.' . $extension;
                $kkPath = 'layanan_surat/' . $kkFilename;
                
                $disk = Storage::disk('s3_idcloudhost');
                $result = $disk->put($kkPath, file_get_contents($kkFile->getRealPath()), [
                    'visibility' => 'public',
                    'ACL' => 'public-read',
                    'ContentType' => $kkFile->getMimeType()
                ]);
                
                if ($result) {
                    $data['foto_kk_path'] = $kkPath;
                } else {
                    return redirect()->back()->withErrors(['foto_kk' => 'Gagal upload foto KK']);
                }
            }

            unset($data['foto_ktp'], $data['foto_kk']);
            
            // Create pengajuan surat
            $pengajuan = PengajuanSurat::create([
                ...$data,
                'user_id' => auth()->id(),
                'status' => 'sedang diproses'
            ]);

            // Send email notification to admin
            $adminEmail = config('mail.admin_email', 'admin@karanganyar.desa.id');
            Mail::to($adminEmail)->queue(new NewSubmissionEmail($pengajuan));

            // Redirect to status page with success message
            return redirect()->back()->with('success', 'Pengajuan surat berhasil dikirim');

        } catch (\Exception $e) {
            \Log::error('PengajuanSurat store error', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return redirect()->back()->withErrors(['error' => 'Terjadi kesalahan: ' . $e->getMessage()]);
        }
    }

    public function index()
    {
        $pengajuanSurat = PengajuanSurat::with('suratJenis')
            ->where('user_id', auth()->id())
            ->latest()
            ->get();

        return inertia('RiwayatPengajuan', [
            'pengajuanSurat' => $pengajuanSurat
        ]);
    }

    public function status()
    {
        $latestPengajuan = PengajuanSurat::with('suratJenis')
            ->where('user_id', auth()->id())
            ->latest()
            ->first();

        return inertia('SubLayananStatusSurat', [
            'pengajuan' => $latestPengajuan
        ]);
    }
}








