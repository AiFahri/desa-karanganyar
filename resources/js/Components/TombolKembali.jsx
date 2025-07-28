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
      {/* Gradien background & tombol kembali */}
      <div className="flex top-0 left-0 w-full h-[120px] z-0 bg-gradient-to-b from-[#0272BA] to-[#95CFF4]">
        <div className="absolute mt-6 ml-6">
          <Link
            href={backTo}
            className="inline-flex items-center gap-[28px] px-6 py-3 font-bold text-[32px] text-white"
          >
            <ArrowLeftIcon className="w-[50px] h-[50px]" />
            Kembali
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TombolKembali