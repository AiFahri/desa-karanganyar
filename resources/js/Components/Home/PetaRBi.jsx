import React from "react";
import imgpetaRBI from "../../../assets/Home/img/imgpetaRBI.png";
import StatsWilayah from "../Profile/StatsWilayah";

const PetaRBI = ({ statsWilayah }) => {
    return (
        <>
            {/* Section 1: Main container with blur background */}
            <div className="relative h-full md:min-h-screen max-h-screen w-full flex items-start lg:items-center justify-center p-6 sm:p-12 ">
                {/* Blur Background Elements */}
                <div className="absolute inset-0 w-[19%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[82%] top-[-5%] hidden lg:block"></div>
                <div className="absolute inset-0 w-[19%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 top-[-10%] left-[-5%] hidden lg:block"></div>
                
                {/* Content Wrapper */}
                <div className='flex flex-col justify-center items-center w-full max-w-5xl gap-y-8 md:gap-y-12 relative z-10'>
                    {/* Section 3: Title */}
                    <h1 className="font-sans text-blue-800 font-bold text-center text-3xl sm:text-4xl lg:text-5xl drop-shadow-xl">
                        Peta Desa Karanganyar
                    </h1>

                    {/* Section 4: Map Image */}
                    <div className="w-full flex justify-center">
                        <img 
                            src={imgpetaRBI} 
                            alt="Peta RBI Desa Karanganyar"
                            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
            
            {/* Section 5: Stats Wilayah */}
            <StatsWilayah stats={statsWilayah} />
        </>
    );
};

export default PetaRBI;