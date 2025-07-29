import React from "react";
import bottomCard from "../../assets/Home/img/bottomCard.png";
import shadowCard from "../../assets/Home/img/shadowCard.png"
import { Link } from "@inertiajs/react";

const Card = ({ title, description, image, slug }) => {
  const cardContent = (
    <div className="group relative min-w-[120px] w-full cursor-pointer mb-8 sm:mb-10 md:mb-12 overflow-visible">
      <img src={shadowCard} className="absolute z-0 scale-[1.7] h-full"/>
      <div
        className="relative scale-75 lg:scale-100 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-[#A09280] w-[80%] lg:max-w-[400px] mx-auto lg:max-h-[600px] max-w-[300px] max-h-[450px]"
        style={{ aspectRatio: "2/3" }}
      >
        <div className="relative h-5/6 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white pb-12">
              <p className="text-sm lg:text-base leading-relaxed font-sans">{description}</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1/4 flex items-center justify-center px-4 bg-[#95CFF4] rounded-t-2xl">
          <h3 className="font-bold text-2xl lg:text-3xl text-black font-display text-center leading-tight transition-colors duration-300 group-hover:text-[#0272BA]">
            {title}
          </h3>
        </div>
      </div>

      <div
        className="absolute left-1/12 transform -translate-x-1/12 -bottom-[0%] z-10 lg:-bottom-[12%] w-f mx-auto scale-[0.6] lg:scale-90 transition-transform duration-300"
      >
        <img
          src={bottomCard}
          alt="Ornament"
          className="w-full h-auto opacity-100  "
        />
      </div>
    </div>
  );
  return slug ? (
    <Link href={`/sub-umkm/${slug}`}>
        {cardContent}
    </Link>
) : (
    cardContent
);};

export default Card;