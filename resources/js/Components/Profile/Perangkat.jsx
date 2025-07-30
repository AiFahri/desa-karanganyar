import React from "react";
import PerangkatDesa from "./../../../assets/ProfilDesa/PerangkatDesa.png";
import Animation from "../Animation";

const Perangkat = () => {
    return (
        <Animation delay={0.2}>
            <div className="min-h-0 md:min-h-screen p-4 md:p-6 lg:p-8 flex flex-col">
                <div className="h-auto">
    
                    <div className="text-center lg:text-left pt-8 md:pt-16 lg:pt-[129px] px-4 md:px-8 lg:pl-[240px] lg:pr-8">
                        <div
                            className="text-2xl md:text-3xl lg:text-[44px] font-bold leading-tight lg:leading-none"
                            style={{
                                color: "#0272BA",
                                textShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                            }}
                        >
                            Susunan Perangkat Desa
                        </div>
                        <div
                            className="text-2xl md:text-3xl lg:text-[44px] pt-2 lg:pt-[10px] font-bold leading-tight lg:leading-none"
                            style={{ color: "#025B95" }}
                        >
                            Pilar Utama Desa Karanganyar
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-center pt-4 md:pt-6 lg:pt-[14px] w-full max-w-sm md:max-w-2xl lg:max-w-[1221px] mx-auto">
                    <div className="w-full h-48 md:h-80 lg:h-[568px] flex items-center justify-center">
                        <img
                            src={PerangkatDesa}
                            alt="Gambar layanan"
                            className="relative z-10 max-w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </Animation>
    );
};

export default Perangkat;
