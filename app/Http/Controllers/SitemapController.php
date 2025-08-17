<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Pengumuman;
use App\Models\Umkm;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index()
    {
        $berita = Berita::latest()->get();
        $pengumuman = Pengumuman::latest()->get();
        $umkm = Umkm::latest()->get();
        
        return response()->view('sitemap.index', [
            'berita' => $berita,
            'pengumuman' => $pengumuman,
            'umkm' => $umkm,
        ])->header('Content-Type', 'text/xml');
    }
}