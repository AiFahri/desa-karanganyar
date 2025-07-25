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
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

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
    
    Route::resource('pengumuman', App\Http\Controllers\Admin\PengumumanController::class)->parameters([
        'pengumuman' => 'pengumuman:slug'
    ]);
    
    Route::resource('berita', App\Http\Controllers\Admin\BeritaController::class)->parameters([
        'berita' => 'berita:slug'
    ]);
});

Route::get('/AdminPengumuman', function () {
    return redirect('/admin/pengumuman');
})->middleware(['auth', 'is_admin']);

Route::get('/AdminPortalBerita', function () {
    return redirect('/admin/berita');
})->middleware(['auth', 'is_admin']);

Route::get('/portal', [App\Http\Controllers\BeritaController::class, 'index'])->name('portal.index');

// Route publik untuk melihat pengumuman
Route::get('/pengumuman', [App\Http\Controllers\PengumumanController::class, 'index'])->name('pengumuman.index');
Route::get('/pengumuman/{pengumuman:slug}', [App\Http\Controllers\PengumumanController::class, 'show'])->name('pengumuman.show');

Route::get('/berita/{berita:slug}', [App\Http\Controllers\BeritaController::class, 'show'])->name('berita.show');

require __DIR__.'/auth.php';
