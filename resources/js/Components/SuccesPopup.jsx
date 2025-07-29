import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import popupp from "../../assets/LayananMasyarakat/popup.png";

export default function SuccessPopup() {
    const [isVisible, setIsVisible] = useState(false);

    const showPopup = () => {
        setIsVisible(true);
        // Auto close after 5 seconds (optional)
        setTimeout(() => {
            setIsVisible(false);
        }, 5000);
    };

    const hidePopup = () => {
        setIsVisible(false);
    };

    const checkStatus = () => {
        alert("Redirect ke halaman status pengajuan surat...");
        hidePopup();
    };

    // Close popup with Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                hidePopup();
            }
        };

        if (isVisible) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isVisible]);

    const ConfettiPiece = ({ delay, color, left }) => (
        <div
            className={`absolute w-2 h-2 rounded-full ${color} animate-bounce`}
            style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: "3s",
                animationIterationCount: "infinite",
                transform: "translateY(-100px)",
            }}
        />
    );

    const Sparkle = ({ top, left, right, bottom, delay }) => (
        <div
            className="absolute text-white text-lg animate-pulse"
            style={{
                top,
                left,
                right,
                bottom,
                animationDelay: `${delay}s`,
                animationDuration: "2s",
                animationIterationCount: "infinite",
            }}
        >
            ✨
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
            {/* Demo Button */}
            {/* <button
                onClick={showPopup}
                className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transform hover:-translate-y-1 transition-all duration-200 shadow-lg mb-5"
            >
                Tampilkan Pop-up
            </button> */}

            {/* Overlay */}
            {isVisible && (
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300 ${
                        isVisible
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    }`}
                    onClick={(e) => e.target === e.currentTarget && hidePopup()}
                >
                    {/* Popup */}
                    <div
                        className={`bg-gradient-to-b from-[#0272BA] to-[#95CFF4] rounded-3xl p-10 max-w-md w-11/12 text-center relative transform transition-all duration-300 shadow-2xl ${
                            isVisible
                                ? "scale-100 translate-y-0"
                                : "scale-75 translate-y-12"
                        }`}
                    >
                        {/* Confetti Elements */}
                        <ConfettiPiece delay={0} color="bg-red-400" left={10} />
                        <ConfettiPiece
                            delay={0.5}
                            color="bg-teal-400"
                            left={20}
                        />
                        <ConfettiPiece
                            delay={1}
                            color="bg-blue-400"
                            left={30}
                        />
                        <ConfettiPiece
                            delay={1.5}
                            color="bg-yellow-400"
                            left={40}
                        />
                        <ConfettiPiece
                            delay={2}
                            color="bg-purple-400"
                            left={50}
                        />
                        <ConfettiPiece
                            delay={0.3}
                            color="bg-purple-300"
                            left={60}
                        />
                        <ConfettiPiece
                            delay={0.8}
                            color="bg-pink-400"
                            left={70}
                        />
                        <ConfettiPiece
                            delay={1.3}
                            color="bg-yellow-300"
                            left={80}
                        />
                        <ConfettiPiece
                            delay={1.8}
                            color="bg-red-500"
                            left={90}
                        />

                        {/* Sparkle Elements */}
                        <Sparkle top="20px" left="30px" delay={0} />
                        <Sparkle top="40px" right="40px" delay={0.7} />
                        <Sparkle bottom="80px" left="20px" delay={1.4} />
                        <Sparkle bottom="60px" right="30px" delay={2.1} />

                        {/* Close Button */}
                        <button
                            onClick={hidePopup}
                            className="absolute top-4 right-5 text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
                        >
                            ×
                        </button>

                        <img
                            src={popupp}
                            alt="Success Icon"
                            className="w-full h-full object-contain"
                        />

                        {/* Title */}
                        <div className="md:text-[50px] text-[16px] font-bold text-white mb-4 drop-shadow-md">
                            Pengajuan Surat Berhasil!
                        </div>

                        {/* Message */}
                        <div className="text-white md:text-[36px] text-[12px] font-semibold leading-relaxed mb-8 drop-shadow-sm">
                            Terima kasih, pengajuan Surat Keterangan Anda telah
                            kami terima. Silakan cek status pengajuan secara
                            berkala di menu Layanan Masyarakat
                        </div>

                        {/* Status Button */}
                        <Link href="/layanan/status-surat">
                            <motion.div
                                initial={{
                                    background:
                                        "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
                                }}
                                whileHover={{
                                    background:
                                        "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
                                }}
                                transition={{
                                    duration: 0.3,
                                    easing: "easeIn",
                                }}
                                className="text-sm md:text-[20px] text-[12px] rounded-[40px] font-semibold px-6 py-3 md:px-[40px] md:py-[24px] text-center w-full sm:w-auto text-white"
                            >
                                Lihat Status Surat
                            </motion.div>
                        </Link>
                    </div>
                </div>
            )}

            {/* Custom Styles for Advanced Animations */}
            <style jsx>{`
                @keyframes confetti-fall {
                    0% {
                        transform: translateY(-100px) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(300px) rotate(720deg);
                        opacity: 0;
                    }
                }

                @keyframes wave {
                    0%,
                    100% {
                        transform: rotate(0deg);
                    }
                    25% {
                        transform: rotate(-10deg);
                    }
                    75% {
                        transform: rotate(10deg);
                    }
                }

                .confetti-fall {
                    animation: confetti-fall 3s ease-in-out infinite;
                }

                .wave-animation {
                    animation: wave 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
