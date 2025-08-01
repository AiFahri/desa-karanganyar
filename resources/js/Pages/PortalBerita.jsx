import React from 'react'
import Navbar from '@/Components/Navbar'
import { circInOut, easeInOut, motion } from "framer-motion";
import ItemBerita from '@/Components/Portal/ItemBerita';
import ItemPengumuman from '@/Components/Portal/ItemPengumuman';
import Footer from '@/Components/Footer';

const PortalBerita = ({ pengumuman = { data: [] }, berita = { data: [] } }) => {
  return (
    <>
    <Navbar />
    <div className='w-full pt-[76px]'>
      <div className='w-full'>
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
            className="text-4xl lg:text-[50px] mt-20 mx-auto rounded-full font-bold md:px-[75px] px-[50px] py-[20px] mb-[15px] text-center max-w-fit text-white font-sans opacity-100 transition-all duration-500">
              Portal Berita
        </motion.div>
        
        <div className='max-w-[1400px] mx-auto mt-28 bg-[#D9EAF5] text-3xl text-center lg:text-left lg:text-[44px] py-6 px-16 font-bold text-[#0272BA] rounded-lg'>
          <p className='drop-shadow-md'>Informasi Pengumuman</p>
        </div>
        
        <div className="z-40 grid grid-cols-1 sm:gap-6 lg:gap-y-12 pt-16 lg:pt-32 justify-items-center max-w-[1400px] mx-auto">
          {pengumuman?.data?.length > 0 ? (
            pengumuman.data.map((item) => (
              <ItemPengumuman
                  key={item.id}
                  id={item.id}
                  slug={item.slug}
                  title={item.judul}
                  description={item.deskripsi}
                  date={item.tanggal_publish}
                  buttonText="Selengkapnya"
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Belum ada pengumuman</p>
            </div>
          )}
        </div>
        
        <div className='max-w-[1400px] mx-auto mt-28 bg-[#D9EAF5] text-3xl text-center lg:text-left lg:text-[44px] py-6 px-16 font-bold text-[#0272BA] rounded-lg'>
          <p className='drop-shadow-md'>Informasi Berita</p>
        </div>
        
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[90%]"></div>
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 top-[100%]"></div>
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[0%] top-[200%]"></div>
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[90%] top-[300%]"></div>
        
        <div className="z-40 grid grid-cols-1 sm:gap-6 lg:gap-y-12 pt-16 lg:pt-32 justify-items-center max-w-[1400px] h-full max-h-full mx-auto mb-44">
          {berita?.data?.length > 0 ? (
            berita.data.map((item) => (
              <ItemBerita
                  key={item.id}
                  id={item.id}
                  slug={item.slug}
                  title={item.judul}
                  description={item.deskripsi}
                  date={item.tanggal_publish}
                  buttonText="Selengkapnya"
                  image={item.gambar ? `https://is3.cloudhost.id/karanganyar/${item.gambar}` : 'https://placehold.co/400x300/cccccc/ffffff?text=No+Image'}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Belum ada berita</p>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default PortalBerita
