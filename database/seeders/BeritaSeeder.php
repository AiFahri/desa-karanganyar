<?php

namespace Database\Seeders;

use App\Models\Berita;
use App\Models\User;
use Illuminate\Database\Seeder;

class BeritaSeeder extends Seeder
{
    public function run()
    {
        $admin = User::where('email', 'admin@karanganyar.id')->first();

        $beritaData = [
            [
                'judul' => 'Pembangunan Jalan Desa Tahap 2 Dimulai',
                'deskripsi' => 'Pemerintah Desa Karanganyar dengan bangga mengumumkan dimulainya pembangunan jalan desa tahap 2. Proyek ini merupakan kelanjutan dari pembangunan infrastruktur yang telah dimulai tahun lalu. Pembangunan jalan sepanjang 2 kilometer ini diharapkan dapat meningkatkan aksesibilitas warga dan mendukung perekonomian desa. Dana pembangunan berasal dari APBD Desa dan bantuan pemerintah pusat melalui program Dana Desa.',
                'gambar' => 'berita/SapaRektorat1.jpg',
                'published_by' => 'Admin Desa Karanganyar',
                'user_id' => $admin->id,
                'tanggal_publish' => now()->subDays(7),
            ],
            [
                'judul' => 'Program Bantuan Sembako untuk Keluarga Kurang Mampu',
                'deskripsi' => 'Dalam rangka membantu meringankan beban ekonomi masyarakat, Pemerintah Desa Karanganyar meluncurkan program bantuan sembako untuk keluarga kurang mampu. Program ini akan berlangsung selama 3 bulan dan menyasar 150 keluarga penerima manfaat. Setiap keluarga akan menerima paket sembako berisi beras 10kg, minyak goreng, gula, dan kebutuhan pokok lainnya. Distribusi akan dilakukan setiap minggu pertama di setiap bulannya.',
                'gambar' => null,
                'published_by' => 'Admin Desa Karanganyar',
                'user_id' => $admin->id,
                'tanggal_publish' => now()->subDays(5),
            ],
            [
                'judul' => 'Pelatihan Keterampilan Menjahit untuk Ibu-Ibu PKK',
                'deskripsi' => 'Desa Karanganyar mengadakan pelatihan keterampilan menjahit untuk ibu-ibu anggota PKK. Pelatihan ini bertujuan untuk meningkatkan keterampilan dan membuka peluang usaha bagi para ibu rumah tangga. Pelatihan akan berlangsung selama 2 minggu dengan instruktur berpengalaman dari Dinas Tenaga Kerja Kabupaten. Peserta akan mendapatkan sertifikat dan bantuan mesin jahit untuk memulai usaha mandiri.',
                'gambar' => null,
                'published_by' => 'Admin Desa Karanganyar',
                'user_id' => $admin->id,
                'tanggal_publish' => now()->subDays(3),
            ],
            [
                'judul' => 'Vaksinasi COVID-19 Booster Gratis untuk Warga',
                'deskripsi' => 'Puskesmas setempat bekerja sama dengan Pemerintah Desa Karanganyar mengadakan program vaksinasi COVID-19 booster gratis untuk seluruh warga. Kegiatan ini dilaksanakan di Balai Desa setiap hari Sabtu selama bulan ini. Warga yang ingin mengikuti vaksinasi diharapkan membawa KTP dan kartu vaksinasi sebelumnya. Program ini merupakan upaya pemerintah desa dalam menjaga kesehatan masyarakat dan mencegah penyebaran COVID-19.',
                'gambar' => null,
                'published_by' => 'Admin Desa Karanganyar',
                'user_id' => $admin->id,
                'tanggal_publish' => now()->subDays(1),
            ],
        ];

        foreach ($beritaData as $data) {
            Berita::create($data);
        }
    }
}