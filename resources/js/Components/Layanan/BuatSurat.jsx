import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useForm } from '@inertiajs/react'
import { ArrowLeft } from 'lucide-react'

const BuatSurat = ({ suratJenis }) => {
  console.log('=== DEBUG BuatSurat ===');
  console.log('Props received:', { suratJenis });
  console.log('suratJenis type:', typeof suratJenis);
  console.log('suratJenis length:', suratJenis?.length);
  console.log('======================');
    const { data, setData, post, processing, errors, progress } = useForm({
    nama_lengkap: '',
    nik_pemohon: '',
    no_kk_pemohon: '',
    surat_jenis_id: '',
    foto_ktp: null,
    foto_kk: null
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setData(name, value)
  }

  const handleDropdownSelect = (jenisId, jenisNama) => {
    setData('surat_jenis_id', jenisId)
    setIsDropdownOpen(false)
  }

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0]
    setData(fileType, file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/pengajuan-surat', {
      forceFormData: true,
      onSuccess: () => {
        // Form akan redirect otomatis ke riwayat-pengajuan
      }
    })
  }

  const selectedJenis = suratJenis?.find(jenis => jenis.id == data.surat_jenis_id)
  console.log('selectedJenis:', selectedJenis); // Debug log

  return (
    <>
      <section className="relative min-h-screen w-full bg-white pt-[76px] overflow-hidden">
        {/* Blur dekoratif */}
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] left-[90%] top-[18%] hidden lg:block z-[2]"></div>
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] top-[90%] hidden lg:block z-0"></div>
        
        {/* Gradien background */}
        <div className="flex top-0 left-0 w-full h-[120px] z-0 bg-gradient-to-b from-[#0272BA] to-[#95CFF4]">
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
            <h1 className="text-[50px] font-bold text-center text-black mb-8">
              Pengajuan Surat Keterangan
            </h1>
            <hr className="pb-[40px] border-t border-[#00000066]" />

            {/* Error Messages */}
            {Object.keys(errors).length > 0 && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-red-800 font-semibold mb-2">Terjadi kesalahan:</h3>
                <ul className="text-red-700 text-sm space-y-1">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Nama */}
                  <div>
                    <label className="block text-black text-[18px] font-semibold mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="nama_lengkap"
                      value={data.nama_lengkap}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap sesuai KTP"
                      className={`w-full text-[14px] pl-[20px] py-[14px] font-semibold border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.nama_lengkap ? 'border-red-500' : 'border-[#D9D9D9]'
                      }`}
                      required
                    />
                  </div>

                  {/* NIK */}
                  <div>
                    <label className="block text-black text-[18px] font-semibold mb-2">
                      Nomor Induk Kependudukan (NIK)
                    </label>
                    <input
                      type="text"
                      name="nik_pemohon"
                      value={data.nik_pemohon}
                      onChange={handleInputChange}
                      placeholder="16 digit Nomor Induk Kependudukan"
                      className={`w-full text-[14px] pl-[20px] py-[14px] font-semibold border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.nik_pemohon ? 'border-red-500' : 'border-[#D9D9D9]'
                      }`}
                      maxLength="16"
                      required
                    />
                  </div>

                  {/* Nomor KK */}
                  <div>
                    <label className="block text-black text-[18px] font-semibold mb-2">
                      Nomor Kartu Keluarga
                    </label>
                    <input
                      type="text"
                      name="no_kk_pemohon"
                      value={data.no_kk_pemohon}
                      onChange={handleInputChange}
                      placeholder="Nomor Kartu Keluarga (16 digit)"
                      className={`w-full text-[14px] pl-[20px] py-[14px] font-semibold border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.no_kk_pemohon ? 'border-red-500' : 'border-[#D9D9D9]'
                      }`}
                      maxLength="16"
                      required
                    />
                  </div>

                  {/* Tujuan Pengajuan Surat */}
                  <div>
                    <label className="block text-black text-[18px] font-semibold mb-2">
                      Tujuan Pengajuan Surat
                    </label>
                    <div className="relative">
                      <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full text-[14px] pl-[20px] py-[14px] font-semibold border rounded-[8px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.surat_jenis_id ? 'border-red-500' : 'border-[#D9D9D9]'
                        }`}
                      >
                        <span className={selectedJenis ? 'text-gray-900' : 'text-gray-400'}>
                          {selectedJenis ? selectedJenis.nama_jenis : 'Pilih salah satu tujuan pengajuan surat'}
                        </span>
                      </div>
                      
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
                        >
                          {suratJenis && suratJenis.length > 0 ? (
                            suratJenis.map((jenis) => (
                              <div
                                key={jenis.id}
                                onClick={() => handleDropdownSelect(jenis.id, jenis.nama_jenis)}
                                className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-gray-700 border-b border-gray-100 last:border-b-0 transition-colors"
                              >
                                {jenis.nama_jenis}
                              </div>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-gray-500 text-center">
                              Tidak ada jenis surat tersedia
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - File Upload */}
                <div className="space-y-6">
                  {/* Upload KTP */}
                  <div>
                    <label className="block text-black text-[18px] font-semibold mb-2">
                      Unggah Foto KTP
                    </label>
                    <div className="flex gap-3 items-center">
                      <div className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white min-h-[48px] flex items-center">
                        <span className="text-gray-600 text-sm">
                          {data.foto_ktp ? data.foto_ktp.name : 'Belum ada file dipilih'}
                        </span>
                      </div>
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/jpg"
                          onChange={(e) => handleFileChange(e, 'foto_ktp')}
                          className="hidden"
                        />
                        <div className={`px-6 py-3 rounded-lg flex items-center gap-2 text-white transition-colors ${
                          errors.foto_ktp ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                        }`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7,10 12,15 17,10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                          </svg>
                          Unggah
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Upload KK */}
                  <div>
                    <label className="block text-black text-[18px] font-semibold mb-2">
                      Unggah Foto KK
                    </label>
                    <div className="flex gap-3 items-center">
                      <div className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white min-h-[48px] flex items-center">
                        <span className="text-gray-600 text-sm">
                          {data.foto_kk ? data.foto_kk.name : 'Belum ada file dipilih'}
                        </span>
                      </div>
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/jpg"
                          onChange={(e) => handleFileChange(e, 'foto_kk')}
                          className="hidden"
                        />
                        <div className={`px-6 py-3 rounded-lg flex items-center gap-2 text-white transition-colors ${
                          errors.foto_kk ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                        }`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7,10 12,15 17,10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                          </svg>
                          Unggah
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Upload Progress */}
                  {progress && (
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${progress.percentage}%` }}
                      ></div>
                      <p className="text-sm text-gray-600 mt-1">Upload: {progress.percentage}%</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="lg:col-span-2 flex justify-center lg:justify-end mt-8">
                <motion.button
                  type="submit"
                  disabled={processing}
                  initial={{ background: "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)" }}
                  whileHover={{ background: "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)" }}
                  transition={{ duration: 0.3, easing: "easeIn" }}
                  className="flex items-center gap-[72px] px-[19px] py-[12px] bg-gradient-to-b from-[#0272BA] to-[#95CFF4] hover:from-[#0272BA] hover:to-[#0272BA] text-[14px] font-semibold text-white font-sans rounded-md sm:px-6 sm:py-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processing ? 'Mengirim...' : 'Kirim'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                    <path d="M1.88289 15.7343C1.53567 15.8732 1.20581 15.8426 0.893311 15.6426C0.580811 15.4426 0.424561 15.152 0.424561 14.7708V10.0833L8.75789 7.99992L0.424561 5.91658V1.22908C0.424561 0.84714 0.580811 0.556515 0.893311 0.35721C1.20581 0.157904 1.53567 0.127348 1.88289 0.265543L17.9246 7.03638C18.3586 7.22735 18.5756 7.54853 18.5756 7.99992C18.5756 8.45131 18.3586 8.77249 17.9246 8.96346L1.88289 15.7343Z" fill="#FDFCFC"/>
                  </svg>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default BuatSurat


