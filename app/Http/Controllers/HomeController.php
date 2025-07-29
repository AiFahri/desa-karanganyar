<?php

namespace App\Http\Controllers;

use App\Models\Umkm;
use App\Models\Berita;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $umkmData = Umkm::latest()->take(6)->get();
        $beritaData = Berita::latest()->take(3)->get();
        
        return Inertia::render('Home', [
            'umkmData' => $umkmData,
            'beritaData' => $beritaData
        ]);
    }
}