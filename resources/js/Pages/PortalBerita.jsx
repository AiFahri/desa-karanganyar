import React from 'react'
import Navbar from '@/Components/Navbar'
import { circInOut, easeInOut, motion } from "framer-motion";
import ItemBerita from '@/Components/Portal/ItemBerita';
import ItemPengumuman from '@/Components/Portal/ItemPengumuman';
import { dummyPortalP } from '@/data/dummyPortalP';
import { dummyPortalB } from '@/data/dummyPortalB';
import Footer from '@/Components/Footer';

const PortalBerita = () => {
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
            className="text-[50px] mt-20 mx-auto rounded-full font-bold px-[75px] py-[15px] mb-[15px] text-center max-w-fit text-white font-sans opacity-100 transition-all duration-500">
              Portal Berita
        </motion.div>
        <div className='max-w-[1400px] mx-auto mt-28 bg-[#D9EAF5] text-[44px] py-6 px-16 font-bold text-[#0272BA] rounded-lg'>
          <p className='drop-shadow-md'>Informasi Pengumuman</p>
        </div>
          <div className="z-40 grid grid-cols-1 sm:gap-6 lg:gap-y-12 pt-32 justify-items-center max-w-[1400px] mx-auto">
            {dummyPortalP.map((item) => (
              <ItemPengumuman
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  buttonText={item.buttonText}
              />
            ))}
          </div>
        <div className='max-w-[1400px] mx-auto mt-28 bg-[#D9EAF5] text-[44px] py-6 px-16 font-bold text-[#0272BA] rounded-lg'>
          <p className='drop-shadow-md'>Informasi Berita</p>
        </div>
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[90%]"></div>
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 top-[100%]"></div>
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[0%] top-[200%]"></div>
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[90%] top-[300%]"></div>
        <div className="z-40 grid grid-cols-1 sm:gap-6 lg:gap-y-12 pt-32 justify-items-center max-w-[1400px] h-full max-h-full mx-auto mb-44">
            {dummyPortalB.map((item) => (
              <ItemBerita
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  buttonText={item.buttonText}
                  image={item.image}
              />
            ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default PortalBerita