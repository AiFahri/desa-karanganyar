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
        <div className="w-full overflow-hidden mt-[76px] max-h-screen">
            <div className="w-full max-h-screen overflow-hidden">
                <img
                    src={heroBG}
                    className="absolute w-full min-h-[100dvh] top-0 object-cover -z-10"
                />
                <div className="flex flex-row justify-between items-center px-[11.35vw] z-10 align-middle">
                    <div
                        className="flex flex-col w-full max-w-[640px] max-h-[390px] px-12 mt-[0px] mb-[0px] z-20 rounded-2xl backdrop-blur"
                        style={{
                            background:
                                "linear-gradient(174deg, rgba(2, 114, 186, 0.20) 6.38%, rgba(2, 114, 186, 0.20) 62.72%, rgba(0, 0, 0, 0.00) 95.47%)",
                        }}
                    >
                        <div className="text-white font-bold font-sans opacity-100 pt-[72px] text-[56px]">
                            Desa Karanganyar
                        </div>
                        <div className="text-white font-semibold font-sans opacity-100 pt-6 text-[24px]">
                            Kecamatan Poncokusumo, Kabupaten Malang, Jawa Timur
                        </div>
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
                              className="text-xl rounded-[48px] font-semibold px-10 py-6 mt-6 mb-[72px] text-center max-w-fit text-white font-sans opacity-100 transition-all duration-500">
                                Yuk Jelajahi
                            </motion.div>
                        </Link>
                    </div>
                    <div className="h-full mt-[0px] overflow-hidden">
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
