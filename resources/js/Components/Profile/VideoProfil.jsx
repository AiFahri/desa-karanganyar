import React from "react";
import { motion } from "framer-motion";
import Animation from "../Animation";

const VideoProfil = () => {
    return (
        <Animation delay={0.1}>
            <div
                className="bg-[#FDFCFC] min-h-0 md:min-h-96 lg:min-h-screen flex items-center justify-center min-w-screen relative p-4 md:p-6 lg:p-0"
            >
                <div className="relative w-full max-w-sm md:max-w-2xl lg:max-w-[70vw] mx-auto pt-12">
          
                    <div className="absolute inset-0 w-[15%] h-[30%] rounded-full bg-[#95CFF4] blur-[50px] flex-shrink-0 left-[100%] hidden lg:block"></div>
                    <div className="absolute inset-0 w-[20%] h-[30%] rounded-full bg-[#95CFF4] blur-[50px] flex-shrink-0 left-[-20%] top-[100%] hidden lg:block"></div>
                    <div className="flex flex-col justify-center items-center">
                      
                     

                        <div className="flex w-full">
                            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.youtube.com/embed/jJskmgntit0"
                                    title="Video Profil Desa Karanganyar"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Animation>
    );
};

export default VideoProfil;
