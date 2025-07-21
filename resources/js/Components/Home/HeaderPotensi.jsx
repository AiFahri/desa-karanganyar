import React from 'react'
import { Link, usePage } from "@inertiajs/react";
import { circInOut, easeInOut, motion } from "framer-motion";

const HeaderPotensi = () => {
  return (
    <>
      <div className="flex flex-col gap-y-9 justify-center items-center min-h-auto my-16">
        <Link className="" id='headerpotensi' href="#headerpotensi">
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
            className="text-[50px] rounded-full font-bold px-[75px] py-[15px] mt-[15px] mb-[15px] text-center max-w-[30vw] text-white font-sans opacity-100 transition-all duration-500">
              Potensi Desa
          </motion.div>
        </Link>
        <p className='text-2xl font-sans text-[#0272BA] font-semibold'>Menyingkap Kekuatan dan Sumber Daya yang Menggerakkan Roda Kehidupan Desa Karanganyar</p>
      </div>
    </>
  )
}

export default HeaderPotensi