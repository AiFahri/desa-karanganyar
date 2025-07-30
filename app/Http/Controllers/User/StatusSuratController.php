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
            ->get();

        return Inertia::render('RiwayatPengajuan', [
            'pengajuanSurat' => $pengajuanSurat
        ]);
    }
}

