<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {

        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'nik' => ['required', 'string', 'digits:16', 'unique:users'], // Validasi NIK: wajib, string, 16 digit, unik
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'no_hp' => ['required', 'string', 'regex:/^(\+62|0)\d{9,13}$/', 'unique:users'], 
            'password' => $this->passwordRules(),
        ])->validate();

        return User::create([
            'name' => $input['name'],
            'nik' => $input['nik'],
            'email' => $input['email'],
            'no_hp' => $input['no_hp'],
            'password' => Hash::make($input['password']),
        ]);
    }
}