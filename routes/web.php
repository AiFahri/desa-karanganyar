<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\BeritaController;
use App\Http\Controllers\Admin\UmkmController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;

Route::get('/', [App\Http\Controllers\UmkmController::class, 'index']);
Route::get('/home', [App\Http\Controllers\UmkmController::class, 'index']);
Route::get('/sub-umkm/{slug}', [App\Http\Controllers\UmkmController::class, 'show'])->name('umkm.show');

Route::get('/register-page', function () {
    return Inertia::render('Auth/Register');
})->name('register.page');

Route::get('/layanan', function () {
    return Inertia::render('LayananMasyarakat');
});

Route::get('/layanan/buat-surat', [App\Http\Controllers\User\PengajuanSuratController::class, 'create'])
    ->middleware(['auth'])
    ->name('layanan.buat-surat');

Route::get('/layanan/status-surat', [App\Http\Controllers\User\PengajuanSuratController::class, 'status']);

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


Route::get('/AdminPengajuanLayanan', function () {
    return Inertia::render('AdminPengajuanLayanan');
});
Route::get('/AdminPortalBerita', function () {
    return Inertia::render('AdminPortalBerita');
});
Route::get('/AdminPotensiUMKM', function () {
    return Inertia::render('AdminPotensiUMKM');
});


Route::get('/dashboard', function () {
    return Inertia::render('Profile/Edit');
})->middleware(['auth'])->name('dashboard');

Route::get('/riwayat-pengajuan', function () {
    return Inertia::render('RiwayatPengajuan');
})->middleware(['auth'])->name('riwayat-pengajuan');

Route::get('/lupa-password', function () {
    return Inertia::render('Auth/ForgotPassword');
})->middleware(['auth', 'verified'])->name('lupa-password');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Admin routes dengan middleware
Route::middleware(['auth', 'is_admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');
    
    // Pengumuman routes
    Route::get('/pengumuman', [App\Http\Controllers\Admin\PengumumanController::class, 'index'])->name('admin.pengumuman.index');
    Route::post('/pengumuman', [App\Http\Controllers\Admin\PengumumanController::class, 'store'])->name('admin.pengumuman.store');
    Route::put('/pengumuman/{pengumuman:slug}', [App\Http\Controllers\Admin\PengumumanController::class, 'update'])->name('admin.pengumuman.update');
    Route::delete('/pengumuman/{pengumuman:slug}', [App\Http\Controllers\Admin\PengumumanController::class, 'destroy'])->name('admin.pengumuman.destroy');
    
    // Berita routes
    Route::get('/berita', [BeritaController::class, 'index'])->name('admin.berita.index');
    Route::post('/berita', [BeritaController::class, 'store'])->name('admin.berita.store');
    Route::put('/berita/{berita:slug}', [BeritaController::class, 'update'])->name('admin.berita.update');
    Route::delete('/berita/{berita:slug}', [BeritaController::class, 'destroy'])->name('admin.berita.destroy');
    
    // UMKM routes
    Route::get('/umkm', [UmkmController::class, 'index'])->name('admin.umkm.index');
    Route::post('/umkm', [UmkmController::class, 'store'])->name('admin.umkm.store');
    Route::put('/umkm/{umkm:slug}', [UmkmController::class, 'update'])->name('admin.umkm.update');
    Route::delete('/umkm/{umkm:slug}', [UmkmController::class, 'destroy'])->name('admin.umkm.destroy');
});

Route::get('/AdminPengumuman', function () {
    return redirect('/admin/pengumuman');
})->middleware(['auth', 'is_admin']);

Route::get('/AdminPortalBerita', function () {
    return redirect('/admin/berita');
})->middleware(['auth', 'is_admin']);


Route::get('/portal', [App\Http\Controllers\BeritaController::class, 'index'])->name('portal.index');

// Route sub-umkm
Route::get('/sub-umkm', function () {
    return Inertia::render('SubPotensi');
});

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
    
    Route::resource('umkm', App\Http\Controllers\Admin\UmkmController::class)->except(['show', 'create', 'edit']);
});

Route::get('/admin/pengajuan-surat', [App\Http\Controllers\Admin\PengajuanSuratController::class, 'index'])->name('admin.pengajuan-surat');

Route::middleware(['auth'])->group(function () {
    Route::get('/layanan/status-surat', [App\Http\Controllers\User\StatusSuratController::class, 'index'])->name('layanan.status-surat');
    Route::resource('pengajuan-surat', App\Http\Controllers\User\PengajuanSuratController::class)->only(['store']);
});

// Private file access routes
Route::middleware(['auth'])->group(function () {
    // User can access their own files
    Route::get('/files/layanan_surat/{filename}', [App\Http\Controllers\FileController::class, 'serveLayananSurat'])->name('files.layanan_surat');
    Route::get('/files/surat-jadi/{pengajuanId}', [App\Http\Controllers\FileController::class, 'serveSuratJadi'])->name('files.surat_jadi');
    
    // Admin can access all files
    Route::middleware(['is_admin'])->group(function () {
        Route::get('/admin/files/layanan_surat/{filename}', [App\Http\Controllers\FileController::class, 'serveAdminLayananSurat'])->name('admin.files.layanan_surat');
    });
});

// Sitemap route
Route::get('/sitemap.xml', [App\Http\Controllers\SitemapController::class, 'index']);

// SEO-focused landing pages
Route::get('/desa-karanganyar-poncokusumo-malang', function () {
    $statistikPenduduk = App\Models\StatistikPenduduk::getOrCreate();
    $statistikWilayah = App\Models\StatistikWilayah::getOrCreate();
    $umkmData = App\Models\Umkm::latest()->take(6)->get();
    
    return Inertia::render('LandingPage', [
        'statistikPenduduk' => $statistikPenduduk,
        'statistikWilayah' => $statistikWilayah,
        'umkmData' => $umkmData,
        'meta' => [
            'title' => 'Desa Karanganyar Poncokusumo Malang - Website Resmi',
            'description' => 'Informasi lengkap tentang Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang. Layanan desa, potensi UMKM, dan berita terkini.',
            'keywords' => 'desa karanganyar malang, karanganyar poncokusumo, website desa karanganyar, layanan desa karanganyar'
        ]
    ]);
})->name('landing.seo');










