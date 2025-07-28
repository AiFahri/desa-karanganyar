<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PengajuanSuratStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'nama_lengkap' => 'required|string|max:255',
            'nik_pemohon' => 'required|string|digits:16',
            'no_kk_pemohon' => 'required|string|digits:16',
            'surat_jenis_id' => 'required|exists:surat_jenis,id',
            'foto_ktp' => 'required|image|mimes:jpeg,png,jpg|max:1024',
            'foto_kk' => 'required|image|mimes:jpeg,png,jpg|max:1024',
        ];
    }

    public function messages(): array
    {
        return [
            'nama_lengkap.required' => 'Nama lengkap harus diisi',
            'nik_pemohon.required' => 'NIK harus diisi',
            'nik_pemohon.digits' => 'NIK harus 16 digit',
            'no_kk_pemohon.required' => 'Nomor KK harus diisi',
            'no_kk_pemohon.digits' => 'Nomor KK harus 16 digit',
            'surat_jenis_id.required' => 'Jenis surat harus dipilih',
            'surat_jenis_id.exists' => 'Jenis surat tidak valid',
            'foto_ktp.required' => 'Foto KTP harus diupload',
            'foto_ktp.image' => 'File KTP harus berupa gambar',
            'foto_ktp.max' => 'Ukuran foto KTP maksimal 1MB',
            'foto_kk.required' => 'Foto KK harus diupload',
            'foto_kk.image' => 'File KK harus berupa gambar',
            'foto_kk.max' => 'Ukuran foto KK maksimal 1MB',
        ];
    }
}