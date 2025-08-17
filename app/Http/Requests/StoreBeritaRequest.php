<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBeritaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->isAdmin();
    }

    public function rules(): array
    {
        $rules = [
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
        ];
        
        // Gambar hanya required untuk create, optional untuk update
        if ($this->isMethod('post')) {
            $rules['gambar'] = 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120';
        } else {
            $rules['gambar'] = 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120';
        }
        
        return $rules;
    }

    public function messages(): array
    {
        return [
            'judul.required' => 'Judul berita harus diisi',
            'deskripsi.required' => 'Deskripsi berita harus diisi',
            'gambar.image' => 'File harus berupa gambar',
            'gambar.mimes' => 'Format gambar harus: jpeg, png, jpg, gif, webp',
            'gambar.max' => 'Ukuran gambar maksimal 5MB',
        ];
    }
}
