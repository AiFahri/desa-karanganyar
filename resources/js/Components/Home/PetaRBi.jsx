import React from "react";
import imgpetaRBI from "../../../assets/Home/img/imgpetaRBI.png";
import StatsWilayah from "../Profile/StatsWilayah";

const PetaRBI = ({ backgroundIMG, statsWilayah }) => {
    return (
        <>
            {/* Section 1: Main container */}
            <div
                className="h-full md:min-h-screen max-h-screen w-full flex items-start lg:items-center justify-center p-6 sm:p-12"
                style={{
                    backgroundImage: `url(${backgroundIMG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Section 2: Content wrapper */}
                <div className="w-full max-w-5xl flex flex-col items-center gap-y-8 md:gap-y-12">
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


