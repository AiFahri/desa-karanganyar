import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { circInOut, easeInOut, motion } from "framer-motion";
import mailIcon from "../../assets/Home/icons/mailIcon.png"

const BuatLayanan = () => {
  return (
    <div
      className="max-h-fit min-w-full flex flex-col items-start justify-center py-[8%] bg-darkBlue z-40"
    >
      <p className="text-white text-5xl font-sans font-bold mx-auto">
        Layanan Masyarakat
      </p>
        <div className="flex justify-center items-center min-h-auto my-16 mx-auto">
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
              className="text-[44px] flex flex-row justify-between items-center rounded-[20px] font-bold px-12 py-3 text-center max-w-fit text-white font-sans opacity-100 transition-all duration-500">
                <img src={mailIcon} className="scale-50 max-w-fit -ml-6"/>
                Buat Surat Sekarang
            </motion.div>
          </Link>
        </div>
    </div>
  );
};

export default BuatLayanan;