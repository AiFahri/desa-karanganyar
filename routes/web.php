<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/home', function () {
    return Inertia::render('Home');
});

Route::get('/register-page', function () {
    return Inertia::render('Auth/Register');
})->name('register.page');

Route::get('/layanan', function () {
    return Inertia::render('LayananMasyarakat');
});

Route::get('/layanan/buat-surat', function () {
    return Inertia::render('SubLayananBuatSurat');
});

Route::get('/layanan/status-surat', function () {
    return Inertia::render('SubLayananStatusSurat');
});

Route::get('/profil', function () {
    return Inertia::render('ProfilDesa');
});

Route::get('/portal', function () {
    return Inertia::render('PortalBerita');
});

Route::get('/AdminDashboard', function () {
    return Inertia::render('AdminDashboard');
});

Route::get('/subpeng', function () {
    return Inertia::render('SubPengumuman');
});



Route::get('/AdminPengajuanLayanan', function () {
    return Inertia::render('AdminPengajuanLayanan');
});
Route::get('/AdminPortalBerita', function () {
    return Inertia::render('AdminPortalBerita');
});



Route::get('/dashboard', function () {
    return Inertia::render('EditProfile');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/riwayat-pengajuan', function () {
    return Inertia::render('RiwayatPengajuan');
})->middleware(['auth', 'verified'])->name('riwayat-pengajuan');

Route::get('/lupa-password', function () {
    return Inertia::render('LupaPassword');
})->middleware(['auth', 'verified'])->name('lupa-password');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Admin routes dengan middleware
Route::middleware(['auth', 'is_admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('AdminDashboard');
    })->name('dashboard');
    
    // Route pengumuman admin yang benar
    Route::resource('pengumuman', App\Http\Controllers\Admin\PengumumanController::class);
});

// Tambahkan redirect untuk backward compatibility
Route::get('/AdminPengumuman', function () {
    return redirect('/admin/pengumuman');
})->middleware(['auth', 'is_admin']);

// Route publik untuk portal berita
Route::get('/portal', [App\Http\Controllers\PengumumanController::class, 'index'])->name('portal.index');

// Route publik untuk melihat pengumuman
Route::get('/pengumuman', [App\Http\Controllers\PengumumanController::class, 'index'])->name('pengumuman.index');
Route::get('/pengumuman/{pengumuman:slug}', [App\Http\Controllers\PengumumanController::class, 'show'])->name('pengumuman.show');

require __DIR__.'/auth.php';