import React from 'react';
import { Link } from "@inertiajs/react"; // `usePage` was unused and has been removed
import { motion } from "framer-motion";
import Animation from "../Animation";

const HeaderPotensi = () => {
  return (
    <Animation delay={0.2} >
    <div 
      id='headerpotensi'
      className="flex flex-col gap-y-6 md:gap-y-8 justify-center items-center my-16 sm:my-24 px-4 text-center"
    >
      <Link href="#headerpotensi">
        <motion.div
          initial={{
            background: "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
          }}
          whileHover={{
            background: "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="rounded-full font-bold font-sans text-white 
                     px-10 py-3 md:px-16 md:py-4
                     text-3xl md:text-4xl lg:text-5xl
                     transition-all duration-300"
        >
          Potensi Desa
        </motion.div>
      </Link>

      <p className='text-lg md:text-xl font-sans text-[#0272BA] font-semibold max-w-3xl'>
        Menyingkap Kekuatan dan Sumber Daya yang Menggerakkan Roda Kehidupan Desa Karanganyar
      </p>
    </div>
    </Animation>
  );
};

export default HeaderPotensi;
