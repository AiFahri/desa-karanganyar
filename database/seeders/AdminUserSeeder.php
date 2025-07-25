<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin Desa Karanganyar',
            'email' => 'admin@karanganyar.id',
            'nik' => '1234567890123456',
            'no_hp' => '081234567890',
            'password' => Hash::make('admin123'),
            'email_verified_at' => now(),
        ]);

        // Assign role admin
        $adminRole = Role::where('name', 'admin')->first();
        $admin->roles()->attach($adminRole->id);
    }
}