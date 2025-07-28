<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUmkmRequest;
use App\Models\Umkm;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UmkmController extends Controller
{
    public function index()
    {
        $umkm = Umkm::with('publisher')
            ->latest()
            ->paginate(10);

        return Inertia::render('AdminUmkm', [
            'umkm' => $umkm
        ]);
    }

    public function store(StoreUmkmRequest $request)
    {
        $data = $request->validated();
        
        // Handle file upload
        if ($request->hasFile('gambar')) {
            try {
                $file = $request->file('gambar');
                $filename = time() . '_' . str_replace(' ', '_', $data['merk_dagang']) . '.' . $file->getClientOriginalExtension();
                $path = 'produk/' . $filename;
                
                Log::info('Starting UMKM image upload', [
                    'filename' => $filename,
                    'path' => $path,
                    'merk_dagang' => $data['merk_dagang']
                ]);
                
                $disk = Storage::disk('s3_idcloudhost');
                $result = $disk->put($path, file_get_contents($file->getRealPath()), [
                    'visibility' => 'public',
                    'ACL' => 'public-read'
                ]);
                
                if ($result) {
                    $data['gambar_path'] = $path;
                    Log::info('UMKM image uploaded successfully', ['path' => $path]);
                } else {
                    return redirect()->back()->withErrors(['gambar' => 'Gagal upload gambar ke server']);
                }
                
            } catch (\Exception $e) {
                Log::error('UMKM Image Upload Exception', [
                    'message' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ]);
                return redirect()->back()->withErrors(['gambar' => 'Error upload: ' . $e->getMessage()]);
            }
        }

        unset($data['gambar']);
        
        Umkm::create([
            ...$data,
            'published_by' => auth()->id(),
        ]);

        return redirect()->back()->with('success', 'Data UMKM berhasil ditambahkan.');
    }

    public function update(StoreUmkmRequest $request, Umkm $umkm)
    {
        $data = $request->validated();
        
        // Handle file upload
        if ($request->hasFile('gambar')) {
            try {
                if ($umkm->gambar_path) {
                    Storage::disk('s3_idcloudhost')->delete($umkm->gambar_path);
                    Log::info('Old UMKM image deleted', ['path' => $umkm->gambar_path]);
                }
                
                $file = $request->file('gambar');
                $filename = time() . '_' . str_replace(' ', '_', $data['merk_dagang']) . '.' . $file->getClientOriginalExtension();
                $path = 'produk/' . $filename;
                
                $disk = Storage::disk('s3_idcloudhost');
                $result = $disk->put($path, file_get_contents($file->getRealPath()), [
                    'visibility' => 'public',
                    'ACL' => 'public-read'
                ]);
                
                if ($result) {
                    $data['gambar_path'] = $path;
                    Log::info('New UMKM image uploaded', ['path' => $path]);
                } else {
                    return redirect()->back()->withErrors(['gambar' => 'Gagal upload gambar baru']);
                }
                
            } catch (\Exception $e) {
                Log::error('UMKM Update Image Exception', [
                    'message' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ]);
                return redirect()->back()->withErrors(['gambar' => 'Error upload: ' . $e->getMessage()]);
            }
        }

        unset($data['gambar']);
        
        $umkm->update($data);

        return redirect()->back()->with('success', 'Data UMKM berhasil diperbarui.');
    }

    public function destroy(Umkm $umkm)
    {
        try {
            // Delete image from S3
            if ($umkm->gambar_path) {
                Storage::disk('s3_idcloudhost')->delete($umkm->gambar_path);
                Log::info('UMKM image deleted from S3', ['path' => $umkm->gambar_path]);
            }
            
            $umkm->delete();
            
            return redirect()->back()->with('success', 'Data UMKM berhasil dihapus.');
            
        } catch (\Exception $e) {
            Log::error('UMKM Delete Error', ['message' => $e->getMessage()]);
            return redirect()->back()->withErrors(['error' => 'Error hapus UMKM: ' . $e->getMessage()]);
        }
    }
}