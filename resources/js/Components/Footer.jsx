import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const ApplicationLogo = (props) => (
    <img {...props} viewBox="0 0 104 104" fill="none"></img>
);

const Footer = () => {
    return (
        <footer 
            className="text-white py-10 px-4"
            style={{
                background: 'linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)'
            }}
        >
            <div className="max-w-full">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 ">
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                        <ApplicationLogo src="/logo_karanganyar.png" className="flex h-[104px] w-auto" />


                        <div className="text-sm opacity-90 leading-relaxed">
                        Website Resmi Pemerintahan<br />
                        Desa Karanganyar, Kabupaten<br />
                        Ponokusumo
                        </div>
                     </div>
                    {/* Alamat Desa Section */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-6">Alamat Desa</h3>
                        
                        {/* Alamat */}
                        <div className="flex items-start justify-center mb-6 text-sm opacity-90">
                            <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-left">
                                Jl. Raya Karang Anyar No.6, Lor Kali,<br />
                                Karanganyar Kec. Ponconusumo,<br />
                                Kabupaten Malang, Jawa Timur 65157
                            </span>
                        </div>
                    </div>

                    {/* Layanan Masyarakat Section */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-6">Layanan Masyarakat</h3>
                        

                        
                        {/* Services List */}
                        <ul className="text-sm opacity-90 space-y-2 text-left inline-block">
                            <li className="relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-white rounded-full"></span>
                                Surat Keterangan Domisili
                            </li>
                            <li className="relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-white rounded-full"></span>
                                Surat Keterangan Usaha
                            </li>
                            <li className="relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-white rounded-full"></span>
                                Surat Kelahiran, Surat Kematian
                            </li>
                            <li className="relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-white rounded-full"></span>
                                Surat SKCK
                            </li>
                            <li className="relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-white rounded-full"></span>
                                Surat SKCN
                            </li>
                            <li className="relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-white rounded-full"></span>
                                Surat Keterangan Penghasilan
                            </li>
                            <li className="relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-white rounded-full"></span>
                                Surat Keterangan Kerja
                            </li>
                            <li className="relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-white rounded-full"></span>
                                Surat Keterangan Belum Menikah
                            </li>
                            <li className="relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-white rounded-full"></span>
                                Surat Berpergian
                            </li>
                        </ul>
                    </div>

                    {/* Kontak Section */}
                    <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-6">Kontak yang dapat dihubungi</h3>

                    <div className="space-y-4 text-sm opacity-90">
                        <div className="flex items-center md:items-start justify-center md:justify-start">
                        <Phone className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                        <span>082331386980</span>
                        </div>

                        <div className="flex items-center md:items-start justify-center md:justify-start">
                        <Mail className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                        <span>dkaranganyar01@gmail.com</span>
                        </div>
                    </div>
                    </div>


                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 my-[18px]">
                    <a 
                        href="#" 
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                        href="#" 
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                        href="#" 
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Youtube className="w-5 h-5" />
                    </a>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/20 pt-6 text-center">
                    <div className="text-sm opacity-80 mb-3">
                        Copyright ©2024 Pemerintah Desa Karanganyar. All rights reserved
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm opacity-80">
                        <Link 
                            href="#" 
                            className="hover:opacity-100 transition-opacity duration-300"
                        >
                            Privacy Policy
                        </Link>
                        <Link 
                            href="#" 
                            className="hover:opacity-100 transition-opacity duration-300"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;