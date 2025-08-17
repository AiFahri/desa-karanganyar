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
            'foto_ktp' => 'required|file|mimes:jpeg,png,jpg,pdf|max:2048',
            'foto_kk' => 'required|file|mimes:jpeg,png,jpg,pdf|max:2048',
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
            'foto_ktp.mimes' => 'File KTP harus berupa gambar (JPEG, PNG, JPG) atau PDF',
            'foto_ktp.max' => 'Ukuran file KTP maksimal 2MB',
            'foto_kk.required' => 'Foto KK harus diupload',
            'foto_kk.mimes' => 'File KK harus berupa gambar (JPEG, PNG, JPG) atau PDF',
            'foto_kk.max' => 'Ukuran file KK maksimal 2MB',
        ];
    }
}
