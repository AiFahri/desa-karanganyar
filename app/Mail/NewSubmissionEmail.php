<?php

namespace App\Mail;

use App\Models\PengajuanSurat;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewSubmissionEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $pengajuan;

    public function __construct(PengajuanSurat $pengajuan)
    {
        $this->pengajuan = $pengajuan;
    }

    public function build()
    {
        return $this->subject('Pengajuan Surat Baru - ' . $this->pengajuan->suratJenis->nama_jenis)
                    ->view('emails.new-submission')
                    ->with([
                        'nama' => $this->pengajuan->nama_lengkap,
                        'nik' => $this->pengajuan->nik_pemohon,
                        'jenisSurat' => $this->pengajuan->suratJenis->nama_jenis,
                        'tanggal' => $this->pengajuan->created_at->format('d/m/Y H:i')
                    ]);
    }
}