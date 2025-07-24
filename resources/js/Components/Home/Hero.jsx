import React from "react";
import heroBG from "../../../assets/Home/img/hero_bg.png";
import { Link } from "@inertiajs/react";
import InfiniteScroll from "./InfiniteGallery";
import fotoInf1 from "../../../assets/Home/img/fotoInf1.png";
import fotoInf2 from "../../../assets/Home/img/fotoInf2.png";
import fotoInf3 from "../../../assets/Home/img/fotoInf3.png";
import { motion } from "motion/react";

const items = [
    { content: <img src={fotoInf1} /> },
    { content: <img src={fotoInf2} /> },
    { content: <img src={fotoInf3} /> },
    { content: <img src={fotoInf1} /> },
    { content: <img src={fotoInf2} /> },
    { content: <img src={fotoInf3} /> },
];

const Hero = () => {
    return (
        <div className="w-full overflow-hidden h-screen pt-[76px] max-h-screen mb-0">
            <div className="w-full h-full max-h-[100dvh] max-w-[100dvw] overflow-hidden py-12 lg:py-0">
                <img
                    src={heroBG}
                    className="absolute w-full min-h-[100dvh] top-0 object-cover -z-10 max-h-screen overflow-hidden"
                />
                <div className="flex flex-col lg:flex-row justify-between items-center px-5 lg:px-[11.35vw] z-10 lg:align-middle overflow-hidden">
                    <div
                        className="flex flex-col w-full max-w-[640px] max-h-[400px] px-12 mt-[0px] mb-[0px] z-20 rounded-2xl backdrop-blur"
                        style={{
                            background:
                                "linear-gradient(174deg, rgba(2, 114, 186, 0.20) 6.38%, rgba(2, 114, 186, 0.20) 62.72%, rgba(0, 0, 0, 0.00) 95.47%)",
                        }}
                    >
                        <div className="text-white font-bold font-sans opacity-100 mt-10 lg:mt-[72px] lg:text-[56px] text-xl">
                            Desa Karanganyar
                        </div>
                        <div className="text-white font-semibold font-sans opacity-100 pt-3 lg:pt-6 lg:text-2xl text-sm">
                            Kecamatan Poncokusumo, Kabupaten Malang, Jawa Timur
                        </div>
                        <Link className="" href="/profil">
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
                              className="max-w-fit text-xs md:text-xl lg:rounded-[48px] rounded-3xl font-semibold px-5 pt-3 lg:px-10 lg:py-6 mt-3 lg:mt-6 lg:mb-[72px] mb-10 text-center text-white font-sans opacity-100 transition-all duration-500">
                                Yuk Jelajahi
                            </motion.div>
                        </Link>
                    </div>
                    <div className="hidden lg:flex h-full lg:mt-0 overflow-hidden lg:rotate-0 -mt-60">
                        <InfiniteScroll
                            items={items}
                            isTilted={false}
                            tiltDirection="left"
                            autoplay={true}
                            autoplaySpeed={0.6}
                            autoplayDirection="down"
                            pauseOnHover={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
