<!DOCTYPE html>
<html>
<head>
    <title>Surat Sudah Selesai</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0272BA;">Surat Anda Sudah Selesai</h2>
        
        <p>Halo {{ $nama }},</p>
        
        <p>Surat yang Anda ajukan sudah selesai diproses:</p>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong>Detail Surat:</strong><br>
            Jenis Surat: {{ $jenisSurat }}<br>
            Tanggal Pengajuan: {{ $tanggal }}
        </div>
        
        <p>Anda dapat mengunduh surat Anda melalui halaman riwayat pengajuan:</p>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="{{ $riwayatUrl }}" style="background: #0272BA; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Lihat Riwayat Pengajuan
            </a>
        </div>
        
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #666;">
            Email ini dikirim otomatis dari sistem Website Desa Karanganyar.
        </p>
    </div>
</body>
</html>