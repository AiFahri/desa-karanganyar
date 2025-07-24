<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePengumumanRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->isAdmin();
    }

    public function rules(): array
    {
        return [
            'judul' => 'required|string|max:255',
            'waktu_acara' => 'nullable|date',
            'tempat_acara' => 'required|string|max:255',
            'deskripsi' => 'required|string',
        ];
    }

    public function messages(): array
    {
        return [
            'judul.required' => 'Judul pengumuman harus diisi',
            'tempat_acara.required' => 'Tempat acara harus diisi',
            'deskripsi.required' => 'Deskripsi pengumuman harus diisi',
        ];
    }
}
