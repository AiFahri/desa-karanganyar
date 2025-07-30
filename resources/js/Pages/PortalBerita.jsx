import React from "react";
import Navbar from "@/Components/Navbar";
import { circInOut, easeInOut, motion } from "framer-motion";
import ItemBerita from "@/Components/Portal/ItemBerita";
import ItemPengumuman from "@/Components/Portal/ItemPengumuman";
import Footer from "@/Components/Footer";
import APBD from "../../assets/Portal/img/APBD.jpg";
import Animation from "@/Components/Animation";
import { usePage } from "@inertiajs/react";

const APBDPic = ({ src, alt = "APBD Desa" }) => {
    return (
        <Animation delay={0.2}>
            <div className="flex justify-center items-center w-full min-h-[300px] py-4">
                <div className="bg-white rounded-lg shadow-md border p-7 mt-16 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
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
    const { auth } = usePage().props;

    return (
        <>
            <Navbar user={auth.user} />
            <Animation delay={0.2}>
                <div className=" w-full pt-[76px]">
                    <div className="w-full px-5 lg:px-0">
                        <div
                            className=" max-w-[30%] mx-auto mt-20 text-[16px] md:text-[32px] lg:text-[50px] font-bold text-white 
              px-4 py-2 rounded-full text-center mb-6 shadow-md 
              bg-gradient-to-b from-[#0272BA] to-[#95CFF4]"
                        >
                            Portal Berita
                        </div>

                        <div className="max-w-[1400px] mx-auto md:mt-28 bg-[#D9EAF5] text-xl md:text-3xl text-center lg:text-left lg:text-[44px] py-6 px-16 font-bold text-[#0272BA] rounded-lg">
                            <p className="drop-shadow-md">
                                Transparansi APBDesa Tahun Anggaran {year}
                            </p>
                        </div>

                        <APBDPic src={APBD} alt="APBD Desa" />

                        <div className="max-w-[1400px] mx-auto md:mt-28 bg-[#D9EAF5] text-xl md:text-3xl text-center lg:text-left lg:text-[44px] py-6 px-16 font-bold text-[#0272BA] rounded-lg">
                            <p className="drop-shadow-md">
                                Informasi Pengumuman
                            </p>
                        </div>

                        <div className="z-40 grid grid-cols-1 sm:gap-6 lg:gap-y-12 pt-4 lg:pt-32 justify-items-center max-w-[1400px] mx-auto">
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
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-lg">
                                        Belum ada pengumuman
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="max-w-[1400px] mx-auto mt-9 md:mt-28 bg-[#D9EAF5] text-xl md:text-3xl text-center lg:text-left lg:text-[44px] py-6 px-16 font-bold text-[#0272BA] rounded-lg">
                            <p className="drop-shadow-md">Informasi Berita</p>
                        </div>

                        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[90%]"></div>
                        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 top-[100%]"></div>
                        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[0%] top-[200%]"></div>
                        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[90%] top-[300%]"></div>

                        <div className="z-40 grid grid-cols-1 sm:gap-6 lg:gap-y-12 pt-4 lg:pt-32 justify-items-center max-w-[1400px] h-full max-h-full mx-auto mb-44">
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
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-lg">
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
