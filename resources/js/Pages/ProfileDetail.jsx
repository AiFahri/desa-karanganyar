import React from 'react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import TombolKembali from '@/Components/TombolKembali';
// import { ArrowLeftIcon, EyeOffIcon } from '@heroicons/react/outline'; 
// import { useNavigate } from 'react-router-dom'; 

// SVG Icon for hiding the password
const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-gray-500"
  >
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ProfileDetail = () => {
  // const navigate = useNavigate(); // navigasi kembali

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#EBE6E6] font-sans flex flex-col pt-[76px]">

      {/* Header */}
      <div className='pt-[76px]'>
        <TombolKembali backTo="/" />
      </div>

      {/* Content */}
      <main className="flex-1 flex justify-center items-center py-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          {/* Profile Icon */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-2">
              <span className="text-4xl text-white">👤</span>
            </div>
            <h2 className="text-xl font-semibold">Alexa Rawles</h2>
            <p className="text-gray-500">alexarawles@gmail.com</p>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">NIK</label>
              <input
                type="text"
                value="3576023109900002"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value="alexarawles@gmail.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Nomor HP</label>
              <input
                type="tel"
                value="+6281234567890"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value="password"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10"
                  readOnly
                />
                <EyeOffIcon className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition">Riwayat Pengajuan Surat</button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition">Lupa Password</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default ProfileDetail;
