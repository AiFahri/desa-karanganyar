import React from "react";
import Card from "../Card";
import PotensiSecMobile from "./PotensiSecMobile";
import Animation from "../Animation";

const PotensiSection = ({ id, className = "", headerTitle, umkmData, deskripsi }) => {
    // Gunakan data UMKM jika ada, fallback ke dummy untuk Potensi Alam
    const dataToShow =
        umkmData && id === "potensiGan2" ? umkmData : umkmData;
    return (
        <Animation delay={0.2}>
            <section
                id={id}
                className={`relative pb-20 bg-white overflow-hidden max-w-[100vw]`}
            >
                <div className="relative z-10 container mx-auto px-4">
                    <p className="text-[44px] pb-4 font-sans text-[#0272BA] font-semibold text-center">
                        {headerTitle}
                    </p>
                    <p className="text-center text-black md:text-[24px] text-[16px] font-medium mb-8 max-w-2xl mx-auto">
                    {deskripsi}</p>

                    <div className="hidden z-40 md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-x-24 lg:gap-y-24 justify-items-center max-w-6xl mx-auto">
                        {dataToShow?.map((item) => (
                            <Card
                                key={item.id}
                                title={item.merk_dagang || item.title}
                                description={item.deskripsi_singkat}
                                image={
                                    item.gambar_path
                                        ? `https://is3.cloudhost.id/karanganyar/${item.gambar_path}`
                                        : item.image
                                }
                                slug={item.slug}
                            />
                        ))}
                    </div>

                    <PotensiSecMobile objek={umkmData} />
                </div>
            </section>
        </Animation>
    );
};

export default PotensiSection;
