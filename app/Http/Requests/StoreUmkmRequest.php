<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUmkmRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->isAdmin();
    }

    public function rules(): array
    {
        $rules = [
            'merk_dagang' => 'required|string|max:255',
            'deskripsi_singkat' => 'required|string|max:500',
            'deskripsi_lengkap' => 'required|string',
            'menu_umkm' => 'required|string',
            'media_sosial' => 'nullable|array',
            'media_sosial.*' => 'nullable|url',
            'kontak_pemesanan' => 'required|string|max:255',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
        ];

        if ($this->route('umkm')) {
            $rules['merk_dagang'] .= '|unique:umkm,merk_dagang,' . $this->route('umkm')->id;
            $rules['gambar'] = 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120';
        } else {
            $rules['merk_dagang'] .= '|unique:umkm,merk_dagang';
        }

        return $rules;
    }

    public function messages(): array
    {
        return [
            'merk_dagang.required' => 'Merk dagang harus diisi',
            'merk_dagang.unique' => 'Merk dagang sudah terdaftar',
            'deskripsi_singkat.required' => 'Deskripsi singkat harus diisi',
            'deskripsi_lengkap.required' => 'Deskripsi lengkap harus diisi',
            'menu_umkm.required' => 'Menu UMKM harus diisi',
            'media_sosial.*.url' => 'Format URL media sosial tidak valid',
            'kontak_pemesanan.required' => 'Kontak pemesanan harus diisi',
            'gambar.required' => 'Gambar UMKM harus diupload',
            'gambar.image' => 'File harus berupa gambar',
            'gambar.mimes' => 'Format gambar harus: jpeg, png, jpg, gif, webp',
            'gambar.max' => 'Ukuran gambar maksimal 5MB',
        ];
    }
}