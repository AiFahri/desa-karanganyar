import React from 'react';
import { motion } from "framer-motion";
import { Link } from '@inertiajs/react';

const ItemBerita = ({
  id,
  slug,
  title,
  date,
  description,
  buttonText,
  image,
}) => {
  return (
    // MAIN CONTAINER: Mobile-first (flex-col), switches to flex-row on large screens.
    // Padding and gap are now responsive. Removed max-h to allow content to grow.
    <div className="font-sans border border-gray-200 w-full rounded-lg bg-white my-4 flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 lg:p-12 lg:items-center">
      
      {/* IMAGE CONTAINER: Takes full width on mobile, 1/3 on desktop. */}
      <div className="w-full lg:w-1/3 flex-shrink-0">
        <img 
          src={image} 
          alt={title || "Gambar Berita"} 
          // aspect-video ensures consistent image shape. object-cover prevents distortion.
          className="w-full h-auto object-cover rounded-lg aspect-video" 
          onError={(e) => {
            e.target.src = 'https://placehold.co/400x300/cccccc/ffffff?text=No+Image';
          }}
        />
      </div>

      {/* CONTENT CONTAINER: Stacks text and button. flex-grow allows it to fill space. */}
      <div className="flex flex-col flex-grow gap-6 lg:justify-between h-full">
        {/* Text Block */}
        <div>
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <div className="text-blue-600 font-medium text-base mb-2">
            {new Date(date).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long', 
              year: 'numeric'
            })}
          </div>
          <p className="text-gray-500 max-w-xl">{description}</p>
        </div>

        <Link href={`/berita/${slug}`}>
          <motion.div
            initial={{
              background: "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
            }}
            whileHover={{
              background: "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
            }}
            transition={{ duration: 0.3, easing: "easeIn" }}
            // Full-width on mobile, auto-width on desktop.
            // justify-between replaces the old fixed margin for the icon.
            className="cursor-pointer self-end text-white font-sans font-semibold rounded-lg px-4 py-3 flex items-center justify-between shadow w-full lg:w-auto lg:max-w-xs"
          >
            {buttonText}
            
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M5.20833 12.5H19.7917" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 5.20833L19.7917 12.5L12.5 19.7917" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default ItemBerita;
