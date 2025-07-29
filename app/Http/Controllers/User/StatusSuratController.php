<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\PengajuanSurat;
use Inertia\Inertia;

class StatusSuratController extends Controller
{
    public function index()
    {
        $pengajuanSurat = PengajuanSurat::with(['suratJenis', 'user'])
            ->where('user_id', auth()->id())
            ->latest()
            ->get()
            ->map(function ($item) {
                return $item->append(['foto_ktp_url', 'foto_kk_url', 'surat_jadi_url']);
            });

        return Inertia::render('RiwayatPengajuan', [
            'pengajuanSurat' => $pengajuanSurat
        ]);
    }
}
