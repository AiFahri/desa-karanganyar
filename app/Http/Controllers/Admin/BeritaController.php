<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBeritaRequest;
use App\Models\Berita;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class BeritaController extends Controller
{
    public function index()
    {
        $berita = Berita::latest('tanggal_publish')->paginate(10);
        
        return Inertia::render('AdminPortalBerita', [
            'berita' => $berita
        ]);
    }

    public function store(StoreBeritaRequest $request)
    {
        $data = $request->validated();
        
        // Handle file upload
        if ($request->hasFile('gambar')) {
            try {
                $file = $request->file('gambar');
                $filename = time() . '_' . $file->getClientOriginalName();
                $path = 'berita/' . $filename;
                
                Log::info('Starting S3 upload', [
                    'filename' => $filename,
                    'path' => $path,
                    'size' => $file->getSize(),
                    'mime_type' => $file->getMimeType(),
                    'original_name' => $file->getClientOriginalName()
                ]);
                
                // Get file content
                $fileContent = file_get_contents($file->getRealPath());
                Log::info('File content read', ['content_length' => strlen($fileContent)]);
                
                // Upload to S3 dengan ACL public-read
                $disk = Storage::disk('s3_idcloudhost');
                
                $result = $disk->put($path, $fileContent, [
                    'visibility' => 'public',
                    'ACL' => 'public-read'
                ]);
                
                Log::info('S3 upload attempt completed', [
                    'result' => $result,
                    'path' => $path,
                    'result_type' => gettype($result)
                ]);
                
                if ($result) {
                    $data['gambar'] = $path;
                    Log::info('File uploaded successfully', ['path' => $path]);
                    
                    $exists = $disk->exists($path);
                    Log::info('File existence check', ['exists' => $exists, 'path' => $path]);
                    
                } else {
                    Log::error('S3 upload returned false', ['path' => $path]);
                    return redirect()->back()->withErrors(['gambar' => 'Gagal upload gambar ke server']);
                }
                
            } catch (\Exception $e) {
                Log::error('S3 Upload Exception', [
                    'message' => $e->getMessage(),
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                    'trace' => $e->getTraceAsString(),
                    'exception_class' => get_class($e)
                ]);
                return redirect()->back()->withErrors(['gambar' => 'Error upload: ' . $e->getMessage()]);
            }
        }
        
        Berita::create([
            ...$data,
            'user_id' => auth()->id(),
            'tanggal_publish' => now(),
        ]);

        return redirect()->back()->with('success', 'Berita berhasil dibuat.');
    }

    public function update(StoreBeritaRequest $request, Berita $berita)
    {
        Log::info('BeritaController update called', [
            'berita_id' => $berita->id,
            'request_data' => $request->all(),
            'has_file' => $request->hasFile('gambar')
        ]);
        
        $data = $request->validated();
        
        // Handle file upload
        if ($request->hasFile('gambar')) {
            try {
                // Delete old image
                if ($berita->gambar) {
                    Storage::disk('s3_idcloudhost')->delete($berita->gambar);
                    Log::info('Old image deleted', ['path' => $berita->gambar]);
                }
                
                $file = $request->file('gambar');
                $filename = time() . '_' . $file->getClientOriginalName();
                $path = 'berita/' . $filename;
                
                $result = Storage::disk('s3_idcloudhost')->put($path, file_get_contents($file), [
                    'visibility' => 'public',
                    'ACL' => 'public-read'
                ]);
                
                if ($result) {
                    $data['gambar'] = $path;
                    Log::info('New image uploaded', ['path' => $path]);
                } else {
                    return redirect()->back()->withErrors(['gambar' => 'Gagal upload gambar baru']);
                }
                
            } catch (\Exception $e) {
                Log::error('S3 Update Error', ['message' => $e->getMessage()]);
                return redirect()->back()->withErrors(['gambar' => 'Error upload: ' . $e->getMessage()]);
            }
        } else {
            // Jika tidak ada file baru, hapus 'gambar' dari data
            unset($data['gambar']);
            Log::info('No new image, keeping existing image');
        }
        
        $berita->update($data);
        Log::info('Berita updated successfully', ['berita_id' => $berita->id]);

        return redirect()->back()->with('success', 'Berita berhasil diperbarui.');
    }

    public function destroy(Berita $berita)
    {
        try {
            // Delete image from S3
            if ($berita->gambar) {
                Storage::disk('s3_idcloudhost')->delete($berita->gambar);
                Log::info('Image deleted from S3', ['path' => $berita->gambar]);
            }
            
            $berita->delete();
            
            return redirect()->back()->with('success', 'Berita berhasil dihapus.');
            
        } catch (\Exception $e) {
            Log::error('Delete Error', ['message' => $e->getMessage()]);
            return redirect()->back()->withErrors(['error' => 'Error hapus berita: ' . $e->getMessage()]);
        }
    }
}












