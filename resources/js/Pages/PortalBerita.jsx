import React from "react";
import Navbar from "@/Components/Navbar";
import { circInOut, easeInOut, motion } from "framer-motion";
import ItemBerita from "@/Components/Portal/ItemBerita";
import ItemPengumuman from "@/Components/Portal/ItemPengumuman";
import Footer from "@/Components/Footer";
import APBD from "../../assets/Portal/img/APBD.jpg";
import Animation from "@/Components/Animation";

const APBDPic = ({ src, alt = "APBD Desa" }) => {
    return (
        <Animation delay={0.2}>
            <div className="flex justify-center items-center w-full min-h-[18.75rem] py-4">
                <div className="bg-white rounded-lg shadow-md border p-4 sm:p-6 md:p-7 mt-8 sm:mt-12 md:mt-16 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-4">
                    <img
                        src={src}
                        alt={alt}
                        className="rounded-md w-full h-auto object-contain"
                    />
                </div>
            </div>
        </Animation>
    );
};

const PortalBerita = ({
    pengumuman = { data: [] },
    berita = { data: [] },
    year = 2025,
}) => {
    return (
        <>
            <Navbar />
            <Animation delay={0.2}>
                <div className="w-full pt-[4.75rem]">
                    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0">
                        {/* Portal Berita Header */}
                        <div 
                            className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto mt-8 sm:mt-12 md:mt-20 
                            text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white 
                            px-4 py-2 sm:py-3 rounded-full text-center mb-6 shadow-md 
                            bg-gradient-to-b from-[#0272BA] to-[#95CFF4]"
                        >
                            Portal Berita
                        </div>

                        {/* APBD Section */}
                        <div className="max-w-7xl mx-auto mt-8 sm:mt-16 md:mt-28 bg-[#D9EAF5] 
                            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                            text-center lg:text-left py-4 sm:py-5 md:py-6 
                            px-6 sm:px-10 md:px-16 font-bold text-[#0272BA] rounded-lg lg:mx-auto">
                            <p className="drop-shadow-md">
                                Transparansi APBDesa Tahun Anggaran {year}
                            </p>
                        </div>

                        <APBDPic src={APBD} alt="APBD Desa" />

                        {/* Pengumuman Section */}
                        <div className="max-w-7xl mx-auto mt-8 sm:mt-16 md:mt-28 bg-[#D9EAF5] 
                            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                            text-center lg:text-left py-4 sm:py-5 md:py-6 
                            px-6 sm:px-10 md:px-16 font-bold text-[#0272BA] rounded-lg lg:mx-auto">
                            <p className="drop-shadow-md">
                                Informasi Pengumuman
                            </p>
                        </div>

                        <div className="relative z-40 grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 
                            pt-4 sm:pt-8 lg:pt-16 xl:pt-32 justify-items-center max-w-7xl mx-auto px-4 lg:px-0">
                            {pengumuman?.data?.length > 0 ? (
                                pengumuman.data.map((item) => (
                                    <ItemPengumuman
                                        key={item.id}
                                        id={item.id}
                                        slug={item.slug}
                                        title={item.judul}
                                        description={item.deskripsi}
                                        date={item.tanggal_publish}
                                        buttonText="Selengkapnya"
                                    />
                                ))
                            ) : (
                                <div className="text-center py-8 sm:py-12">
                                    <p className="text-gray-500 text-base sm:text-lg">
                                        Belum ada pengumuman
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Berita Section */}
                        <div className="max-w-7xl mx-auto mt-8 sm:mt-16 md:mt-28 bg-[#D9EAF5] 
                            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                            text-center lg:text-left py-4 sm:py-5 md:py-6 
                            px-6 sm:px-10 md:px-16 font-bold text-[#0272BA] rounded-lglg:mx-auto">
                            <p className="drop-shadow-md">Informasi Berita</p>
                        </div>

                        {/* Background Blur Effects - Menggunakan viewport units */}
                        <div className="absolute inset-0 w-[8vw] h-[20vh] rounded-full bg-[#95CFF4] blur-[5rem] 
                            flex-shrink-0 right-[2vw] top-[80vh] pointer-events-none"></div>
                        <div className="absolute inset-0 w-[8vw] h-[20vh] rounded-full bg-[#95CFF4] blur-[5rem] 
                            flex-shrink-0 left-[2vw] top-[120vh] pointer-events-none"></div>
                        <div className="absolute inset-0 w-[8vw] h-[20vh] rounded-full bg-[#95CFF4] blur-[5rem] 
                            flex-shrink-0 right-[2vw] top-[160vh] pointer-events-none"></div>
                        <div className="absolute inset-0 w-[8vw] h-[20vh] rounded-full bg-[#95CFF4] blur-[5rem] 
                            flex-shrink-0 left-[2vw] top-[200vh] pointer-events-none"></div>

                        <div className="relative z-40 grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 
                            pt-4 sm:pt-8 lg:pt-16 xl:pt-32 justify-items-center max-w-7xl mx-auto
                            mb-16 sm:mb-24 md:mb-32 lg:mb-44 px-4 lg:px-0">
                            {berita?.data?.length > 0 ? (
                                berita.data.map((item) => (
                                    <ItemBerita
                                        key={item.id}
                                        id={item.id}
                                        slug={item.slug}
                                        title={item.judul}
                                        description={item.deskripsi}
                                        date={item.tanggal_publish}
                                        buttonText="Selengkapnya"
                                        image={
                                            item.gambar
                                                ? `https://is3.cloudhost.id/karanganyar/${item.gambar}`
                                                : "https://placehold.co/400x300/cccccc/ffffff?text=No+Image"
                                        }
                                    />
                                ))
                            ) : (
                                <div className="text-center py-8 sm:py-12">
                                    <p className="text-gray-500 text-base sm:text-lg">
                                        Belum ada berita
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Animation>
            <Footer />
        </>
    );
};

export default PortalBerita;