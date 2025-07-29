import React, { useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import popup from "../../assets/LayananMasyarakat/popup.png";

export default function SuccessPopup({ isVisible, onClose }) {
    // Close popup with Escape key
    useEffect(() => {
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

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gradient-to-b from-[#0272BA] to-[#95CFF4] rounded-3xl p-10 max-w-md w-11/12 text-center relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-5 text-white text-2xl hover:text-gray-200"
                >
                    ×
                </button>

                <img 
                    src={popup}
                    alt="Success Icon"
                    className="w-full h-full object-contain mb-4"
                />

                <div className="md:text-[50px] text-[16px] font-bold text-white mb-4">
                    Pengajuan Surat Berhasil!
                </div>

                <div className="text-white md:text-[36px] text-[12px] font-semibold leading-relaxed mb-8">
                    Terima kasih, pengajuan Surat Keterangan Anda telah
                    kami terima. Silakan cek status pengajuan secara
                    berkala di menu Layanan Masyarakat
                </div>

                <Link href="/layanan/status-surat">
                    <motion.div 
                        initial={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 98%)" }}
                        whileHover={{ background: "linear-gradient(180deg, #F0F0F0 0%, #F0F0F0 98%)" }}
                        className="text-sm md:text-[20px] rounded-[40px] font-semibold px-6 py-3 text-center bg-white text-[#0272BA] hover:bg-gray-100 transition-colors"
                    >
                        Lihat Status Surat
                    </motion.div>
                </Link>
            </div>
        </div>
    );
}


