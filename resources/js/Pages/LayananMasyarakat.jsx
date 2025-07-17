import React from 'react'
import Navbar from '@/Components/Navbar'

const LayananMasyarakat = () => {
  return (
        <>
            <Navbar />
   
              <section class="min-h-screen w-full bg-white flex items-center">
                  <div class="container mx-auto px-4">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                         
                          {/* teks  */}
                          <div class="order-2 md:order-1">
                              <h1 class="text-4xl md:text-5xl font-bold text-red-400 mb-6">
                                  Selamat datang di Layanan Masyarakat Website Desa Karanganyar!
                              </h1>
                              <p class="text-gray-600 text-lg mb-6">
                                  Kami hadir untuk mempermudah setiap langkah Anda dalam pengajuan dan pembuatan surat yang dibutuhkan. Melalui layanan ini, kami menyediakan fitur Pembuatan Surat untuk memudahkan administrasi seluruh warga Desa Karanganyar.
                              </p>
                              <div class="space-y-4">
                                  <div class="flex items-center space-x-3">
                                      <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                                      <span class="text-gray-700">Pelayanan cepat dan efisien</span>
                                  </div>
                                  <div class="flex items-center space-x-3">
                                      <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                                      <span class="text-gray-700">Proses online dan offline</span>
                                  </div>
                                  <div class="flex items-center space-x-3">
                                      <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                                      <span class="text-gray-700">Dukungan 24/7</span>
                                  </div>
                              </div>
                          </div>
                          
                          {/* gambar */}
                          <div class="order-1 md:order-2">
                              <div class="">
                                <img src="/LayananMasyarakat/Layanan1.png" alt="Gambar layanan" />

                              </div>
                          </div>
                      </div>
                  </div>
              </section>

            <div h-screen w-full>
              <h1 className="text-red-400">Pembuatan Surat</h1>
            </div>
            
            
            
        </>
    
  )
}

export default LayananMasyarakat