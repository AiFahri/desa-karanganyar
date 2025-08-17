import React from 'react';
import { Link } from '@inertiajs/react';

const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const TombolKembali = ({backTo}) => {
  return (
    <div>
      <div className="flex top-0 left-0 w-full md:h-[120px] h-[35px] z-0 bg-gradient-to-b from-[#0272BA] to-[#95CFF4]">
        <div className="absolute md:mt-6 mt-[-3px] md:ml-6 ml-[21px]">
          <Link
            href={backTo}
            className="inline-flex items-center md:gap-[28px] gap-[6px] px-6 py-3 font-bold md:text-[32px] text-[14px] text-white"
          >
            <ArrowLeftIcon className="md:w-[50px] w-[16px] md:h-[50px] h-[16px]" />
            Kembali
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TombolKembali