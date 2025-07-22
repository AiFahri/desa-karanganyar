import React from 'react';
import { circInOut, easeInOut, motion } from "framer-motion";
import { Link } from '@inertiajs/react'
import imgpetaRBI from '../../../assets/Home/img/imgpetaRBI.png';


const PetaRBI = ({backgroundIMG}) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center min-w-screen relative"
      style={{
        backgroundImage: `url(${backgroundIMG})`,
        backgroundPosition: "center",
      }}
    >
      <div className='relative max-w-[70vw] mx-auto'>
        <div className='flex flex-col justify-center items-center px-[9%]'>
          <div className="flex justify-center items-center">

                      <Link className="" href="/profildesa">
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
                              className="text-[50px] rounded-full font-bold px-[75px] py-[15px] text-center max-w-fit text-white font-sans opacity-100 transition-all duration-500">
                                Profil Desa
                            </motion.div>
                        </Link>
                    </div>
          <div className="flex">
            <img src={imgpetaRBI} className='max-w-[70vw] max-h-[70vh] w-full h-auto object-contain pt-[24px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetaRBI