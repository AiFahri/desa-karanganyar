<?php

namespace Database\Seeders;

use App\Models\Pengumuman;
use App\Models\User;
use Illuminate\Database\Seeder;

class PengumumanSeeder extends Seeder
{
    public function run()
    {
        $admin = User::where('email', 'admin@karanganyar.id')->first();

        $pengumumanData = [
            [
                'judul' => 'Rapat Koordinasi RT/RW Bulan Januari 2024',
                'waktu_acara' => '2024-01-15 09:00:00',
                'tempat_acara' => 'Balai Desa Karanganyar',
                'deskripsi' => 'Mengundang seluruh RT/RW untuk menghadiri rapat koordinasi membahas program kerja tahun 2024 dan evaluasi program tahun 2023.',
                'published_by' => 'Admin Desa Karanganyar',
                'user_id' => $admin->id,
                'tanggal_publish' => now()->subDays(5),
            ],
            [
                'judul' => 'Gotong Royong Pembersihan Lingkungan',
                'waktu_acara' => '2024-01-20 07:00:00',
                'tempat_acara' => 'Seluruh Wilayah Desa Karanganyar',
                'deskripsi' => 'Mari bergotong royong membersihkan lingkungan desa untuk mewujudkan desa yang bersih dan sehat. Diharapkan seluruh warga berpartisipasi aktif.',
                'published_by' => 'Admin Desa Karanganyar',
                'user_id' => $admin->id,
                'tanggal_publish' => now()->subDays(3),
            ],
            [
                'judul' => 'Sosialisasi Program Bantuan Sosial 2024',
                'waktu_acara' => '2024-01-25 13:00:00',
                'tempat_acara' => 'Aula Balai Desa Karanganyar',
                'deskripsi' => 'Sosialisasi mengenai program bantuan sosial dari pemerintah untuk tahun 2024. Warga yang memenuhi kriteria diharapkan hadir.',
                'published_by' => 'Admin Desa Karanganyar',
                'user_id' => $admin->id,
                'tanggal_publish' => now()->subDays(1),
            ],
        ];

        foreach ($pengumumanData as $data) {
            Pengumuman::create($data);
        }
    }
}

