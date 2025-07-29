<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Umkm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class UmkmController extends Controller
{
    public function index()
    {
        $umkm = Umkm::latest()->paginate(10);
        
        return Inertia::render('AdminPotensiUMKM', [
            'umkm' => $umkm
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'merk_dagang' => 'required|string|max:255',
            'deskripsi_singkat' => 'required|string',
            'deskripsi_lengkap' => 'required|string',
            'menu_umkm' => 'nullable|array',
            'media_sosial' => 'nullable|array',
            'media_sosial.*' => 'nullable|url',
            'kontak_pemesanan' => 'nullable|string|max:50',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5120'
        ]);

        $data = $request->all();
        $data['slug'] = Str::slug($request->merk_dagang);
        $data['published_by'] = auth()->id();
        
        // Filter empty media sosial links
        if (isset($data['media_sosial'])) {
            $data['media_sosial'] = array_filter($data['media_sosial'], function($link) {
                return !empty(trim($link));
            });
            $data['media_sosial'] = array_values($data['media_sosial']); // Re-index array
        }

        // Handle image upload
        if ($request->hasFile('gambar')) {
            $file = $request->file('gambar');
            $filename = 'umkm-' . time() . '.' . $file->getClientOriginalExtension();
            $path = 'umkm/' . $filename;
            
            $disk = Storage::disk('s3_idcloudhost');
            $result = $disk->put($path, file_get_contents($file->getRealPath()), [
                'visibility' => 'public'
            ]);
            
            if ($result) {
                $data['gambar_path'] = $path;
            }
        }

        if (isset($data['menu_umkm'])) {
    $data['menu_umkm'] = json_encode($data['menu_umkm']);
}

        unset($data['gambar']);
        Umkm::create($data);

        return redirect()->back()->with('success', 'UMKM berhasil ditambahkan');
    }

    public function update(Request $request, $slug)
{
    $umkm = Umkm::where('slug', $slug)->firstOrFail();
    
    $request->validate([
        'merk_dagang' => 'required|string|max:255',
        'deskripsi_singkat' => 'required|string',
        'deskripsi_lengkap' => 'required|string',
        'menu_umkm' => 'nullable|array',
        'menu_umkm.*' => 'string',
        'kontak_pemesanan' => 'nullable|string|max:50',
        'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5120'
    ]);

    $data = $request->all();
    $data['slug'] = Str::slug($request->merk_dagang);

    // Pastikan array menu_umkm diubah jadi JSON
    if (isset($data['menu_umkm'])) {
        $data['menu_umkm'] = json_encode($data['menu_umkm']);
    }

    // Handle image upload
    if ($request->hasFile('gambar')) {
        // Delete old image
        if ($umkm->gambar_path) {
            Storage::disk('s3_idcloudhost')->delete($umkm->gambar_path);
        }

        $file = $request->file('gambar');
        $filename = 'umkm-' . time() . '.' . $file->getClientOriginalExtension();
        $path = 'umkm/' . $filename;
        
        $disk = Storage::disk('s3_idcloudhost');
        $result = $disk->put($path, file_get_contents($file->getRealPath()), [
            'visibility' => 'public'
        ]);
        
        if ($result) {
            $data['gambar_path'] = $path;
        }
    }

    unset($data['gambar']);
    $umkm->update($data);

    return redirect()->back()->with('success', 'UMKM berhasil diperbarui');
}


    public function destroy($slug)
    {
        $umkm = Umkm::where('slug', $slug)->firstOrFail();
        
        // Delete image
        if ($umkm->gambar_path) {
            Storage::disk('s3_idcloudhost')->delete($umkm->gambar_path);
        }
        
        $umkm->delete();

        return redirect()->back()->with('success', 'UMKM berhasil dihapus');
    }
}


