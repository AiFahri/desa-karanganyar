<!DOCTYPE html>
<html>
<head>
    <title>Pengajuan Surat Baru</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0272BA;">Pengajuan Surat Baru</h2>
        
        <p>Ada pengajuan surat baru yang perlu diproses:</p>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong>Detail Pengajuan:</strong><br>
            Nama: {{ $nama }}<br>
            NIK: {{ $nik }}<br>
            Jenis Surat: {{ $jenisSurat }}<br>
            Tanggal Pengajuan: {{ $tanggal }}
        </div>
        
        <p>Silakan login ke admin panel untuk memproses pengajuan ini.</p>
        
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #666;">
            Email ini dikirim otomatis dari sistem Website Desa Karanganyar.
        </p>
    </div>
</body>
</html>