import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { usePage } from "@inertiajs/react";
import { CalendarIcon, MapPinIcon } from "lucide-react";

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
      <div className="bg-white font-sans antialiased min-h-screen pt-[76px]">
        <div className="container mx-auto px-4 py-8">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}




