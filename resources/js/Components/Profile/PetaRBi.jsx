import React from 'react';
import { circInOut, easeInOut, motion } from "framer-motion";
import { Link } from '@inertiajs/react'
import imgpetaRBI from '../../../assets/Home/img/imgpetaRBI.png';

const PetaRBI = ({backgroundIMG}) => {
  return (
    <div
      className="min-h-0 md:min-h-96 lg:min-h-screen flex items-center justify-center min-w-screen relative p-4 md:p-6 lg:p-0 pt-20 md:pt-24"
      style={{
        backgroundImage: `url(${backgroundIMG})`,
        backgroundPosition: "center",
      }}
    >
      <div className='relative w-full max-w-sm md:max-w-2xl lg:max-w-[70vw] mx-auto'>
        <div className='flex flex-col justify-center items-center px-4 md:px-8 pt-8 lg:px-[9%]'>
          <div className="flex justify-center items-center w-full mb-4 md:mb-6">
            <Link className="block" href="/profil">
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
                className="text-sm md:text-lg lg:text-[50px] rounded-full font-bold px-4 py-2 md:px-8 md:py-3 lg:px-[75px] lg:py-[15px] text-center min-w-fit text-white font-sans opacity-100 transition-all duration-500 relative z-10">
                  Profil Desa
              </motion.div>
            </Link>
          </div>
          <div className="flex">
            <p className='font-sans text-blue-800 text-lg md:text-3xl lg:text-5xl font-bold drop-shadow-xl text-center md:text-left px-2 md:px-0'>
              Peta Rupa Bumi Indonesia 2022
            </p>
          </div>
          <div className="flex w-full">
            <img 
              src={imgpetaRBI} 
              className='w-full max-w-full h-auto object-contain pt-4 md:pt-6 lg:pt-[24px] max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh]'
              alt="Peta RBI"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetaRBI