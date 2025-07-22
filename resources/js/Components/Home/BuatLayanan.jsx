import React from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion"; // Unused imports removed for cleaner code
import mailIcon from "../../../assets/Home/icons/mailIcon.png";

const BuatLayanan = () => {
  return (
    // Section 1: Main Container
    // - Now uses items-center for proper centering of all children.
    // - Switched from percentage padding (py-[8%]) to responsive, fixed padding (py-16, px-4).
    <div
      className="w-full flex flex-col items-center justify-center py-16 sm:py-24 px-4 bg-darkBlue"
    >
      {/* Section 2: Title */}
      {/* - Using a semantic <h2> tag instead of <p>. */}
      {/* - Font size is now responsive (text-3xl on mobile, lg:text-5xl on desktop). */}
      <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-center">
        Layanan Masyarakat
      </h2>

      {/* Section 3: Call-to-Action Button */}
      {/* - Container div uses responsive margin-top. */}
      <div className="mt-10 md:mt-16">
        <Link href="/layanan">
          <motion.div
            initial={{
              background: "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
            }}
            whileHover={{
              background: "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
            }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            // Section 3a: Responsive Button Styling
            // - Using flex with a 'gap' provides better spacing than 'justify-between'.
            // - Font size and padding are now responsive.
            // - Using standard rounded-2xl for consistency.
            className="flex flex-row items-center gap-x-3 sm:gap-x-4 rounded-2xl font-bold
                       px-6 py-3 sm:px-8 text-center text-white font-sans
                       text-lg sm:text-xl md:text-2xl transition-all duration-300"
          >
            {/* Icon is sized explicitly and has alt text for accessibility */}
            <img
              src={mailIcon}
              alt="Ikon surat"
              className="h-6 w-6 sm:h-7 sm:w-7" // Explicit sizing is more robust than scale
            />
            <span>Buat Surat Sekarang</span>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default BuatLayanan;