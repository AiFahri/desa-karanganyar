<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateStatistikWilayahRequest;
use App\Models\StatistikWilayah;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class StatistikWilayahController extends Controller
{
    public function index()
    {
        try {
            $statistik = StatistikWilayah::getOrCreate();
            
            return Inertia::render('AdminStatistikWilayah', [
                'statistik' => $statistik
            ]);
        } catch (\Exception $e) {
            Log::error('Error loading statistik wilayah', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return redirect()->back()->withErrors([
                'error' => 'Gagal memuat data statistik wilayah'
            ]);
        }
    }

    public function update(UpdateStatistikWilayahRequest $request)
    {
        try {
            $statistik = StatistikWilayah::getOrCreate();
            
            $statistik->update($request->validated());
            
            Log::info('Statistik wilayah updated', [
                'user_id' => auth()->id(),
                'data' => $request->validated()
            ]);
            
            return redirect()->back()->with('success', 'Data statistik wilayah berhasil diperbarui');
            
        } catch (\Exception $e) {
            Log::error('Error updating statistik wilayah', [
                'message' => $e->getMessage(),
                'data' => $request->validated(),
                'user_id' => auth()->id(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return redirect()->back()->withErrors([
                'error' => 'Gagal memperbarui data statistik wilayah'
            ]);
        }
    }
}
