<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PengajuanSurat;
use App\Models\User;
use App\Models\Berita;
use App\Models\Pengumuman;
use App\Models\Umkm;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'total_surat' => PengajuanSurat::count(),
            'pending_surat' => PengajuanSurat::where('status', 'sedang diproses')->count(),
            'completed_surat' => PengajuanSurat::where('status', 'selesai')->count(),
            'total_pengguna' => User::count(),
            'total_berita' => Berita::count(),
            'total_pengumuman' => Pengumuman::count(),
            'total_umkm' => Umkm::count(),
        ];

        $recentUsers = User::latest()
            ->take(10)
            ->get(['id', 'name', 'email', 'nik', 'no_hp', 'created_at']);

        return Inertia::render('AdminDashboard', [
            'stats' => $stats,
            'recentUsers' => $recentUsers
        ]);
    }
}


