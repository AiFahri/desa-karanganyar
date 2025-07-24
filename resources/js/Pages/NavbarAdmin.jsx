// src/components/NavbarAdmin.jsx
import React from 'react';
import PhotoProfileIcon from '../../assets/Home/icons/PhotoProfileIcon.png'; // ganti nama agar sesuai fungsinya

const NavbarAdmin = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center bg-[#FDFCFC] shadow h-16 w-full">
      {/* Sidebar Toggle Button */}
      <div
        className="h-full flex items-center px-4"
        style={{
          background: 'linear-gradient(180deg, #0272BA 0%, #95CFF4 100%)',
        }}
      >
        <button onClick={toggleSidebar} className="text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Logo & Title */}
      <div className="flex items-center justify-center flex-1 gap-4">
        <img src="/logo_karanganyar.png" alt="Logo" className="h-10 w-auto" />
        <div className="text-center text-sm leading-tight font-semibold text-black">
          <p>PEMERINTAH DESA KARANGANYAR</p>
          <p>KABUPATEN PONCOKUSUMO</p>
        </div>
      </div>

      {/* Avatar Icon */}
      <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
        <img src={PhotoProfileIcon} alt="Profile" className="w-full h-full object-cover" />
      </div>
    </header>
  );
};

export default NavbarAdmin;
