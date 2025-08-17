import React, { useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';
import mailIcon from '../../assets/Home/icons/mailIcon.png';
import TotalPenggunaIcon from '../../assets/Home/icons/TotalPenggunaIcon.png';

const AdminDashboard = ({ stats, recentUsers }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const cardData = [
    { 
      label: 'Total Surat', 
      icon: mailIcon, 
      value: stats?.total_surat || 0,
      color: 'from-blue-500 to-blue-300'
    },
    { 
      label: 'Total Pengguna', 
      icon: TotalPenggunaIcon, 
      value: stats?.total_pengguna || 0,
      color: 'from-green-500 to-green-300'
    },
    { 
      label: 'Total Berita', 
      icon: TotalPenggunaIcon, 
      value: stats?.total_berita || 0,
      color: 'from-purple-500 to-purple-300'
    },
    { 
      label: 'Total Pengumuman', 
      icon: TotalPenggunaIcon, 
      value: stats?.total_pengumuman || 0,
      color: 'from-orange-500 to-orange-300'
    },
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
                  <p className="font-bold text-lg md:text-xl">{card.value}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Table */}
          <section className="rounded p-4 shadow text-white" style={{ background: '#0272BA' }}>
            <h2 className="font-bold text-base md:text-lg mb-3">PENGGUNA TERBARU</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-blue-900 rounded overflow-hidden text-sm md:text-base">
                <thead style={{ backgroundColor: '#FFFFFF80' }} className="text-white">
                  <tr>
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">NAMA</th>
                    <th className="p-2 border">EMAIL</th>
                    <th className="p-2 border">NIK</th>
                    <th className="p-2 border">NO HP</th>
                    <th className="p-2 border">TANGGAL DAFTAR</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers?.length > 0 ? (
                    recentUsers.map((user, index) => (
                      <tr
                        key={user.id}
                        style={{
                          backgroundColor: index % 2 === 0 ? '#FFFFFF80' : '#95CFF4',
                        }}
                      >
                        <td className="p-2 border text-center">{user.id}</td>
                        <td className="p-2 border">{user.name || '-'}</td>
                        <td className="p-2 border">{user.email}</td>
                        <td className="p-2 border">{user.nik || '-'}</td>
                        <td className="p-2 border">{user.no_hp || '-'}</td>
                        <td className="p-2 border text-center">
                          {new Date(user.created_at).toLocaleDateString('id-ID')}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="p-4 text-center text-white">
                        Belum ada pengguna terdaftar
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Additional Stats */}
          <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Statistik Cepat</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total UMKM:</span>
                  <span className="font-semibold">{stats?.total_umkm || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Surat Pending:</span>
                  <span className="font-semibold text-yellow-600">
                    {stats?.pending_surat || 0}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Surat Selesai:</span>
                  <span className="font-semibold text-green-600">
                    {stats?.completed_surat || 0}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Aktivitas Terbaru</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">
                    {stats?.total_berita || 0} berita dipublikasikan
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">
                    {stats?.total_pengumuman || 0} pengumuman aktif
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">
                    {stats?.total_pengguna || 0} pengguna terdaftar
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;


