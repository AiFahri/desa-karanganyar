import React from 'react'
import { circInOut, easeInOut, motion } from "framer-motion";
import { Link } from '@inertiajs/react'

const View = () => {
  return (
        <>
              <section class="min-h-screen w-full bg-white flex items-center pt-[76px]">
                <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[90%]"></div>
                <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 top-[100%]"></div>
                
                  <div class="container mx-auto">
                    <div className="flex justify-center items-center min-h-auto my-16">
                      <Link className="" href="/layanan">
                            <motion.div
                              initial={{
                                background:
                                  "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
                              }}
                              whileHover={{
                                background:
                                  "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
                              }}
                              transition={{ duration: 0.3, easing: "easeIn" }}
                              className="text-[50px] rounded-full font-bold px-[75px] py-[15px] mt-[15px] mb-[15px] text-center max-w-fit text-white font-sans opacity-100 transition-all duration-500">
                                Layanan Masyarakat
                            </motion.div>
                        </Link>
                    </div>
                       
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[92px] items-center">
                      {/* teks  */}
                      <div className="order-2 md:order-1 flex flex-col justify-center">
                          <h1 className="text-[44px] font-bold text-[#0272BA] mb-6"
                          style={{ textShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)' }}
                          >
                              Selamat datang di Layanan Masyarakat Website Desa Karanganyar!
                          </h1>

                          <p className="text-[24px] font-bold text-black text-lg mb-6">
                              Kami hadir untuk mempermudah setiap langkah Anda dalam pengajuan dan pembuatan surat yang dibutuhkan. Melalui layanan ini, kami menyediakan fitur Pembuatan Surat untuk memudahkan administrasi seluruh warga Desa Karanganyar.
                          </p>
                      </div>
                    
                      {/* gambar */}
                      <div className="order-1 md:order-2 flex items-center justify-center relative ">
                            
                          {/* Background blur - ukuran diperkecil dan diposisikan ulang */}
                          <div className="absolute inset-0 w-full h-auto rounded-full bg-blue-100 blur-[75px] flex-shrink-0"></div>
                          <img 
                              src="/LayananMasyarakat/Layanan1.png" 
                              alt="Gambar layanan" 
                              className="relative z-10 max-w-full h-auto"
                          />
                          <motion.img 
                              initial={{scale: 0.8}}
                              animate={{rotate: 360}}
                              transition={{duration: 36, repeat: Infinity, ease: 'linear'}}
                              src="/LayananMasyarakat/col (1).png" 
                              alt="Gambar layanan" 
                              className="absolute z-9 max-w-full h-auto"
                          />  
                      </div>
                    </div>

                    <div className="max-w-full mx-auto my-[83px]">
                        <div className="flex flex-wrap justify-center gap-[52px]">
                            {/* Card 1 - Cepat */}
                            <div className="bg-transparent rounded-2xl p-8 text-center w-[395px] min-h-auto transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center mb-6 flex-shrink-0">
                                    <img src="/LayananMasyarakat/albums.svg" alt="Speed Icon" className="w-10 h-10" />
                                </div>
                                <h3 className="text-[24px] font-semibold text-black mb-4">Cepat</h3>
                                <p className="text-[18px] text-black leading-relaxed text-justify flex-grow">
                                  Proses pengajuan surat menjadi lebih singkat tanpa perlu antre di kantor desa. Semua bisa Anda lakukan secara online, kapan saja sesuai kebutuhan.
                                </p>
                            </div>

                            {/* Card 2 - Mudah */}
                            <div className="bg-transparent rounded-2xl p-8 text-center w-[395px] min-h-auto transition-all duration-300 hover:-translate-y-2  flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center mb-6 flex-shrink-0">
                                    <img src="/LayananMasyarakat/albums.svg" alt="Easy Icon" className="w-10 h-10" />
                                </div>
                                <h3 className="text-[24px] font-semibold text-black mb-4">Mudah</h3>
                                <p className="text-[18px] text-black leading-relaxed text-justify flex-grow">
                                    Formulir dan alur pengajuan dirancang sederhana dan ramah pengguna, sehingga siapa pun dapat mengurus surat dengan mudah, bahkan bagi yang baru pertama kali mencoba.
                                </p>
                            </div>

                            {/* Card 3 - Hemat Waktu */}
                            <div className="bg-transparent rounded-2xl p-8 text-center w-[395px] min-h-auto transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mb-6 flex-shrink-0">
                                    <img src="/LayananMasyarakat/albums.svg" alt="Time Icon" className="w-10 h-10" />
                                </div>
                                <h3 className="text-[24px] font-semibold text-black mb-4">Hemat Waktu</h3>
                                <p className="text-[18px] text-black leading-relaxed text-justify flex-grow">
                                    Tanpa perlu datang langsung ke kantor desa, Anda dapat mengajukan surat hanya dalam beberapa langkah. Waktu Anda pun dapat dimanfaatkan untuk kegiatan lain yang lebih penting.
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
              </section>

            <section class="min-h-screen w-full bg-white flex items-center">
              <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 top-[110%]"></div>
                  <div class="container mx-auto">
                    <div className="flex justify-center items-center min-h-auto my-[32px]">
                      <h1 className="text-[24px] font-bold text-[#0272BA]">Pembuatan Surat</h1>
                      
                    </div>
                    <div className="w-full h-[1px] bg-[#0272BA]/40"></div>
                    
                       
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[94px] items-start mt-[44px]">
                      {/* teks kiri */}
                      <div className="order-2 md:order-1 flex flex-col justify-start relative w-[536px]">
                        {/* Background blur */}
                        <div className="absolute inset-0 w-full h-auto rounded-full bg-blue-200 blur-[75px] z-9"></div>
                        
                        <h1 className="text-[56px] font-bold text-[#0272BA] relative z-10"
                        style={{ textShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)' }}
                        >
                          Pembuatan Surat Desa Karanganyar
                        </h1>
                      </div>
                                            
                      {/* teks kanan */}
                      <div className="order-1 md:order-2 flex justify-center items-start relative flex-col max-w-[770px] h-auto">
                        <p className="text-[24px] font-semibold text-black text-lg">
                              Selamat datang di bagian Pembuatan Surat Website Desa Karanganyar!<br/><br/>
                              Kami hadir untuk mempermudah setiap langkah Anda dalam mengurus dan membuat surat yang diperlukan. Di sini, kami menyediakan berbagai layanan pembuatan surat yang dirancang untuk memenuhi kebutuhan administrasi seluruh warga Desa Karanganyar.
                        </p>
                        <div className="flex justify-center items-start min-h-auto">
                          <Link className="" href="/layanan">
                                <motion.div
                                  initial={{
                                    background:
                                      "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
                                  }}
                                  whileHover={{
                                    background:
                                      "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
                                  }}
                                  transition={{ duration: 0.3, easing: "easeIn" }}
                                  className="text-[20px] rounded-[40px] font-semibold px-[40px] py-[24px] mt-[36px] text-center max-w-fit text-white font-sans opacity-100 transition-all duration-500">
                                    Klik di sini untuk membuat surat
                                </motion.div>
                            </Link>
                        </div>
                        <div className="flex justify-center items-start min-h-auto">
                          <Link className="" href="/layanan">
                                <motion.div
                                  initial={{
                                    background:
                                      "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
                                  }}
                                  whileHover={{
                                    background:
                                      "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
                                  }}
                                  transition={{ duration: 0.3, easing: "easeIn" }}
                                  className="text-[20px] rounded-[40px] font-semibold px-[40px] py-[24px] mt-[36px] text-center max-w-fit text-white font-sans opacity-100 transition-all duration-500">
                                    Klik di sini untuk cek status surat
                                </motion.div>
                            </Link>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[91px] pt-[56px]">
                      <div className="space-y-[45px]">
                        <p className="text-black text-[24px] font-semibold ">1. Surat Keterangan Domisili</p>
                        <p className="text-black text-[24px] font-semibold ">2. Surat Keterangan Usaha</p>
                        <p className="text-black text-[24px]  font-semibold">3. Surat Berpergian</p>
                      </div>
                      
                      <div className="space-y-[45px]">
                        <p className="text-black text-[24px] font-semibold ">4. Surat SKCK</p>
                        <p className="text-black text-[24px] font-semibold ">5. Surat SKCN</p>
                        <p className="text-black text-[24px] font-semibold ">6. Surat Keterangan Kerja</p>
                      </div>
                      <div className="space-y-[45px]">
                        <p className="text-black text-[24px] font-semibold ">7. Surat Keterangan Penghasilan</p>
                        <p className="text-black text-[24px] font-semibold ">8. Surat Keterangan Belum Menikah</p>
                        <p className="text-black text-[24px] font-semibold ">9. Surat Kelahiran, Surat Kematian</p>
                      </div>
                    </div>
                    
                  </div>
            </section>
      
        </>
  )
}

export default View