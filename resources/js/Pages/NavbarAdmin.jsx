// src/components/NavbarAdmin.jsx
import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import PhotoProfileIcon from '../../assets/Home/icons/PhotoProfileIcon.png';

const NavbarAdmin = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { props } = usePage();
  const user = props.auth.user;

  return (
    <header className="flex items-center bg-[#FDFCFC] shadow h-16 w-full">
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

      <div className="flex items-center justify-center flex-1 gap-4">
        <img src="/logo_karanganyar.png" alt="Logo" className="h-10 w-auto" />
        <div className="text-center text-sm leading-tight font-semibold text-black">
          <p>PEMERINTAH DESA KARANGANYAR</p>
          <p>KABUPATEN PONCOKUSUMO</p>
        </div>
      </div>

      <div className="relative mr-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <img src={PhotoProfileIcon} alt="Profile" className="w-full h-full object-cover" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            <div className="px-4 py-2 text-sm text-gray-700 border-b">
              <p className="font-medium">{user?.name}</p>
              <p className="text-gray-500">{user?.email}</p>
            </div>
            <Link
              href={route("profile.edit")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              Edit Profile
            </Link>
            <Link
              href={route("logout")}
              method="post"
              as="button"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              Logout
            </Link>
          </div>
        )}
      </div>

      {dropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setDropdownOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default NavbarAdmin;

