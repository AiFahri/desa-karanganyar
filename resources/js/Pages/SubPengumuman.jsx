import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
// import { FaArrowLeft, FaUser } from 'react-icons/fa';

// Icon components (using inline SVG for portability)
const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const CalendarIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h22.5" />
    </svg>
);

const MapPinIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);


// Main component
export default function SubPengumuman() {
  return (
    // Using a common background color to mimic the full-page effect
    <div>
      <Navbar />
    <div className="bg-white font-sans antialiased min-h-screen pt-[76px]">
      
      {/* Header Section */}
      <header className="w-full bg-gradient-to-b from-blue-500 to-cyan-400 py-11 px-8 shadow-md sticky top-0 z-10 max-h-28">
        <div className="max-w-[100vw] mx-auto">
          <button className="flex items-center space-x-2 text-white font-bold text-lg hover:opacity-80 transition-opacity">
            <ArrowLeftIcon className="w-8 h-8" />
            <span  className='text-3xl font-sans'>Kembali</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="p-4 sm:p-6 md:p-8">
        <div className="max-w-[66vw] max-h-[66vh] mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            
            {/* Post Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Acara Pengambilan Sembako untuk Warga Dusun Pancuran!
            </h1>

            {/* Post Meta Information */}
            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-[#0272BA] mb-6 space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="font-semibold text-[#0272BA] text-2xl">10 Juli 2025</span>
              <div className="flex items-center space-x-2">
                <UserIcon className="w-5 h-5 text-[#0272BA] fill-[#0272BA]" />
                <span className='text-2xl font-semibold'>Admin Desa Karanganyar</span>
              </div>
            </div>

            {/* Featured Image */}
            {/* <div className="my-6">
                <img 
                    className="w-1/3 h-auto object-cover rounded-lg shadow-md" 
                    src="https://placehold.co/800x450/3b82f6/ffffff?text=Ilustrasi+Sembako" 
                    alt="Ilustrasi pembagian sembako" 
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x450/cccccc/ffffff?text=Image+Not+Found'; }}
                />
            </div> */}

            {/* Main Body Content */}
            <p className="text-gray-700 leading-relaxed mb-6">
              Pemerintah Desa Karanganyar mengundang seluruh warga Dusun Pancuran untuk hadir dalam kegiatan pembagian sembako sebagai bentuk kepedulian dan dukungan bagi warga.
            </p>

            {/* Highlighted Details Box */}
            <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6 space-y-3">
              <div className="flex items-start">
                <CalendarIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="ml-3 text-gray-800">
                  <span className="font-semibold">Waktu:</span> Sabtu, 10 Juli 2025, pukul 08.00 - 11.00 WIB
                </p>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="ml-3 text-gray-800">
                  <span className="font-semibold">Tempat:</span> Balai Dusun Pancuran, Desa Karanganyar
                </p>
              </div>
            </div>

            {/* Concluding Paragraph */}
            <p className="text-gray-700 leading-relaxed">
              Pastikan Anda membawa identitas diri (KTP atau KK) dan datang sesuai jadwal yang telah ditentukan. Mari bersama-sama menjaga ketertiban demi kelancaran acara ini.
            </p>

          </div>
        </div>
      </main>
    </div>
      <Footer />
    </div>
  );
}
