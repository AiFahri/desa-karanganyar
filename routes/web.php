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


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';