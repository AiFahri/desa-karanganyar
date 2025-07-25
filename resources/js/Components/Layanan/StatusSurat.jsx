import React from 'react'
import { Link } from '@inertiajs/react'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const StatusSurat = () => {
  return (
    <section className="relative min-h-screen bg-white pt-[76px] overflow-hidden">
      {/* Gradien background & tombol kembali */}
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

      {/* Konten utama */}
      <div className="relative z-10 flex justify-center items-start pt-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-10 border"
        >
          {/* Judul */}
          <h1 className="text-[50px] md:text-[40px] pt-[30px] font-bold text-center text-black mb-6">
            Status Pembuatan Surat
          </h1>
          <hr className="pb-[40px] border-t border-[#00000066]" />


          {/* Informasi status */}
          <div className="space-y-6 text-[18px] md:text-[18px] font-medium text-gray-800">
            <div>
              <label className="block mb-2 font-semibold">Tujuan Pengajuan Surat</label>
              <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
                Surat Keterangan Domisili
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold">Tanggal Pengajuan Surat</label>
              <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
                10 Juli 2025
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold">Waktu Pengajuan</label>
              <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
                09.30
              </div>
            </div>
          </div>

          {/* Tombol selesai */}
          <div className="flex justify-center mt-10">
            <button className=" text-[18px] flex items-center gap-2 px-6 py-3 border border-green-400 text-green-500 rounded-lg font-semibold hover:bg-green-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M10.5 20C16.0228 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0228 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97715 20 10.5 20Z" fill="#22C55E" fill-opacity="0.5"/>
                <path d="M6.125 8.75L9.7425 12.3675C9.77766 12.4026 9.82531 12.4223 9.875 12.4223C9.92469 12.4223 9.97234 12.4026 10.0075 12.3675L19.875 2.5" stroke="#1BAF52" stroke-width="1.25"/>
              </svg>
              Selesai
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatusSurat
