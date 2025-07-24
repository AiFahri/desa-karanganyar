import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@inertiajs/react'
import { ArrowLeft, Upload, ChevronDown } from 'lucide-react'

const BuatSurat = () => {
  const [formData, setFormData] = useState({
    nama: '',
    nomorIndukKependudukan: '',
    nomorKartuKeluarga: '',
    tujuanPengajuan: '',
    ktpFile: null,
    kkFile: null
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const tujuanOptions = [
    'Keperluan Beasiswa',
    'Keperluan Melamar Pekerjaan',
    'Keperluan Administrasi Bank',
    'Keperluan Perpanjangan SIM',
    'Keperluan Administrasi Sekolah/Kuliah',
    'Keperluan Visa/Paspor',
    'Keperluan BPJS',
    'Keperluan Asuransi',
    'Keperluan Nikah',
    'Lainnya'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDropdownSelect = (value) => {
    setFormData(prev => ({
      ...prev,
      tujuanPengajuan: value
    }))
    setIsDropdownOpen(false)
  }

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0]
    setFormData(prev => ({
      ...prev,
      [fileType]: file
    }))
  }

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form data:', formData)
    alert('Form berhasil dikirim!')
  }

  return (
    <>
      {/* Section utama dengan padding atas untuk memberi ruang ke navbar */}
      <section className="relative min-h-screen w-full bg-white pt-[76px] overflow-hidden">
        {/* Blur dekoratif */}
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] left-[90%] top-[15%] hidden lg:block z-[-2]"></div>
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] top-[90%] hidden lg:block z-0"></div>
        
        {/* Gradien background di belakang konten */}
        <div className="flex top-0 left-0 w-full h-[120px] z-0 bg-gradient-to-b from-[#0272BA] to-[#95CFF4]">
          {/* Tombol kembali */}
          <div className="absolute mt-6 ml-6">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-[28px] px-6 py-3 font-bold text-[32px] text-white"
            >
              <ArrowLeft className="w-[50px] h-[50px]" />
              Kembali
            </Link>
          </div>
        </div>

        {/* Container Form */}
        <div className="relative z-10 flex justify-center items-start pt-8 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8"
          >
            {/* Header Form */}
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Pengajuan Surat Keterangan
            </h1>

            {/* Form Layout - 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Input Fields */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Data Diri</h2>
                
                {/* Nama */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap sesuai KTP"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Nomor Induk Kependudukan */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nomor Induk Kependudukan
                  </label>
                  <input
                    type="text"
                    name="nomorIndukKependudukan"
                    value={formData.nomorIndukKependudukan}
                    onChange={handleInputChange}
                    placeholder="16 digit Nomor Induk Kependudukan"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    maxLength="16"
                  />
                </div>

                {/* Nomor Kartu Keluarga */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nomor Kartu Keluarga
                  </label>
                  <input
                    type="text"
                    name="nomorKartuKeluarga"
                    value={formData.nomorKartuKeluarga}
                    onChange={handleInputChange}
                    placeholder="Nomor Kartu Keluarga (16 digit)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    maxLength="16"
                  />
                </div>

                {/* Tujuan Pengajuan Surat */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Tujuan Pengajuan Surat
                  </label>
                  <div className="relative">
                    <div
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer bg-white flex items-center justify-between"
                    >
                      <span className={formData.tujuanPengajuan ? 'text-gray-900' : 'text-gray-400'}>
                        {formData.tujuanPengajuan || 'Pilih salah satu tujuan pengajuan surat'}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                    
                    {/* Dropdown Options */}
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
                      >
                        {tujuanOptions.map((option, index) => (
                          <div
                            key={index}
                            onClick={() => handleDropdownSelect(option)}
                            className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-gray-700 border-b border-gray-100 last:border-b-0 transition-colors"
                          >
                            {option}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - File Upload */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Unggah Dokumen</h2>
                
                {/* Upload KTP */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Unggah KTP
                  </label>
                  <label className="cursor-pointer block">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, 'ktpFile')}
                      className="hidden"
                    />
                    <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 font-medium">
                        {formData.ktpFile ? formData.ktpFile.name : 'Klik untuk unggah KTP'}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Format: JPG, PNG, PDF (Max 5MB)
                      </p>
                    </div>
                  </label>
                  {formData.ktpFile && (
                    <p className="text-sm text-green-600 mt-2">✓ File berhasil diunggah</p>
                  )}
                </div>

                {/* Upload KK */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Unggah KK
                  </label>
                  <label className="cursor-pointer block">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, 'kkFile')}
                      className="hidden"
                    />
                    <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 font-medium">
                        {formData.kkFile ? formData.kkFile.name : 'Klik untuk unggah KK'}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Format: JPG, PNG, PDF (Max 5MB)
                      </p>
                    </div>
                  </label>
                  {formData.kkFile && (
                    <p className="text-sm text-green-600 mt-2">✓ File berhasil diunggah</p>
                  )}
                </div>

                {/* Upload Status Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700 mb-2">Status Upload:</h3>
                  <div className="space-y-1">
                    <p className={`text-sm ${formData.ktpFile ? 'text-green-600' : 'text-gray-400'}`}>
                      {formData.ktpFile ? '✓' : '○'} KTP
                    </p>
                    <p className={`text-sm ${formData.kkFile ? 'text-green-600' : 'text-gray-400'}`}>
                      {formData.kkFile ? '✓' : '○'} Kartu Keluarga
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default BuatSurat