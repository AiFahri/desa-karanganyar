import React, { useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import popup from "../../assets/LayananMasyarakat/popup.png";

export default function SuccessPopup({ isVisible, onClose }) {
    console.log('SuccessPopup render - isVisible:', isVisible);
    
    useEffect(() => {
        console.log('SuccessPopup useEffect - isVisible:', isVisible);
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isVisible) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isVisible, onClose]);

    if (!isVisible) {
        console.log('SuccessPopup not visible, returning null');
        return null;
    }

    console.log('SuccessPopup rendering modal');
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gradient-to-b from-[#0272BA] to-[#95CFF4] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 lg:max-h-[75vh] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl w-11/12 text-center relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-5 text-white text-2xl hover:text-gray-200"
                >
                    ×
                </button>

                <img 
                    src={popup}
                    alt="Success Icon"
                    className="w-full h-auto lg:max-h-52 object-contain mb-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
                />

                <div className="text-[16px] sm:text-[20px] md:text-[32px] lg:text-[40px] xl:text-[30px] font-bold text-white mb-4">
                    Pengajuan Surat Berhasil!
                </div>

                <div className="text-white text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[12px] font-semibold leading-relaxed mb-6 sm:mb-8">
                    Terima kasih, pengajuan Surat Keterangan Anda telah
                    kami terima. Silakan cek status pengajuan secara
                    berkala di menu Layanan Masyarakat
                </div>

                <Link href="/layanan/status-surat">
                    <motion.div 
                        initial={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 98%)" }}
                        whileHover={{ background: "linear-gradient(180deg, #F0F0F0 0%, #F0F0F0 98%)" }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] rounded-[40px] font-semibold px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-6 lg:py-3 text-center bg-white text-[#0272BA] hover:bg-gray-100 transition-colors inline-block"
                    >
                        Lihat Status Surat
                    </motion.div>
                </Link>
            </div>
        </div>
    );
}




