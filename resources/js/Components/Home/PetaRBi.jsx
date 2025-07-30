import React from "react";
import imgpetaRBI from "../../../assets/Home/img/imgpetaRBI.png";
import Animation from "../Animation";

const PetaRBIHome = ({ backgroundIMG }) => {
    return (
        <Animation delay={0.2}>
            <div
                className="h-full md:min-h-screen max-h-screen w-full flex items-start lg:items-center justify-center p-6 sm:p-12"
                style={{
                    backgroundImage: `url(${backgroundIMG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="w-full max-w-5xl flex flex-col items-center gap-y-8 md:gap-y-12 pb-[10vh]">
                    
                    <h1 className="font-sans text-blue-800 font-bold text-center text-3xl sm:text-4xl lg:text-5xl drop-shadow-xl">
                        Peta Desa Karanganyar
                    </h1>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18002.44546077551!2d112.75638044999998!3d-8.075874500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62478ae2bb219%3A0x6812d843c866d6cb!2sKaranganyar%2C%20Kec.%20Poncokusumo%2C%20Kabupaten%20Malang%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1753201447698!5m2!1sid!2sid"
                        width="1400"
                        height="700"
                        style={{ border: 1, maxWidth: "75vw", maxHeight: "60vh" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="rounded-xl overflow-hidden"
                    ></iframe>
                </div>
            </div>
        </Animation>
    );
};

export default PetaRBIHome;
