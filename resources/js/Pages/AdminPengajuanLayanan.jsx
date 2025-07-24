import React, { useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#EBE6E6] font-sans flex flex-col">
      {/* Navbar */}
      <NavbarAdmin toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        {/* Sidebar */}
        {sidebarOpen && <SidebarAdmin />}

        {/* Main Content */}
        <main className="flex-1 p-6">

          {/* Table */}
          <section className="rounded p-4 shadow text-white" style={{ background: '#0272BA' }}>
            <h2 className="font-bold text-lg mb-3">Pengajuan Layanan</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-blue-900 rounded overflow-hidden">
                <thead style={{ backgroundColor: '#FFFFFF80' }} className="text-white">
                  <tr>
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">NAMA</th>
                    <th className="p-2 border">NIK</th>
                    <th className="p-2 border">NKK</th>
                    <th className="p-2 border">TEMPAT/TGL LAHIR</th>
                    <th className="p-2 border">JENIS KELAMIN</th>
                    <th className="p-2 border">AGAMA</th>
                    <th className="p-2 border">ALAMAT</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4 ,5,6,7,8,9].map((row) => (
                    <tr
                      key={row}
                      style={{
                        backgroundColor: row % 2 === 0 ? '#FFFFFF80' : '#95CFF4',
                      }}
                    >
                      <td className="p-2 border">{row}</td>
                      <td className="p-2 border"></td>
                      <td className="p-2 border"></td>
                      <td className="p-2 border"></td>
                      <td className="p-2 border"></td>
                      <td className="p-2 border"></td>
                      <td className="p-2 border"></td>
                      <td className="p-2 border"></td>
                      
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
