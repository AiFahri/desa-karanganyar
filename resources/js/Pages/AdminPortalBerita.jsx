import React, { useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';
import KirimIcon from '../../assets/Home/icons/KirimIcon.png';
import UploadGambarIcon from '../../assets/Home/icons/UploadGambarIcon.png';

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
          <div className="bg-white rounded-lg shadow border border-[#D9D9D9] px-12 py-10 max-w-[1400px] mx-auto">
            <h1 className="text-[40px] font-bold text-center mb-6">Upload Berita</h1>
            <div className="border-t border-black/40 w-full mb-10"></div>

            <form className="flex flex-wrap gap-10">
              {/* Kiri */}
              <div className="flex flex-col gap-6 w-[500px]">
                {/* Judul Pengumuman */}
                <div>
                  <label className="text-[18px] font-semibold mb-2 block">Judul Pengumuman</label>
                  <input
                    type="text"
                    placeholder="Masukkan judul pengumuman"
                    className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                  />
                </div>

                {/* Tanggal Pengumuman */}
                <div>
                  <label className="text-[18px] font-semibold mb-2 block">Tanggal Pengumuman</label>
                  <input
                    type="date"
                    className="w-[300px] h-[50px] px-4 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black"
                  />
                </div>

                {/* Deskripsi Pengumuman */}
                <div>
                  <label className="text-[18px] font-semibold mb-2 block">Deskripsi Pengumuman</label>
                  <textarea
                    rows="6"
                    placeholder="Berikan penjelasan atau deskripsi di sini"
                    className="w-full px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-[#9A9A9A]"
                  />
                </div>
              </div>

              {/* Kanan (Unggah Gambar) */}
              <div className="flex flex-col w-[400px]">
                <label className="text-[18px] font-semibold mb-2 block">Unggah Gambar</label>
                <div className="w-full h-[400px] border border-[#D9D9D9] bg-[#FDFCFC] rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={UploadGambarIcon}
                      alt="Upload Gambar"
                      className="w-12 h-12 mx-auto mb-4"
                    />
                    <p className="text-sm text-[#9A9A9A] font-semibold">
                      Klik atau drag untuk unggah gambar
                    </p>
                  </div>
                </div>
              </div>

              {/* Tombol Kirim */}
              <div className="w-full flex justify-end mt-6">
                <button
                  type="submit"
                  className="flex items-center gap-3 px-6 py-3 rounded-lg text-white font-semibold text-sm"
                  style={{
                    background: 'linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)',
                  }}
                >
                  Kirim
                  <img src={KirimIcon} alt="Kirim Icon" className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
