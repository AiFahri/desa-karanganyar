import React from 'react';
import { motion } from "framer-motion";

const ItemBerita = ({
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
        />
      </div>

      {/* CONTENT CONTAINER: Stacks text and button. flex-grow allows it to fill space. */}
      <div className="flex flex-col flex-grow gap-6 lg:justify-between h-full">
        {/* Text Block */}
        <div>
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <div className="text-blue-600 font-medium text-base mb-2">{date}</div>
          <p className="text-gray-500 max-w-xl">{description}</p>
        </div>

        {/* BUTTON: Now a flex container itself for robust spacing. */}
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
          
          {/* SVG icon is now a direct child, no extra div needed. */}
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M13.8217 3.82196C14.1343 3.50951 14.5581 3.33398 15 3.33398C15.442 3.33398 15.8658 3.50951 16.1784 3.82196L23.6784 11.322C23.9908 11.6345 24.1664 12.0584 24.1664 12.5003C24.1664 12.9422 23.9908 13.3661 23.6784 13.6786L16.1784 21.1786C15.864 21.4822 15.443 21.6502 15.006 21.6464C14.569 21.6426 14.151 21.4673 13.842 21.1583C13.533 20.8493 13.3577 20.4313 13.3539 19.9943C13.3501 19.5573 13.5181 19.1363 13.8217 18.822L18.3334 14.167H2.50004C2.05801 14.167 1.63409 13.9914 1.32153 13.6788C1.00897 13.3662 0.833374 12.9423 0.833374 12.5003C0.833374 12.0583 1.00897 11.6343 1.32153 11.3218C1.63409 11.0092 2.05801 10.8336 2.50004 10.8336H18.3334L13.8217 6.17863C13.5093 5.86608 13.3337 5.44224 13.3337 5.00029C13.3337 4.55835 13.5093 4.13451 13.8217 3.82196Z" fill="#FDFCFC"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ItemBerita;