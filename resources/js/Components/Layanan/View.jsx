import React from "react";
import { motion } from "framer-motion";
import { Link, usePage } from "@inertiajs/react";
import BuatSurat from "./BuatSurat";
import col from "./../../../assets/LayananMasyarakat/Col.png";
import layanan1 from "./../../../assets/LayananMasyarakat/Layanan1.png";
import albums from "./../../../assets/LayananMasyarakat/albums.svg";
import Animation from "../Animation";

const View = () => {
    const { auth } = usePage().props;

    return (
        <>
            <Animation delay={0.2}>
                <section className="min-h-screen w-full bg-white flex items-center pt-[76px] overflow-hidden">
                    {/* Blur dekoratif kini hanya muncul di layar besar */}
                    <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 left-[90%] hidden lg:block"></div>
                    <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 top-[100%] hidden lg:block"></div>

                    <div className="container mx-auto px-4 sm:px-6">
                        {" "}
                        {/* Menambahkan padding horizontal untuk mobile */}
                        <div className="flex justify-center items-center min-h-auto md:pt-[70px] pt-[33px] ">
                            <Link className="" href="/layanan">
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
                                    // Ukuran font dan padding dibuat responsif
                                    className="text-xl md:text-[50px] text-[16px] rounded-full font-bold px-8 sm:px-12 lg:px-[80px] py-3 sm:py-4 lg:py-[30px] text-center max-w-fit text-white font-sans opacity-100 transition-all duration-500"
                                >
                                    Layanan Masyarakat
                                </motion.div>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-[92px] items-center">
                            {/* Teks */}
                            <div className="order-2 md:order-1 flex flex-col justify-center">
                                {/* Ukuran font dibuat responsif */}
                                <h1
                                    className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0272BA] mb-4 md:mb-6 text-left md:text-left"
                                    style={{
                                        textShadow:
                                            "0px 0px 4px rgba(0, 0, 0, 0.25)",
                                    }}
                                >
                                    Selamat datang di Layanan Masyarakat Website
                                    Desa Karanganyar!
                                </h1>
                                {/* Ukuran font dibuat responsif */}
                                <p className="text-base md:text-lg lg:text-[24px] text-black mb-6 text-justify md:text-left">
                                    Kami hadir untuk mempermudah setiap langkah
                                    Anda dalam pengajuan dan pembuatan surat
                                    yang dibutuhkan. Melalui layanan ini, kami
                                    menyediakan fitur Pembuatan Surat untuk
                                    memudahkan administrasi seluruh warga Desa
                                    Karanganyar.
                                </p>
                            </div>

                            {/* Gambar */}
                            <div className="order-1 md:order-2 relative flex justify-center items-center w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] aspect-square mx-auto">
                                {/* Gambar animasi mengelilingi */}
                                <motion.img
                                    initial={{ scale: 1 }}
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 36,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    src={col}
                                    alt="Dekorasi layanan"
                                    className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none"
                                />

                                {/* Gambar utama */}
                                <img
                                    src={layanan1}
                                    alt="Gambar layanan"
                                    className="relative z-10 w-[70%] h-auto object-contain"
                                />
                            </div>
                        </div>
                        <div className="max-w-full mx-auto my-16 md:my-[83px]">
                            {/* Layout diubah menjadi grid agar responsif */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-[52px]">
                                {/* Card 1 - Cepat */}
                                {/* Lebar w-[395px] dihapus agar mengikuti grid */}
                                <div className="bg-transparent rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-2 flex flex-row lg:flex-col items-center gap-4 sm:gap-6">
                                    {/* Ikon */}
                                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                                        <img
                                            src={albums}
                                            alt="Speed Icon"
                                            className="w-6 h-6 sm:w-10 sm:h-10 items-center"
                                        />
                                    </div>

                                    {/* Teks */}
                                    <div className="flex flex-col justify-center flex-grow lg:items-center">
                                        <h3 className="text-lg sm:text-2xl font-semibold text-black mb-1 sm:mb-2">
                                            Cepat
                                        </h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed text-justify">
                                            Proses pengajuan surat menjadi lebih
                                            singkat tanpa perlu antre di kantor
                                            desa. Semua bisa Anda lakukan secara
                                            online, kapan saja sesuai kebutuhan.
                                        </p>
                                    </div>
                                </div>
                                {/* Card 2 - Mudah */}
                                <div className="bg-transparent rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-2 flex flex-row lg:flex-col items-center gap-4 sm:gap-6">
                                    {/* Ikon */}
                                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#EAB308] flex items-center justify-center flex-shrink-0">
                                        <img
                                            src={albums}
                                            alt="Speed Icon"
                                            className="w-6 h-6 sm:w-10 sm:h-10 items-center"
                                        />
                                    </div>

                                    {/* Teks */}
                                    <div className="flex flex-col justify-center flex-grow lg:items-center">
                                        <h3 className="text-lg sm:text-2xl font-semibold text-black mb-1 sm:mb-2">
                                            Mudah
                                        </h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed text-justify">
                                            Formulir dan alur pengajuan
                                            dirancang sederhana dan ramah
                                            pengguna, sehingga siapa pun dapat
                                            mengurus surat dengan mudah, bahkan
                                            bagi yang baru pertama kali mencoba.
                                        </p>
                                    </div>
                                </div>
                                {/* Card 3 - Hemat Waktu */}
                                <div className="bg-transparent rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-2 flex flex-row lg:flex-col items-center gap-4 sm:gap-6">
                                    {/* Ikon */}
                                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                                        <img
                                            src={albums}
                                            alt="Speed Icon"
                                            className="w-6 h-6 sm:w-10 sm:h-10 items-center"
                                        />
                                    </div>

                                    {/* Teks */}
                                    <div className="flex flex-col justify-center flex-grow lg:items-center">
                                        <h3 className="text-lg sm:text-2xl font-semibold text-black mb-1 sm:mb-2">
                                            Hemat Waktu
                                        </h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed text-justify">
                                            Tanpa perlu datang langsung ke
                                            kantor desa, Anda dapat mengajukan
                                            surat hanya dalam beberapa langkah.
                                            Waktu Anda pun dapat dimanfaatkan
                                            untuk kegiatan lain yang lebih
                                            penting.
                                        </p>
                                    </div>
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                </section>
            </Animation>
            <Animation delay={0.2}>
                <section className="min-h-screen w-full bg-white flex items-center py-8">
                    {/* Blur dekoratif disembunyikan di mobile untuk performa lebih baik */}
                    <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] flex-shrink-0 top-[110%] hidden md:block"></div>

                    <div className="container mx-auto px-4 sm:px-6">
                        {" "}
                        {/* Tambah padding horizontal untuk mobile */}
                        <div className="flex justify-center items-center min-h-auto my-6 md:my-[32px]">
                            <h1 className="text-2xl md:text-[24px] font-bold text-[#0272BA]">
                                Pembuatan Surat
                            </h1>
                        </div>
                        <div className="w-full h-[1px] bg-[#0272BA]/40"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-[94px] items-start mt-8 md:mt-[44px]">
                            {/* Teks Kiri */}
                            <div className="order-1 md:order-1 flex flex-col justify-start relative w-full">
                                <div className="absolute inset-0 w-full h-auto rounded-full bg-blue-200 blur-[75px] z-0"></div>
                                <h1
                                    className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0272BA] relative z-10 text-center md:text-left"
                                    style={{
                                        textShadow:
                                            "0px 0px 4px rgba(0, 0, 0, 0.25)",
                                    }}
                                >
                                    Pembuatan Surat Desa Karanganyar
                                </h1>
                            </div>

                            {/* Teks Kanan */}
                            <div className="order-1 md:order-2 flex flex-col justify-center items-center md:items-start relative max-w-[770px] h-auto">
                                <p className="text-base md:text-lg lg:text-[24px] font-semibold text-black text-justify md:text-left">
                                    Selamat datang di bagian Pembuatan Surat
                                    Website Desa Karanganyar!
                                    <br />
                                    <br />
                                    Kami hadir untuk mempermudah setiap langkah
                                    Anda dalam mengurus dan membuat surat yang
                                    diperlukan. Di sini, kami menyediakan
                                    berbagai layanan pembuatan surat yang
                                    dirancang untuk memenuhi kebutuhan
                                    administrasi seluruh warga Desa Karanganyar.
                                </p>
                                {/* Kontainer untuk kedua tombol agar mudah diatur */}
                                <div className="flex flex-col sm:flex-col items-center gap-4 mt-6 md:mt-[36px]">
                                    <Link
                                        href={
                                            auth.user
                                                ? "/layanan/buat-surat"
                                                : "/login?redirect=/layanan/buat-surat"
                                        }
                                    >
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
                                            className="text-sm md:text-[20px] rounded-[40px] font-semibold px-6 py-3 md:px-[40px] md:py-[24px] text-center w-full sm:w-auto text-white"
                                        >
                                            {auth.user
                                                ? "Klik di sini untuk membuat surat"
                                                : "Login dulu untuk membuat surat"}
                                        </motion.div>
                                    </Link>
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
                                            className="text-sm md:text-[20px] rounded-[40px] font-semibold px-6 py-3 md:px-[40px] md:py-[24px] text-center w-full sm:w-auto text-white"
                                        >
                                            Klik di sini untuk cek status surat
                                        </motion.div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-8 lg:gap-[91px] pt-12 md:pt-[56px]">
                            <div className="space-y-4 md:space-y-6">
                                <p className="text-base md:text-lg lg:text-[24px] font-semibold text-black">
                                    1. Surat Keterangan Domisili
                                </p>
                                <p className="text-base md:text-lg lg:text-[24px] font-semibold text-black">
                                    2. Surat Keterangan Usaha
                                </p>
                                <p className="text-base md:text-lg lg:text-[24px] font-semibold text-black">
                                    3. Surat Berpergian
                                </p>
                            </div>

                            <div className="space-y-4 md:space-y-6">
                                <p className="text-base md:text-lg lg:text-[24px] font-semibold text-black">
                                    4. SKCK
                                </p>
                                <p className="text-base md:text-lg lg:text-[24px] font-semibold text-black">
                                    5. SKCN
                                </p>
                                <p className="text-base md:text-lg lg:text-[24px] font-semibold text-black">
                                    6. Surat Keterangan Kerja
                                </p>
                            </div>
                            <div className="space-y-4 md:space-y-6">
                                <p className="text-base md:text-lg lg:text-[24px] font-semibold text-black">
                                    7. Surat Keterangan Penghasilan
                                </p>
                                <p className="text-base md:text-lg lg:text-[24px] font-semibold text-black">
                                    8. Surat Keterangan Belum Menikah
                                </p>
                                <p className="text-base md:text-lg lg:text-[24px] font-semibold text-black">
                                    9. Surat Kelahiran, Surat Kematian
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Animation>
        </>
    );
};

export default View;
