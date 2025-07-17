import React from 'react'
import { Link, usePage } from '@inertiajs/react';


const ApplicationLogo = (props) => (
    <img {...props} viewBox="0 0 60 60" fill="none"></img>
);

const Navbar = () => {
    const { url } = usePage(); // Hook untuk mendapatkan URL saat ini

    // Fungsi untuk mengecek apakah link aktif
    const isActive = (path) => url === path;

    return (
        <nav className="bg-darkBlue shadow-md sticky top-0">
            <div className="container px-4 sm:px-6 lg:px-16">
                <div className="flex items-center justify-between h-auto">
                    {/* Bagian Kiri: Logo */}
                    <div className="flex flex-row justify-between py-2">
                        <Link className='flex flex-row gap-x-3 items-center' href="/">
                            <ApplicationLogo src="/logo_karanganyar.png" className="flex h-[60px] w-auto" />
                            <div className='flex flex-col font-sans gap-0 text-white text-lg'>
                              <div>PEMERINTAH DESA KARANGANYAR</div>
                              <div>KECAMATAN PONCOKUSUMO</div>
                            </div>
                        </Link>
                    </div>

                    {/* Bagian Kanan: Nav Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                href="/"
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    isActive('/') 
                                        ? 'text-white bg-blue-600' 
                                        : 'text-gray-700 hover:bg-gray-200 hover:text-black'
                                }`}
                            >
                                Beranda
                            </Link>

                            <Link
                                href="/profildesa"
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    isActive('/profildesa') 
                                        ? 'text-white bg-blue-600' 
                                        : 'text-gray-700 hover:bg-gray-200 hover:text-black'
                                }`}
                            >
                                Profil Desa
                            </Link>

                            <Link
                                href="/layananmasyarakat"
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    isActive('/layananmasyarakat') 
                                        ? 'text-white bg-blue-600' 
                                        : 'text-gray-700 hover:bg-gray-200 hover:text-black'
                                }`}
                            >
                                Layanan Masyarakat
                            </Link>

                            <Link
                                href={route('dashboard')} // Menggunakan helper route dari Ziggy
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    route().current('dashboard') 
                                        ? 'text-white bg-blue-600' 
                                        : 'text-gray-700 hover:bg-gray-200 hover:text-black'
                                }`}
                            >
                                Potensi Desa
                            </Link>

                            <Link
                                href={route('dashboard')} // Menggunakan helper route dari Ziggy
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    route().current('dashboard') 
                                        ? 'text-white bg-blue-600' 
                                        : 'text-gray-700 hover:bg-gray-200 hover:text-black'
                                }`}
                            >
                                Portal Berita
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar