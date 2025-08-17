import React from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion"; // Unused imports removed for cleaner code
import mailIcon from "../../../assets/Home/icons/mailIcon.png";
import Animation from "../Animation";

const BuatLayanan = () => {
    return (
        <Animation delay={0.2}>
            <div className="w-full flex flex-col items-center justify-center py-16 sm:py-24 px-4 bg-darkBlue">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-center">
                    Layanan Masyarakat
                </h2>

                <div className="mt-10 md:mt-16">
                    <Link href="/layanan">
                        <motion.div
                            initial={{
                                background:
                                    "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
                            }}
                            whileHover={{
                                background:
                                    "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
                            }}
                            transition={{ duration: 0.3, ease: "easeIn" }}
                            className="flex flex-row items-center gap-x-3 sm:gap-x-4 rounded-2xl font-bold
                       px-6 py-3 sm:px-8 text-center text-white font-sans
                       text-lg sm:text-xl md:text-2xl transition-all duration-300"
                        >
                            <img
                                src={mailIcon}
                                alt="Ikon surat"
                                className="h-6 w-6 sm:h-7 sm:w-7" 
                            />
                            <span>Buat Surat Sekarang</span>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </Animation>
    );
};

export default BuatLayanan;
