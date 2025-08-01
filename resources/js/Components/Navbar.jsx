import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import Dropdown from "./Dropdown";

// Component for the brand logo
// Note: Removed `viewBox` prop as it's not a valid attribute for <img>
const ApplicationLogo = (props) => (
    <img {...props} alt="Logo Desa Karanganyar" />
);

// Reusable NavLink component to keep the Navbar clean (DRY principle)
const NavLink = ({ href, children }) => {
    const { url } = usePage();
    const isActive = url === href;

    return (
        <Link
            href={href}
            // The `group` class allows the underline to react to the parent Link's hover state
            className="block px-3 py-2 text-white font-medium text-center group md:text-left"
        >
            {children}
            {/* Animated underline effect */}
            <div
                className={`mx-auto mt-1 h-[3px] rounded-full bg-white transition-all duration-300 
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
            />
        </Link>
    );
};


// Main Navbar Component
const Navbar = () => {
    const { props } = usePage();
    const user = props.auth.user;

    // State to manage the mobile menu's open/closed status
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-darkBlue shadow-md fixed top-0 z-50 w-full max-w-[100vw]">
            <div className="mx-0 px-4 sm:px-6 lg:px-16 w-full">
                <div className="flex items-center justify-between h-[76px]"> {/* Standard height */}
                    
                    {/* Logo and Brand Name */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-x-3">
                            <ApplicationLogo
                                src="/logo_karanganyar.png"
                                className="h-12 w-auto" // Slightly smaller for better balance
                            />
                            {/* Text size is now responsive */}
                            <div className="flex-col font-sans text-white text-sm lg:text-lg">
                                <span className="flex max-w-[60%] md:max-w-full">PEMERINTAH DESA KARANGANYAR</span>
                                <span className="hidden sm:flex">KECAMATAN PONCOKUSUMO</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links & Auth */}
                    <div className="hidden md:flex items-center space-x-5">
                        <NavLink href="/">Beranda</NavLink>
                        <NavLink href="/profil">Profil Desa</NavLink>
                        <NavLink href="/layanan">Layanan</NavLink>
                        <NavLink href="/portal">Portal Berita</NavLink>
                        
                        {/* Auth Buttons / User Dropdown */}
                        {user ? (
                            <Dropdown>
                                <Dropdown.Trigger>
                                        <button className="px-3 py-2 rounded-md text-sm font-medium">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="45"
                                                height="45"
                                                viewBox="0 0 45 45"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M22.4999 2.47215e-10C25.4547 -1.38501e-05 28.3805 0.581954 31.1103 1.71268C33.8402 2.8434 36.3206 4.50073 38.4099 6.59004C40.4992 8.67936 42.1565 11.1597 43.2873 13.8896C44.418 16.6194 45 19.5452 45 22.4999C45 34.9264 34.9264 45 22.4999 45C10.0736 45 0 34.9264 0 22.4999C0 10.0736 10.0736 2.47215e-10 22.4999 2.47215e-10ZM24.75 24.75H20.25C14.6797 24.75 9.89739 28.1236 7.83474 32.9394C11.0984 37.5158 16.4507 40.5 22.4999 40.5C28.5492 40.5 33.9015 37.5158 37.1653 32.9391C35.1026 28.1236 30.3203 24.75 24.75 24.75ZM22.4999 6.74999C18.7721 6.74999 15.75 9.77209 15.75 13.5C15.75 17.2279 18.7721 20.25 22.4999 20.25C26.2278 20.25 29.2499 17.2279 29.2499 13.5C29.2499 9.77209 26.2279 6.74999 22.4999 6.74999Z"
                                                    fill="#D9D9D9"
                                                />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Edit Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href="/riwayat-pengajuan"
                                        >
                                            Riwayat Pengajuan
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Logout
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                            </Dropdown>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link href={route("login")} className="px-8 py-2 text-lg font-semibold text-white border border-white rounded-md hover:bg-white hover:text-[#0272BA] transition-colors duration-200">
                                    Masuk
                                </Link>
                                <Link href={route("register.page")} className="px-8 py-2 text-lg font-semibold text-darkBlue bg-white rounded-md hover:bg-white hover:text-[#0272ba] transition-colors duration-200">
                                    Daftar
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Hamburger Menu Button (visible on mobile) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon: changes between hamburger and 'X' */}
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (collapsible) */}
            {isMenuOpen && (
                <div className="md:hidden bg-darkBlue pb-4">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink href="/">Beranda</NavLink>
                        <NavLink href="/profil">Profil Desa</NavLink>
                        <NavLink href="/layanan">Layanan</NavLink>
                        <NavLink href="/portal">Portal Berita</NavLink>

                        {/* Auth buttons for mobile */}
                        <div className="border-t border-gray-600 my-4"></div>
                        {user ? (
                           <div className="px-2 space-y-2">
                             <Link href={route("profile.edit")} className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">
                                Profile
                             </Link>
                             <Link href={route("logout")} method="post" as="button" className="block w-full text-left px-3 py-2 text-white hover:bg-gray-700 rounded-md">
                                Log Out
                             </Link>
                           </div>
                        ) : (
                            <div className="flex items-center justify-center gap-x-4 pt-4">
                                <Link href={route("login")} className="px-6 py-2 text-sm font-medium text-white border border-white rounded-md hover:bg-white hover:text-[#0272BA] transition-colors duration-200">
                                    Masuk
                                </Link>
                                <Link href={route("register.page")} className="px-6 py-2 text-sm font-medium bg-white rounded-md hover:bg-white hover:text-[#0272ba] transition-colors duration-200">
                                    Daftar
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>

    );
};

export default Navbar;



