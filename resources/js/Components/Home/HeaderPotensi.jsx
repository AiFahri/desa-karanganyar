import React from 'react';
import { Link } from "@inertiajs/react"; // `usePage` was unused and has been removed
import { motion } from "framer-motion";

const HeaderPotensi = () => {
  return (
    // Section 1: Main container
    // Added horizontal padding `px-4` for mobile.
    // Adjusted vertical margin `my-` and gap `gap-y-` to be responsive.
    <div 
      id='headerpotensi' // Moved ID here for better structure, can be targeted by the link
      className="flex flex-col gap-y-6 md:gap-y-8 justify-center items-center my-16 sm:my-24 px-4 text-center"
    >
      {/* Section 2: Animated Link Button */}
      {/* The <Link> component itself doesn't need styling here; the motion.div provides the visuals. */}
      <Link href="#headerpotensi">
        <motion.div
          initial={{
            background: "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
          }}
          whileHover={{
            background: "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          // Section 2a: Responsive Styling
          // - Replaced fixed `text-[50px]` with responsive `text-3xl md:text-4xl lg:text-5xl`.
          // - Replaced fixed `px-[75px]` and `py-[15px]` with responsive padding.
          // - Removed `max-w-[30vw]` to allow the button to size naturally based on its content.
          className="rounded-full font-bold font-sans text-white 
                     px-10 py-3 md:px-16 md:py-4
                     text-3xl md:text-4xl lg:text-5xl
                     transition-all duration-300"
        >
          Potensi Desa
        </motion.div>
      </Link>

      {/* Section 3: Subtitle */}
      {/* - Replaced fixed `text-2xl` with responsive `text-lg md:text-xl`. */}
      {/* - Added `max-w-3xl` to improve readability on large screens by limiting line length. */}
      <p className='text-lg md:text-xl font-sans text-[#0272BA] font-semibold max-w-3xl'>
        Menyingkap Kekuatan dan Sumber Daya yang Menggerakkan Roda Kehidupan Desa Karanganyar
      </p>
    </div>
  );
};

export default HeaderPotensi;
