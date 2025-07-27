import Footer from '@/Components/Footer'
import React from 'react'
import { Link } from '@inertiajs/react'
import Navbar from '@/Components/Navbar';

// Checkmark Icon SVG
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Cross Icon SVG
const CrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

// Hourglass/Processing Icon SVG
const HourglassIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// StatusBadge Component to dynamically render the correct badge
const StatusBadge = ({ status }) => {
  if (status === 'Selesai') {
    return (
      <div className="inline-flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
        <CheckIcon />
        <span>Selesai</span>
      </div>
    );
  }
  if (status === 'Sedang Diproses') {
    return (
      <div className="inline-flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
        <HourglassIcon />
        <span>Sedang Diproses</span>
      </div>
    );
  }
  if (status === 'Ditolak') {
    return (
      <div className="inline-flex items-center justify-center text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-700">
        <CrossIcon />
        <span>Ditolak</span>
      </div>
    );
  }
  return null; // Return null for any other status
};

const submissionHistory = [
  {
    id: 1,
    purpose: 'Surat Keterangan Domisili',
    date: '10 Juli 2025',
    time: '09.30',
    status: 'Selesai',
  },
  {
    id: 2,
    purpose: 'Surat SKCK',
    date: '1 Juni 2025',
    time: '11.00',
    status: 'Selesai',
  },
  {
    id: 3,
    purpose: 'Surat Keterangan Belum Menikah',
    date: '1 Juni 2025',
    time: '12.35',
    status: 'Sedang Diproses',
  },
  {
    id: 4,
    purpose: 'Surat Keterangan Belum Menikah',
    date: '1 Juni 2025',
    time: '12.45',
    status: 'Ditolak',
  },
];

const RiwayatPengajuan = () => {
  return (
    <div>
      <Navbar />
      <header className="w-full bg-gradient-to-b from-blue-500 to-cyan-400 py-11 px-8 mt-[76px] shadow-md sticky top-0 z-10 max-h-28">
        <div className="max-w-[100vw] mx-auto">
          <Link href="/portal" className="flex items-center space-x-2 text-white font-bold text-lg hover:opacity-80 transition-opacity">
            <ArrowLeftIcon className="w-8 h-8" />
            <span className='text-3xl font-sans'>Kembali</span>
          </Link>
        </div>
      </header>
      <div className='bg-gray-50 min-h-screen flex justify-center p-4 font-sans'>
      <div className="w-full max-w-[90vw] bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Riwayat Pengajuan Surat
        </h1>

        {/* This container handles the responsive layout change */}
        <div className="overflow-x-auto">
        
          {/* Desktop Table View (hidden on small screens) */}
          <table className="min-w-full hidden md:table">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider rounded-l-lg">Tujuan Pengajuan Surat</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Tanggal Pengajuan Surat</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Waktu Pengajuan Surat</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider rounded-r-lg">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {submissionHistory.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.purpose}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Card View (hidden on medium screens and up) */}
          <div className="md:hidden space-y-4">
            {submissionHistory.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                    <h2 className="font-bold text-gray-800">{item.purpose}</h2>
                    <StatusBadge status={item.status} />
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <div>
                    <span className="font-semibold text-gray-500">Tanggal: </span>
                    {item.date}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-500">Waktu: </span>
                    {item.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default RiwayatPengajuan