import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const ItemPengumuman = ({
  id,
  slug,
  title,
  date,
  description,
  buttonText = "Selengkapnya",
}) => {
  return (
    <div className="border border-gray-200 w-full rounded-lg p-6 flex flex-col lg:flex-row lg:justify-between lg:items-end bg-white my-4 gap-6 lg:gap-4 lg:p-7 lg:px-14">
      
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
      
      <Link href={`/pengumuman/${slug}`}>
        <motion.div
          initial={{
            background: "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
          }}
          whileHover={{
            background: "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
          }}
          transition={{ duration: 0.3, easing: "easeIn" }}
          className="text-white cursor-pointer font-sans font-semibold rounded-lg px-4 py-3 flex items-center justify-between shadow transition w-full lg:w-auto lg:min-w-[240px]"
        >
          {buttonText}
          
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M5.20833 12.5H19.7917" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 5.20833L19.7917 12.5L12.5 19.7917" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </Link>
    </div>
  );
};

export default ItemPengumuman;

