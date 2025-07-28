<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SuratJenis;

class SuratJenisSeeder extends Seeder
{
    public function run()
    {
        $jenisData = [
            ['nama_jenis' => 'Surat Keterangan Domisili'],
            ['nama_jenis' => 'Surat Keterangan Tidak Mampu'],
            ['nama_jenis' => 'Surat Keterangan Usaha'],
            ['nama_jenis' => 'Surat Keterangan Belum Menikah'],
            ['nama_jenis' => 'Surat Keterangan Kelahiran'],
            ['nama_jenis' => 'Surat Keterangan Kematian'],
            ['nama_jenis' => 'Surat Pengantar KTP'],
            ['nama_jenis' => 'Surat Pengantar KK'],
            ['nama_jenis' => 'Surat Keterangan Pindah'],
        ];

        foreach ($jenisData as $jenis) {
            SuratJenis::create($jenis);
        }
    }
}
