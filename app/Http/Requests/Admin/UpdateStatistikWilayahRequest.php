<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStatistikWilayahRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->isAdmin();
    }

    public function rules(): array
    {
        return [
            'luas_wilayah' => ['required', 'numeric', 'min:0', 'max:999999.99'],
            'jumlah_dusun' => ['required', 'integer', 'min:0', 'max:999999'],
            'jumlah_rw' => ['required', 'integer', 'min:0', 'max:999999'],
            'jumlah_rt' => ['required', 'integer', 'min:0', 'max:999999'],
        ];
    }

    public function messages(): array
    {
        return [
            'luas_wilayah.required' => 'Luas wilayah harus diisi.',
            'luas_wilayah.numeric' => 'Luas wilayah harus berupa angka.',
            'luas_wilayah.min' => 'Luas wilayah tidak boleh negatif.',
            'luas_wilayah.max' => 'Luas wilayah terlalu besar.',
            
            'jumlah_dusun.required' => 'Jumlah dusun harus diisi.',
            'jumlah_dusun.integer' => 'Jumlah dusun harus berupa bilangan bulat.',
            'jumlah_dusun.min' => 'Jumlah dusun tidak boleh negatif.',
            
            'jumlah_rw.required' => 'Jumlah RW harus diisi.',
            'jumlah_rw.integer' => 'Jumlah RW harus berupa bilangan bulat.',
            'jumlah_rw.min' => 'Jumlah RW tidak boleh negatif.',
            
            'jumlah_rt.required' => 'Jumlah RT harus diisi.',
            'jumlah_rt.integer' => 'Jumlah RT harus berupa bilangan bulat.',
            'jumlah_rt.min' => 'Jumlah RT tidak boleh negatif.',
        ];
    }
}