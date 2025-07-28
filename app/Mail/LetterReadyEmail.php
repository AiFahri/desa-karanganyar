<?php

namespace App\Mail;

use App\Models\PengajuanSurat;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class LetterReadyEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $pengajuan;

    public function __construct(PengajuanSurat $pengajuan)
    {
        $this->pengajuan = $pengajuan;
    }

    public function build()
    {
        return $this->subject('Surat Anda Sudah Selesai - ' . $this->pengajuan->suratJenis->nama_jenis)
                    ->view('emails.letter-ready')
                    ->with([
                        'nama' => $this->pengajuan->nama_lengkap,
                        'jenisSurat' => $this->pengajuan->suratJenis->nama_jenis,
                        'tanggal' => $this->pengajuan->created_at->format('d/m/Y'),
                        'riwayatUrl' => route('riwayat-pengajuan')
                    ]);
    }
}