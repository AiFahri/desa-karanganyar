// src/components/SidebarAdmin.jsx
import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import HomeIcon from '../../assets/Home/icons/HomeIcon.png';
import PengajuanIcon from '../../assets/Home/icons/PengajuanLayananIconn.png';
import PortalIcon from '../../assets/Home/icons/PortalBeritaIconn.png';
import PengumumanIcon from '../../assets/Home/icons/PengumumanIcon.png';
import UMKMIconn from '../../assets/Home/icons/UMKMIconn.png';

const SidebarAdmin = () => {
  const { url } = usePage();

  const menuItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: HomeIcon, route: '/admin/dashboard' },
    { id: 'Pengajuan', label: 'Pengajuan Layanan', icon: PengajuanIcon, route: '/admin/pengajuan-surat' },
    { id: 'Portal', label: 'Portal Berita', icon: PortalIcon, route: '/admin/berita' },
    { id: 'Pengumuman', label: 'Pengumuman', icon: PengumumanIcon, route: '/admin/pengumuman' },
    { id: 'StatistikWilayah', label: 'Statistik Wilayah', icon: HomeIcon, route: '/admin/statistik-wilayah' },
    { id: 'StatistikPenduduk', label: 'Statistik Penduduk', icon: HomeIcon, route: '/admin/statistik-penduduk' },
    { id: 'UMKM', label: 'Potensi UMKM', icon: UMKMIconn, route: '/admin/umkm' },
  ];

  return (
    <aside
      className="w-64 text-white p-4 transition-all -300 font-semibold"
      style={{
        background: 'linear-gradient(270deg, #0272BA 0%, #95CFF4 92.37%)',
      }}
    >
      <nav className="flex flex-col gap-4 mt-10">
        {menuItems.map((item) => {
          const isActive = url.startsWith(item.route);
          return (
            <Link href={item.route} key={item.id} className="w-full">
              <button
                className={`flex items-center gap-3 text-left p-2 w-full rounded transition-colors duration-200 ${
                  isActive ? 'bg-white text-[#0272BA]' : 'text-white hover:bg-white/10'
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-5 h-5"
                  style={{
                    filter: isActive
                      ? 'brightness(0) saturate(100%) invert(29%) sepia(84%) saturate(559%) hue-rotate(172deg) brightness(93%) contrast(88%)'
                      : '',
                  }}
                />
                {item.label}
              </button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SidebarAdmin;




