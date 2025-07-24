<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pengumuman;
use App\Http\Requests\StorePengumumanRequest;
use Inertia\Inertia;

class PengumumanController extends Controller
{
    public function index()
    {
        $pengumuman = Pengumuman::latest('tanggal_publish')->paginate(10);
        
        return Inertia::render('AdminPengumuman', [
            'pengumuman' => $pengumuman
        ]);
    }

    public function store(StorePengumumanRequest $request)
    {
        Pengumuman::create([
            ...$request->validated(),
            'user_id' => auth()->id(),
            'tanggal_publish' => now(),
        ]);

        return redirect()->back()->with('success', 'Pengumuman berhasil dibuat.');
    }

    public function update(StorePengumumanRequest $request, Pengumuman $pengumuman)
    {
        $pengumuman->update($request->validated());

        return redirect()->back()->with('success', 'Pengumuman berhasil diperbarui.');
    }

    public function destroy(Pengumuman $pengumuman)
    {
        $pengumuman->delete();

        return redirect()->back()->with('success', 'Pengumuman berhasil dihapus.');
    }
}

