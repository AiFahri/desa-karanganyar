import React from 'react';
import { circInOut, easeInOut, motion } from "framer-motion";

const ItemBerita = ({
  title,
  date,
  description,
  buttonText,
  image,
}) => {
  return (
    <div className="font-sans border border-gray-200 w-full rounded-lg flex-shrink-0 py-24 pl-20 pr-48 flex justify-evenly items-start bg-white max-w-full max-h-[500px] my-4">
      <div className=''>
        <img src={image} alt="Gambar Kejadian Berita" className="h-full max-h-[300px] max-w-[270px] rounded-lg" />
      </div>
      <div className='h-full flex flex-col items-end justify-end'>
        <div className='h-full'>
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <div className="text-blue-600 font-medium text-base mb-2">{date}</div>
          <p className="text-gray-500 max-w-xl">{description}</p>
        </div>
        <motion.div
          initial={{
            background:
              "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
          }}
          whileHover={{
            background:
              "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
          }}
          transition={{ duration: 0.3, easing: "easeIn" }}
          className="max-w-[260px] cursor-pointer text-white font-sans font-semibold rounded-lg px-4 py-3 flex items-center shadow hover:from-blue-600 transition"
        >
          {buttonText}
          <div className='ml-[72px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M13.8217 3.82196C14.1343 3.50951 14.5581 3.33398 15 3.33398C15.442 3.33398 15.8658 3.50951 16.1784 3.82196L23.6784 11.322C23.9908 11.6345 24.1664 12.0584 24.1664 12.5003C24.1664 12.9422 23.9908 13.3661 23.6784 13.6786L16.1784 21.1786C15.864 21.4822 15.443 21.6502 15.006 21.6464C14.569 21.6426 14.151 21.4673 13.842 21.1583C13.533 20.8493 13.3577 20.4313 13.3539 19.9943C13.3501 19.5573 13.5181 19.1363 13.8217 18.822L18.3334 14.167H2.50004C2.05801 14.167 1.63409 13.9914 1.32153 13.6788C1.00897 13.3662 0.833374 12.9423 0.833374 12.5003C0.833374 12.0583 1.00897 11.6343 1.32153 11.3218C1.63409 11.0092 2.05801 10.8336 2.50004 10.8336H18.3334L13.8217 6.17863C13.5093 5.86608 13.3337 5.44224 13.3337 5.00029C13.3337 4.55835 13.5093 4.13451 13.8217 3.82196Z" fill="#FDFCFC"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItemBerita;