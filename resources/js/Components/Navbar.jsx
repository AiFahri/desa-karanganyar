import React from "react";
import { Link, usePage } from "@inertiajs/react";

const ApplicationLogo = (props) => (
    <img {...props} viewBox="0 0 60 60" fill="none"></img>
);

const Navbar = () => {
    const { url } = usePage(); // Hook untuk mendapatkan URL saat ini

    // Fungsi untuk mengecek apakah link aktif
    const isActive = (path) => url === path;

    return (
        <nav className="bg-darkBlue shadow-md fixed top-0 z-50 min-w-[100vw]">
            <div className="container px-4 sm:px-6 lg:px-16 min-w-[100vw]">
                <div className="flex items-center justify-between h-auto">
                    {/* Bagian Kiri: Logo */}
                    <div className="flex flex-row justify-between py-2">
                        <Link
                            className="flex flex-row gap-x-3 items-center"
                            href="/"
                        >
                            <ApplicationLogo
                                src="/logo_karanganyar.png"
                                className="flex h-[60px] w-auto"
                            />
                            <div className="flex flex-col font-sans gap-0 text-white text-lg">
                                <div>PEMERINTAH DESA KARANGANYAR</div>
                                <div>KECAMATAN PONCOKUSUMO</div>
                            </div>
                        </Link>
                    </div>

                    {/* Bagian Kanan: Nav Links */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/"
                                className={`px-3 py-2 rounded-md text-sm font-medium group ${
                                    isActive("/")
                                        ? "text-white"
                                        : "text-white"
                                }`}
                            >
                                <div>Beranda</div>
                                <div
                                    className={`mx-auto mb-0 mt-1 w-0 border-b-[3px] rounded-full group-hover:border-white group-hover:w-full h-0 transition-all duration-300`}
                                ></div>
                            </Link>

                            <Link
                                href="/profildesa"
                                className={`px-3 py-2 rounded-md text-sm font-medium group ${
                                    isActive("/profildesa")
                                        ? "text-white"
                                        : "text-white"
                                }`}
                            >
                                <div>Profil Desa</div>
                                <div
                                    className={`mx-auto mb-0 mt-1 w-0 border-b-[3px] rounded-full group-hover:border-white group-hover:w-full h-0 transition-all duration-300`}
                                ></div>
                            </Link>

                            <Link
                                href="/layanan"
                                className={`px-3 py-2 rounded-md text-sm font-medium group ${
                                    isActive("/layanan")
                                        ? "text-white border-white"
                                        : "text-white"
                                }`}
                            >
                                <div>Layanan Masyarakat</div>
                                <div
                                    className={`mx-auto mb-0 mt-1 w-0 border-b-[3px] rounded-full group-hover:border-white group-hover:w-full h-0 transition-all duration-300`}
                                ></div>
                            </Link>

                            <Link
                                href={route("dashboard")} // Menggunakan helper route dari Ziggy
                                className={`px-3 py-2 rounded-md text-sm font-medium group ${
                                    route().current("dashboard")
                                        ? "text-white"
                                        : "text-white"
                                }`}
                            >
                                <div className="">Potensi Desa</div>
                                <div
                                    className={`mx-auto mb-0 mt-1 w-0 border-b-[3px] rounded-full group-hover:border-white group-hover:w-full h-0 transition-all duration-300`}
                                ></div>
                            </Link>

                            <Link
                                href={route("dashboard")} // Menggunakan helper route dari Ziggy
                                className={`px-3 py-2 rounded-md text-sm font-medium group ${
                                    route().current("")
                                        ? "text-white"
                                        : "text-white"
                                }`}
                            >
                                <div>Portal Berita</div>
                                <div
                                    className={`mx-auto mb-0 mt-1 w-0 border-b-[3px] rounded-full group-hover:border-white group-hover:w-full h-0 transition-all duration-300`}
                                ></div>
                            </Link>

                            <Link
                                href={route("dashboard")} // Menggunakan helper route dari Ziggy
                                className={`px-3 py-2 rounded-md text-sm font-medium `}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="45"
                                    height="45"
                                    viewBox="0 0 45 45"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.4999 2.47215e-10C25.4547 -1.38501e-05 28.3805 0.581954 31.1103 1.71268C33.8402 2.8434 36.3206 4.50073 38.4099 6.59004C40.4992 8.67936 42.1565 11.1597 43.2873 13.8896C44.418 16.6194 45 19.5452 45 22.4999C45 34.9264 34.9264 45 22.4999 45C10.0736 45 0 34.9264 0 22.4999C0 10.0736 10.0736 2.47215e-10 22.4999 2.47215e-10ZM24.75 24.75H20.25C14.6797 24.75 9.89739 28.1236 7.83474 32.9394C11.0984 37.5158 16.4507 40.5 22.4999 40.5C28.5492 40.5 33.9015 37.5158 37.1653 32.9391C35.1026 28.1236 30.3203 24.75 24.75 24.75ZM22.4999 6.74999C18.7721 6.74999 15.75 9.77209 15.75 13.5C15.75 17.2279 18.7721 20.25 22.4999 20.25C26.2278 20.25 29.2499 17.2279 29.2499 13.5C29.2499 9.77209 26.2279 6.74999 22.4999 6.74999Z"
                                        fill="#D9D9D9"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
