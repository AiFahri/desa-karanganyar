// src/components/SidebarAdmin.jsx
import React, { useState } from 'react';
import HomeIcon from '../../assets/Home/icons/HomeIcon.png';
import PengajuanIcon from '../../assets/Home/icons/PengajuanLayananIconn.png';
import PortalIcon from '../../assets/Home/icons/PortalBeritaIconn.png';
import PengumumanIcon from '../../assets/Home/icons/PengumumanIcon.png';

const SidebarAdmin = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const menuItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'Pengajuan', label: 'Pengajuan Layanan', icon: PengajuanIcon },
    { id: 'Portal', label: 'Portal Berita', icon: PortalIcon },
    { id: 'Pengumuman', label: 'Pengumuman', icon: PengumumanIcon },
  ];

  return (
    <aside
      className="w-64 text-white p-4 transition-all duration-300 font-semibold"
      style={{
        background: 'linear-gradient(270deg, #0272BA 0%, #95CFF4 92.37%)',
      }}
    >
      <nav className="flex flex-col gap-4 mt-10">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-3 text-left p-2 rounded transition-colors duration-200 ${
              activeTab === item.id ? 'bg-white text-[#0272BA]' : 'text-white hover:bg-white/10'
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-5 h-5"
              style={{
                filter:
                  activeTab === item.id
                    ? 'brightness(0) saturate(100%) invert(29%) sepia(84%) saturate(559%) hue-rotate(172deg) brightness(93%) contrast(88%)'
                    : '',
              }}
            />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
