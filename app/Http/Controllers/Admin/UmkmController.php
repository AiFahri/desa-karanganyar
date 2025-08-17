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
            'menu_umkm.*' => 'nullable|string',
            'media_sosial' => 'nullable|array',
            'media_sosial.*' => 'nullable|url',
            'kontak_pemesanan' => 'nullable|string|max:50',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5120'
        ]);

        $data = $request->all();
        $data['slug'] = Str::slug($request->merk_dagang);
        $data['published_by'] = auth()->id();
        
        // Handle menu_umkm array
        if (isset($data['menu_umkm']) && is_array($data['menu_umkm'])) {
            $data['menu_umkm'] = array_filter($data['menu_umkm'], function($item) {
                return !empty(trim($item));
            });
            // Jika kosong, set null
            if (empty($data['menu_umkm'])) {
                $data['menu_umkm'] = null;
            }
        }
        
        // Handle media_sosial array
        if (isset($data['media_sosial']) && is_array($data['media_sosial'])) {
            $data['media_sosial'] = array_filter($data['media_sosial'], function($item) {
                return !empty(trim($item));
            });
            // Jika kosong, set null
            if (empty($data['media_sosial'])) {
                $data['media_sosial'] = null;
            }
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

        // Handle menu_umkm - JANGAN encode manual
        if (isset($data['menu_umkm']) && is_array($data['menu_umkm'])) {
            $data['menu_umkm'] = array_filter($data['menu_umkm'], function($item) {
                return !empty(trim($item));
            });
            if (empty($data['menu_umkm'])) {
                $data['menu_umkm'] = null;
            }
        }

        // Handle media_sosial - JANGAN encode manual
        if (isset($data['media_sosial']) && is_array($data['media_sosial'])) {
            $data['media_sosial'] = array_filter($data['media_sosial'], function($item) {
                return !empty(trim($item));
            });
            if (empty($data['media_sosial'])) {
                $data['media_sosial'] = null;
            }
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









