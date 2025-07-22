import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#EBE6E6] font-sans flex">
      {/* Sidebar */}
      <aside
        className="w-64 text-white p-4"
        style={{
          background: 'linear-gradient(270deg, #0272BA 0%, #95CFF4 92.37%)',
        }}
      >
        <h2 className="text-xl font-bold mb-6">☰</h2>
        <nav className="flex flex-col gap-4">
          <button className="text-left font-semibold bg-white/10 p-2 rounded">
            📝 Admin Dashboard
          </button>
          <button className="text-left p-2 rounded hover:bg-white/10">
            📝 Pengajuan Layanan
          </button>
          <button className="text-left p-2 rounded hover:bg-white/10">
            🌐 Portal Berita
          </button>
          <button className="text-left p-2 rounded hover:bg-white/10">
            📢 Pengumuman
          </button>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-[#FDFCFC] shadow">
          <img src="/logo_karanganyar.png" alt="Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold text-center flex-1 -ml-10">
            PEMERINTAH DESA KARANGANYAR
          </h1>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span>👤</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {/* Statistic Cards */}
          <section className="grid grid-cols-4 gap-4 mb-6">
            {["Total Surat", "Total Pengguna", "Lorem Ipsum", "Lorem Ipsum"].map(
              (label, index) => (
                <div
                  key={index}
                  className="p-4 rounded shadow text-white flex items-center gap-4"
                  style={{
                    background: 'linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)',
                  }}
                >
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-sm">{label}</p>
                    <p className="font-bold">X</p>
                  </div>
                </div>
              )
            )}
          </section>

          {/* Data Penduduk Table */}
          <section className="rounded p-4 shadow text-white" style={{ background: '#0272BA' }}>
            <h2 className="font-bold text-lg mb-3">DATA PENDUDUK</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-blue-100 text-blue-900 rounded overflow-hidden">
                <thead className="bg-blue-400 text-white">
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
                    <tr key={row} className={row % 2 === 0 ? 'bg-blue-200' : 'bg-blue-300'}>
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
