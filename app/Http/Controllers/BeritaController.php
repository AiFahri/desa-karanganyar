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
            'berita' => $berita,
            'meta' => [
                'title' => 'Portal Berita Desa Karanganyar - Poncokusumo Malang',
                'description' => 'Berita dan pengumuman terbaru dari Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang',
                'keywords' => 'berita desa karanganyar, pengumuman desa karanganyar, karanganyar poncokusumo, berita malang'
            ]
        ]);
    }

    public function show(Berita $berita)
    {
        // Get related news
        $relatedBerita = Berita::where('id', '!=', $berita->id)
                              ->latest('tanggal_publish')
                              ->take(3)
                              ->get();
        
        return Inertia::render('SubBerita', [
            'berita' => $berita,
            'relatedBerita' => $relatedBerita,
            'meta' => [
                'title' => $berita->judul . ' - Berita Desa Karanganyar Poncokusumo',
                'description' => substr(strip_tags($berita->deskripsi), 0, 160),
                'keywords' => 'berita desa karanganyar, ' . $berita->judul . ', karanganyar poncokusumo, berita malang',
                'ogImage' => $berita->gambar ? 'https://is3.cloudhost.id/karanganyar/' . $berita->gambar : null
            ]
        ]);
    }
}
