<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateStatistikPendudukRequest;
use App\Models\StatistikPenduduk;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class StatistikPendudukController extends Controller
{
    public function index()
    {
        try {
            $statistik = StatistikPenduduk::getOrCreate();
            
            return Inertia::render('AdminStatistikPenduduk', [
                'statistik' => $statistik
            ]);
        } catch (\Exception $e) {
            Log::error('Error loading statistik penduduk', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return redirect()->back()->withErrors([
                'error' => 'Gagal memuat data statistik penduduk'
            ]);
        }
    }

    public function update(UpdateStatistikPendudukRequest $request)
    {
        try {
            $statistik = StatistikPenduduk::getOrCreate();
            
            $statistik->update($request->validated());
            
            Log::info('Statistik penduduk updated', [
                'user_id' => auth()->id(),
                'data' => $request->validated()
            ]);
            
            return redirect()->back()->with('success', 'Data statistik penduduk berhasil diperbarui');
            
        } catch (\Exception $e) {
            Log::error('Error updating statistik penduduk', [
                'message' => $e->getMessage(),
                'data' => $request->validated(),
                'user_id' => auth()->id(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return redirect()->back()->withErrors([
                'error' => 'Gagal memperbarui data statistik penduduk'
            ]);
        }
    }
}
