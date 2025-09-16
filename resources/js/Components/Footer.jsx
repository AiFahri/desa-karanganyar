import React from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Youtube,
} from "lucide-react";

const ApplicationLogo = (props) => (
    <img {...props} viewBox="0 0 104 104" fill="none"></img>
);

const Footer = () => {
    return (
        <footer
            className="text-white py-10 px-4"
            style={{
                background: "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
            }}
        >
            <div className="max-w-full">
                
                <div className="grid grid-cols-1 md:grid-cols-4 ">
                    
                    <div className="flex justify-center mb-4">
                        <ApplicationLogo
                            src="/logo_karanganyar.png"
                            className="flex h-[104px] w-auto"
                        />

                        <div className="text-sm opacity-90 font-bold leading-relaxed">
                            Website Resmi Pemerintahan
                            <br />
                            Desa Karanganyar, Kabupaten
                            <br />
                            Ponokusumo
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-6">
                            Alamat Desa
                        </h3>

                        
                        <div className="flex items-start justify-center mb-6 text-sm opacity-90">
                            <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-left">
                                Jl. Raya Karang Anyar No.6, Lor Kali,
                                <br />
                                Karanganyar Kec. Ponconusumo,
                                <br />
                                Kabupaten Malang, Jawa Timur 65157
                            </span>
                        </div>
                    </div>

                    
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-6">
                            Layanan Masyarakat
                        </h3>

                        
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
                            <li className="relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-white rounded-full"></span>
                                Surat Umum
                            </li>
                        </ul>
                    </div>

                    
                    <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-6">
                            Kontak yang dapat dihubungi
                        </h3>

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

                <div className="border-t-2 border-white/20 mt-6 pt-6 text-center mx-[5vw]">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-0 text-sm opacity-80 px-4 sm:px-8">
                    
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <a
                                href="https://facebook.com/groups/401277673330593/"
                                target="_blank"
                                className="shadow-md w-10 h-10 bg-white/100 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Facebook className="w-5 h-5 stroke-black" />
                            </a>
                            <a
                                href="https://www.instagram.com/seputar_desakaranganyar/"
                                target="_blank"
                                className="shadow-md w-10 h-10 bg-white/100 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5 stroke-black" />
                            </a>
                        </div>

                        <a
                                href="https://www.instagram.com/mmd_filkom_42/"
                                target="_blank"
                                className="hover:underline hover:-translate-y-1 transition-all duration-300"
                            >
                            
                        <div className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-5">
                            <img src="/logo_only_white.svg" className="w-20" />
                            <div className="flex flex-col items-center sm:items-start justify-center h-20">
                                <div className="text-base md:text-lg font-sans text-center sm:text-left">
                                    Dibuat oleh{" "}
                                    <span className="font-bold">
                                        Mahasiswa Membangun Desa
                                    </span>
                                </div>
                                <div className="text-base md:text-lg font-sans text-center sm:text-left font-bold">
                                    MMD 42 FILKOM UB
                                </div>
                            </div>
                        </div>
                        </a>

                        
                        <div className="font-bold font-sans text-base md:text-lg text-center sm:text-right">
                            2025. Desa Karanganyar, Poncokusumo.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
