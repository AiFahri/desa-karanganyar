import React from 'react'
import Navbar from '@/Components/Navbar'

const LayananMasyarakat = () => {
  return (
        <>
            <Navbar />
   
              <section class="min-h-screen w-full bg-white flex items-center px-24">
                
                  <div class="container mx-auto">
                    <div className="flex justify-center items-center min-h-auto my-16">
                      <a
                        href="/layanan"
                        className="text-[50px] bg-gradient-to-b from-[#0272BA] to-[#95CFF4] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
                      >
                        Layanan Masyarakat
                      </a>
                    </div>
                       
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-[92px] items-center">

                          {/* teks  */}
                          <div class="order-2 md:order-1">
                              <h1 class="text-[44px] font-bold text-[#0272BA] mb-6">
                                Selamat datang di Layanan Masyarakat Website Desa Karanganyar!
                              </h1>

                              <p class="text-[24px] font-bold text-black text-lg mb-6">
                                  Kami hadir untuk mempermudah setiap langkah Anda dalam pengajuan dan pembuatan surat yang dibutuhkan. Melalui layanan ini, kami menyediakan fitur Pembuatan Surat untuk memudahkan administrasi seluruh warga Desa Karanganyar.
                              </p>

                          </div>
                          
                          {/* gambar */}
                          <div class="order-1 md:order-2">
                                <img src="/LayananMasyarakat/Layanan1.png" alt="Gambar layanan" />
                          </div>
                      </div>

                <div class="max-w-6xl mx-auto">
                        <div class="flex flex-wrap justify-center gap-8">
                            {/* <!-- Card 1 - Cepat --> */}
                            <div class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 max-w-xs w-full min-h-[320px] flex flex-col items-center">
                                <div class="w-20 h-20 rounded-full border-2 border-dashed border-red-400 bg-red-50 flex items-center justify-center text-sm text-gray-600 mb-6 flex-shrink-0">
                                    <img src="./icons/speed-icon.svg" alt="Speed Icon" class="w-10 h-10">
                                </div>
                                <h3 class="text-xl font-semibold text-gray-800 mb-4">Cepat</h3>
                                <p class="text-sm text-gray-600 leading-relaxed text-justify flex-grow">
                                    Proses pembayaran yang cepat menggunakan teknologi terdepan, tanpa perlu antri atau menunggu lama. Semua transaksi dapat diselesaikan secara online dengan mudah dan efisien.
                                </p>
                            </div>

                            {/* <!-- Card 2 - Mudah --> */}
                            <div class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 max-w-xs w-full min-h-[320px] flex flex-col items-center">
                                <div class="w-20 h-20 rounded-full border-2 border-dashed border-yellow-400 bg-yellow-50 flex items-center justify-center text-sm text-gray-600 mb-6 flex-shrink-0">
                                    Icon Area
                                </div>
                                <h3 class="text-xl font-semibold text-gray-800 mb-4">Mudah</h3>
                                <p class="text-sm text-gray-600 leading-relaxed text-justify flex-grow">
                                    Formulir dan alur pengajuan peminjaman yang mudah dipahami. Tidak perlu dokumen rumit atau persyaratan yang dapat membingungkan. Sistem dengan mudah, tanpa ribet dan berbelit-belit.
                                </p>
                            </div>

                            {/* <!-- Card 3 - Hemat Waktu --> */}
                            <div class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 max-w-xs w-full min-h-[320px] flex flex-col items-center">
                                <div class="w-20 h-20 rounded-full border-2 border-dashed border-blue-400 bg-blue-50 flex items-center justify-center text-sm text-gray-600 mb-6 flex-shrink-0">
                                    Icon Area
                                </div>
                                <h3 class="text-xl font-semibold text-gray-800 mb-4">Hemat Waktu</h3>
                                <p class="text-sm text-gray-600 leading-relaxed text-justify flex-grow">
                                    Tidak perlu menunggu lama untuk mendapatkan persetujuan. Proses verifikasi dan persetujuan dalam hitungan menit. Waktu adalah penting, itulah mengapa kami berkomitmen untuk memberikan layanan terbaik.
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
              </section>

            <section class="min-h-screen w-full bg-white flex items-center">
            <div h-screen w-full>
              <h1 className="text-red-400">Pembuatan Surat</h1>
            </div>
            </section>
            
            
            
        </>
    
  )
}

export default LayananMasyarakat