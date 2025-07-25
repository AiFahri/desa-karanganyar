<?php

namespace App\Http\Controllers;

use App\Models\Pengumuman;
use Inertia\Inertia;

class PengumumanController extends Controller
{
    public function index()
    {
        $pengumuman = Pengumuman::latest('tanggal_publish')->paginate(10);
        
        return Inertia::render('PortalBerita', [
            'pengumuman' => $pengumuman
        ]);
    }

    public function show(Pengumuman $pengumuman)
    {
        return Inertia::render('SubPengumuman', [
            'pengumuman' => $pengumuman
        ]);
    }
}
