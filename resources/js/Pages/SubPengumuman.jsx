import React from 'react';
import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import TombolKembali from '@/Components/TombolKembali';

const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
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

export default function SubPengumuman({ pengumuman = {} }) {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleString('id-ID', {
      day: 'numeric',
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!pengumuman || !pengumuman.judul) {
    return (
      <div>
        <Navbar />
        <div className="bg-white font-sans antialiased min-h-screen pt-[76px]">
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">Loading...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className='pt-[76px]'>
        <TombolKembali backTo="/" />
      </div>
      <div className="bg-white font-sans antialiased min-h-screen pt-[76px]">
        <main className="p-4 sm:p-6 md:p-8">
          <div className="max-w-[66vw] max-h-[66vh] mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 sm:p-8">
              
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {pengumuman.judul || 'Judul tidak tersedia'}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-[#0272BA] mb-6 space-y-2 sm:space-y-0 sm:space-x-6">
                <span className="font-semibold text-[#0272BA] text-2xl">
                  {formatDate(pengumuman.tanggal_publish)}
                </span>
                <div className="flex items-center space-x-2">
                  <span className='text-2xl font-semibold'>{pengumuman.published_by || 'Admin'}</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {pengumuman.deskripsi || 'Deskripsi tidak tersedia'}
              </p>

              <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6 space-y-3">
                {pengumuman.waktu_acara && (
                  <div className="flex items-start">
                    <CalendarIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="ml-3 text-gray-800">
                      <span className="font-semibold">Waktu:</span> {formatDateTime(pengumuman.waktu_acara)}
                    </p>
                  </div>
                )}
                {pengumuman.tempat_acara && (
                  <div className="flex items-start">
                    <MapPinIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="ml-3 text-gray-800">
                      <span className="font-semibold">Tempat:</span> {pengumuman.tempat_acara}
                    </p>
                  </div>
                )}
              </div>

              <p className="text-gray-700 leading-relaxed">
                Pastikan Anda hadir sesuai jadwal yang telah ditentukan. Mari bersama-sama menjaga ketertiban demi kelancaran acara ini.
              </p>

            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}



