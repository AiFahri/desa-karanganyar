<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Pengumuman;
use Inertia\Inertia;

class BeritaController extends Controller
{
    public function index()
    {
        $pengumuman = Pengumuman::latest('tanggal_publish')->paginate(10);
        $berita = Berita::latest('tanggal_publish')->paginate(10);
        
        return Inertia::render('PortalBerita', [
            'pengumuman' => $pengumuman,
            'berita' => $berita
        ]);
    }

    public function show(Berita $berita)
    {
        return Inertia::render('SubBerita', [
            'berita' => $berita
        ]);
    }
}