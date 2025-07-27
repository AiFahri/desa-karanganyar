<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\StatistikWilayah;
use App\Models\StatistikPenduduk;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class StatistikController extends Controller
{
    public function index()
    {
        try {
            $statistikWilayah = StatistikWilayah::getOrCreate();
            $statistikPenduduk = StatistikPenduduk::getOrCreate();
            
            return Inertia::render('StatistikDesa', [
                'statistikWilayah' => $statistikWilayah,
                'statistikPenduduk' => $statistikPenduduk
            ]);
        } catch (\Exception $e) {
            Log::error('Error loading public statistik', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return Inertia::render('StatistikDesa', [
                'statistikWilayah' => null,
                'statistikPenduduk' => null,
                'error' => 'Gagal memuat data statistik'
            ]);
        }
    }

    public function wilayah()
    {
        try {
            $statistik = StatistikWilayah::getOrCreate();
            
            return response()->json([
                'success' => true,
                'data' => $statistik
            ]);
        } catch (\Exception $e) {
            Log::error('Error loading statistik wilayah API', [
                'message' => $e->getMessage()
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Gagal memuat data statistik wilayah'
            ], 500);
        }
    }

    public function penduduk()
    {
        try {
            $statistik = StatistikPenduduk::getOrCreate();
            
            return response()->json([
                'success' => true,
                'data' => $statistik
            ]);
        } catch (\Exception $e) {
            Log::error('Error loading statistik penduduk API', [
                'message' => $e->getMessage()
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Gagal memuat data statistik penduduk'
            ], 500);
        }
    }
}