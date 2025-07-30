import React from "react";
import { circInOut, easeInOut, motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import imgpetaRBI from "../../../assets/Home/img/imgpetaRBI.png";
import Animation from "../Animation";

const PetaRBI = ({}) => {
    return (
        <Animation delay={0.2}>
            <div
                className="bg-[#FDFCFC] min-h-0 md:min-h-96 lg:min-h-screen flex items-center justify-center min-w-screen relative p-4 md:p-6 lg:p-0 pt-20 md:pt-24"
                x
            >
                <div className="relative w-full max-w-sm md:max-w-2xl lg:max-w-[70vw] mx-auto pt-24">
          
                    <div className="absolute inset-0 w-[15%] h-[30%] rounded-full bg-[#95CFF4] blur-[50px] flex-shrink-0 left-[100%] hidden lg:block"></div>
                    <div className="absolute inset-0 w-[20%] h-[30%] rounded-full bg-[#95CFF4] blur-[50px] flex-shrink-0 left-[-20%] top-[100%] hidden lg:block"></div>
                    <div className="flex flex-col justify-center items-center">
                      
                        <div 
                            className="text-[16px] md:text-[32px] lg:text-[50px] font-bold text-white 
              px-6 py-2 rounded-full text-center mb-6 shadow-md 
              bg-gradient-to-b from-[#0272BA] to-[#95CFF4]"
                        >
                            Profil Desa
                        </div>

                        <div className="flex w-full">
                            <img
                                src="/images/PETARBI.jpg"
                                className="w-full max-w-full h-auto object-contain pt-4 md:pt-6 lg:pt-[24px] max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh]"
                                alt="Peta RBI"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Animation>
    );
};

export default PetaRBI;
