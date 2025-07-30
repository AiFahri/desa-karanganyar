<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Models\User;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Contracts\LoginResponse;
use Illuminate\Validation\ValidationException;

class FortifyServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        Fortify::loginView(function () {
            return Inertia::render('Auth/Login', [
                'canResetPassword' => Route::has('password.request'),
                'status' => session('status'),
                'redirect' => request('redirect'),
            ]);
        });

        Fortify::requestPasswordResetLinkView(function () {
            return Inertia::render('Auth/ForgotPassword', [
                'status' => session('status'),
            ]);
        });

        Fortify::resetPasswordView(function (Request $request) {
            return Inertia::render('Auth/ResetPassword', [
                'email' => $request->email,
                'token' => $request->route('token'),
            ]);
        });

        Fortify::createUsersUsing(CreateNewUser::class);

        Fortify::authenticateUsing(function (Request $request) {
            $loginInput = $request->username;
            
            $user = User::where('email', $loginInput)
                       ->orWhere('nik', $loginInput)
                       ->first();

            if ($user && Hash::check($request->password, $user->password)) {
                return $user;
            }

            throw ValidationException::withMessages([
                'username' => ['NIK/Email atau password yang Anda masukkan salah.'],
            ]);
        });

        Fortify::redirects('login', function () {
            if (auth()->user() && auth()->user()->isAdmin()) {
                return '/admin/dashboard';
            }
            return '/';
        });

        RateLimiter::for('login', function (Request $request) {
            return Limit::perMinute(5)->by($request->input(Fortify::username()) . $request->ip());
        });

        // Custom login response dengan redirect handling
        $this->app->instance(LoginResponse::class, new class implements LoginResponse {
            public function toResponse($request)
            {
                $intended = $request->session()->get('url.intended');
                $redirect = $request->input('redirect');
                
                if (auth()->user()->isAdmin()) {
                    return redirect('/admin/dashboard');
                }
                
                // Prioritas: intended URL > redirect parameter > default dashboard
                if ($intended) {
                    return redirect($intended);
                } elseif ($redirect) {
                    return redirect($redirect);
                }
                
                return redirect('/');
            }
        });
    }
}





