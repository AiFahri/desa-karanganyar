import React, { useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';
import mailIcon from '../../assets/Home/icons/mailIcon.png';
import TotalPenggunaIcon from '../../assets/Home/icons/TotalPenggunaIcon.png';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const cardData = [
    { label: 'Total Surat', icon: mailIcon },
    { label: 'Total Pengguna', icon: TotalPenggunaIcon },
    { label: 'Total Berita', icon: TotalPenggunaIcon },
    { label: 'Total Pengumuman', icon: TotalPenggunaIcon },
  ];

  return (
    <div className="min-h-screen bg-[#EBE6E6] font-sans flex flex-col">
      {/* Navbar */}
      <NavbarAdmin toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        {sidebarOpen && <SidebarAdmin />}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          {/* Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="p-4 rounded-xl shadow text-white flex flex-col items-center gap-4"
                style={{
                  background: 'linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)',
                }}
              >
                <div className="flex flex-row justify-between w-full items-center gap-4">
                  <img src={card.icon} alt={card.label} className="w-10 h-10" />
                  <p className="text-sm md:text-base font-medium text-center">{card.label}</p>
                </div>
                <div>
                  <p className="font-bold text-lg md:text-xl">X</p>
                </div>
              </div>
            ))}
          </section>

          {/* Table */}
          <section className="rounded p-4 shadow text-white" style={{ background: '#0272BA' }}>
            <h2 className="font-bold text-base md:text-lg mb-3">DATA PENDUDUK</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-blue-900 rounded overflow-hidden text-sm md:text-base">
                <thead style={{ backgroundColor: '#FFFFFF80' }} className="text-white">
                  <tr>
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">NAMA</th>
                    <th className="p-2 border">NIK</th>
                    <th className="p-2 border">NKK</th>
                    <th className="p-2 border">TEMPAT/TGL LAHIR</th>
                    <th className="p-2 border">JENIS KELAMIN</th>
                    <th className="p-2 border">AGAMA</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((row) => (
                    <tr
                      key={row}
                      style={{
                        backgroundColor: row % 2 === 0 ? '#FFFFFF80' : '#95CFF4',
                      }}
                    >
                      <td className="p-2 border">ID{row}</td>
                      <td className="p-2 border">Nama {row}</td>
                      <td className="p-2 border">1234567890</td>
                      <td className="p-2 border">1234567890</td>
                      <td className="p-2 border">Malang, 01-01-2000</td>
                      <td className="p-2 border">Laki-laki</td>
                      <td className="p-2 border">Islam</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
