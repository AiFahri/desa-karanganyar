<?php

namespace App\Http\Controllers;

use App\Models\Umkm;
use Inertia\Inertia;

class UmkmController extends Controller
{
    public function index()
    {
        $umkm = Umkm::latest()->get();
        
        return Inertia::render('Home', [
            'umkmData' => $umkm
        ]);
    }

    public function show($slug)
    {
        $umkm = Umkm::where('slug', $slug)->firstOrFail();
        
        return Inertia::render('SubPotensi', [
            'umkm' => $umkm
        ]);
    }
}