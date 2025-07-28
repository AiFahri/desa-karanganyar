<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $statistikWilayah = App\Models\StatistikWilayah::getOrCreate();
    return Inertia::render('Home', [
        'statistikWilayah' => $statistikWilayah
    ]);
});
Route::get('/home', function () {
    $statistikWilayah = App\Models\StatistikWilayah::getOrCreate();
    return Inertia::render('Home', [
        'statistikWilayah' => $statistikWilayah
    ]);
});

Route::get('/register-page', function () {
    return Inertia::render('Auth/Register');
})->name('register.page');

Route::get('/layanan', function () {
    return Inertia::render('LayananMasyarakat');
});

Route::get('/layanan/buat-surat', [App\Http\Controllers\User\PengajuanSuratController::class, 'create'])->name('layanan.buat-surat');

Route::get('/layanan/status-surat', function () {
    return Inertia::render('SubLayananStatusSurat');
});

Route::get('/profil', function () {
    $statistikPenduduk = App\Models\StatistikPenduduk::getOrCreate();
    $statistikWilayah = App\Models\StatistikWilayah::getOrCreate();
    
    return Inertia::render('ProfilDesa', [
        'statistikPenduduk' => $statistikPenduduk,
        'statistikWilayah' => $statistikWilayah
    ]);
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

Route::get('/ProfileDetail', function () {
    return Inertia::render('ProfileDetail');
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
    
    Route::resource('pengumuman', App\Http\Controllers\Admin\PengumumanController::class)->parameters([
        'pengumuman' => 'pengumuman:slug'
    ]);
    
    Route::resource('berita', App\Http\Controllers\Admin\BeritaController::class)->parameters([
        'berita' => 'berita:slug'
    ]);
    
    // Statistik Wilayah
    Route::get('/statistik-wilayah', [App\Http\Controllers\Admin\StatistikWilayahController::class, 'index'])->name('statistik-wilayah.index');
    Route::put('/statistik-wilayah', [App\Http\Controllers\Admin\StatistikWilayahController::class, 'update'])->name('statistik-wilayah.update');
    
    // Statistik Penduduk
    Route::get('/statistik-penduduk', [App\Http\Controllers\Admin\StatistikPendudukController::class, 'index'])->name('statistik-penduduk.index');
    Route::put('/statistik-penduduk', [App\Http\Controllers\Admin\StatistikPendudukController::class, 'update'])->name('statistik-penduduk.update');

    Route::resource('umkm', Admin\UmkmController::class)->except(['show', 'create', 'edit']);
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

// Public Statistik Routes
Route::get('/statistik', [App\Http\Controllers\Public\StatistikController::class, 'index'])->name('statistik.index');
Route::get('/api/statistik/wilayah', [App\Http\Controllers\Public\StatistikController::class, 'wilayah'])->name('api.statistik.wilayah');
Route::get('/api/statistik/penduduk', [App\Http\Controllers\Public\StatistikController::class, 'penduduk'])->name('api.statistik.penduduk');

// Admin Statistik Routes
Route::middleware(['auth', 'is_admin'])->prefix('admin')->group(function () {
    // Statistik Wilayah
    Route::get('/statistik-wilayah', [App\Http\Controllers\Admin\StatistikWilayahController::class, 'index'])->name('admin.statistik-wilayah.index');
    Route::put('/statistik-wilayah', [App\Http\Controllers\Admin\StatistikWilayahController::class, 'update'])->name('admin.statistik-wilayah.update');
    
    // Statistik Penduduk
    Route::get('/statistik-penduduk', [App\Http\Controllers\Admin\StatistikPendudukController::class, 'index'])->name('admin.statistik-penduduk.index');
    Route::put('/statistik-penduduk', [App\Http\Controllers\Admin\StatistikPendudukController::class, 'update'])->name('admin.statistik-penduduk.update');
});

// User routes (authenticated)
Route::middleware('auth')->group(function () {
    Route::get('/pengajuan-surat', [App\Http\Controllers\User\PengajuanSuratController::class, 'create'])->name('pengajuan-surat');
    Route::post('/pengajuan-surat', [App\Http\Controllers\User\PengajuanSuratController::class, 'store']);
    Route::get('/riwayat-pengajuan', [App\Http\Controllers\User\PengajuanSuratController::class, 'index'])->name('riwayat-pengajuan');
});

// Admin routes
Route::middleware(['auth', 'is_admin'])->prefix('admin')->group(function () {
    Route::resource('pengajuan-surat', App\Http\Controllers\Admin\PengajuanSuratController::class)->only(['index', 'show', 'update']);
    Route::post('pengajuan-surat/{pengajuanSurat}/upload-surat', [App\Http\Controllers\Admin\PengajuanSuratController::class, 'uploadSuratJadi'])->name('admin.pengajuan-surat.upload-surat');
});











