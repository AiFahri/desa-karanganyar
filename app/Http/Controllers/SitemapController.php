<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Pengumuman;
use App\Models\Umkm;
use Illuminate\Http\Response;
use Carbon\Carbon;

class SitemapController extends Controller
{
    public function index()
    {
        $berita = Berita::latest()->get();
        $pengumuman = Pengumuman::latest()->get();
        $umkm = Umkm::latest()->get();
        
        // Add static pages with priority and changefreq
        $staticPages = [
            [
                'url' => 'https://karanganyarmalang.com/',
                'lastmod' => Carbon::now()->toISOString(),
                'changefreq' => 'daily',
                'priority' => '1.0'
            ],
            [
                'url' => 'https://karanganyarmalang.com/profil',
                'lastmod' => Carbon::now()->toISOString(),
                'changefreq' => 'weekly',
                'priority' => '0.9'
            ],
            [
                'url' => 'https://karanganyarmalang.com/portal',
                'lastmod' => Carbon::now()->toISOString(),
                'changefreq' => 'daily',
                'priority' => '0.8'
            ],
            [
                'url' => 'https://karanganyarmalang.com/pengumuman',
                'lastmod' => Carbon::now()->toISOString(),
                'changefreq' => 'daily',
                'priority' => '0.8'
            ],
            [
                'url' => 'https://karanganyarmalang.com/layanan',
                'lastmod' => Carbon::now()->toISOString(),
                'changefreq' => 'weekly',
                'priority' => '0.8'
            ],
            [
                'url' => 'https://karanganyarmalang.com/statistik',
                'lastmod' => Carbon::now()->toISOString(),
                'changefreq' => 'monthly',
                'priority' => '0.7'
            ]
        ];
        
        return response()->view('sitemap.index', [
            'berita' => $berita,
            'pengumuman' => $pengumuman,
            'umkm' => $umkm,
            'staticPages' => $staticPages,
        ])->header('Content-Type', 'text/xml');
    }
}