<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStatistikPendudukRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->isAdmin();
    }

    public function rules(): array
    {
        return [
            'jumlah_penduduk' => ['required', 'integer', 'min:0', 'max:999999999'],
            'jumlah_kepala_keluarga' => ['required', 'integer', 'min:0', 'max:999999999'],
            'jumlah_pria' => ['required', 'integer', 'min:0', 'max:999999999'],
            'jumlah_wanita' => ['required', 'integer', 'min:0', 'max:999999999'],
        ];
    }

    public function messages(): array
    {
        return [
            'jumlah_penduduk.required' => 'Jumlah penduduk harus diisi.',
            'jumlah_penduduk.integer' => 'Jumlah penduduk harus berupa bilangan bulat.',
            'jumlah_penduduk.min' => 'Jumlah penduduk tidak boleh negatif.',
            
            'jumlah_kepala_keluarga.required' => 'Jumlah kepala keluarga harus diisi.',
            'jumlah_kepala_keluarga.integer' => 'Jumlah kepala keluarga harus berupa bilangan bulat.',
            'jumlah_kepala_keluarga.min' => 'Jumlah kepala keluarga tidak boleh negatif.',
            
            'jumlah_pria.required' => 'Jumlah pria harus diisi.',
            'jumlah_pria.integer' => 'Jumlah pria harus berupa bilangan bulat.',
            'jumlah_pria.min' => 'Jumlah pria tidak boleh negatif.',
            
            'jumlah_wanita.required' => 'Jumlah wanita harus diisi.',
            'jumlah_wanita.integer' => 'Jumlah wanita harus berupa bilangan bulat.',
            'jumlah_wanita.min' => 'Jumlah wanita tidak boleh negatif.',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $jumlahPria = (int) $this->input('jumlah_pria', 0);
            $jumlahWanita = (int) $this->input('jumlah_wanita', 0);
            $jumlahPenduduk = (int) $this->input('jumlah_penduduk', 0);

            if (($jumlahPria + $jumlahWanita) !== $jumlahPenduduk) {
                $validator->errors()->add('jumlah_penduduk', 
                    'Jumlah penduduk harus sama dengan jumlah pria + jumlah wanita.');
            }
        });
    }
}