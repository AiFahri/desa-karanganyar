import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import TombolKembali from "../TombolKembali";

const BuatSurat = () => {
    const [formData, setFormData] = useState({
        nama: "",
        nomorIndukKependudukan: "",
        nomorKartuKeluarga: "",
        tujuanPengajuan: "",
        ktpFile: null,
        kkFile: null,
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const tujuanOptions = [
        "Surat Keterangan Domisili",
        "Surat Keterangan Usaha",
        "Surat Berpergian",
        "Surat SKCK",
        "Surat SKCN",
        "Surat Keterangan Kerja",
        "Surat Keterangan Penghasilan",
        "Surat Keterangan Belum Menikah",
        "Surat Kelahiran, Surat Kematian",
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleDropdownSelect = (value) => {
        setFormData((prev) => ({
            ...prev,
            tujuanPengajuan: value,
        }));
        setIsDropdownOpen(false);
    };

    const handleFileChange = (e, fileType) => {
        const file = e.target.files[0];
        setFormData((prev) => ({
            ...prev,
            [fileType]: file,
        }));
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log("Form data:", formData);
        alert("Form berhasil dikirim!");
    };

    return (
        <>
            {/* Section utama dengan padding atas untuk memberi ruang ke navbar */}
            <section className="relative min-h-screen w-full bg-white pt-[76px] overflow-hidden">
                {/* Blur dekoratif */}
                <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] left-[90%] top-[18%] hidden lg:block z-[2]"></div>
                <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] top-[90%] hidden lg:block z-0"></div>

                <TombolKembali backTo="/layanan" />

                {/* Container Form */}
                <div className="relative z-10 flex justify-center items-start pt-8 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8"
                    >
                        {/* Header Form */}
                        <h1 className="md:text-[50px] font-bold text-center text-black mb-8 text-lg">
                            Pengajuan Surat Keterangan
                        </h1>
                        <hr className="pb-[40px] border-t border-[#00000066]" />
                        {/* Form Layout - 2 Columns */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column - Input Fields */}
                            <div className="space-y-6">
                                {/* Nama */}
                                <div>
                                    <label className="block text-black md:text-[18x] text-[14px] font-semibold mb-2">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleInputChange}
                                        placeholder="Masukkan nama lengkap sesuai KTP"
                                        className="w-full md:text-[14px] text-[12px] pl-[20px] py-[14px] font-semibold color-[#00000073] border border-[#D9D9D9] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Nomor Induk Kependudukan */}
                                <div>
                                    <label className="block text-black md:text-[18x] text-[14px] font-semibold  mb-2">
                                        Nomor Induk Kependudukan
                                    </label>
                                    <input
                                        type="text"
                                        name="nomorIndukKependudukan"
                                        value={formData.nomorIndukKependudukan}
                                        onChange={handleInputChange}
                                        placeholder="16 digit Nomor Induk Kependudukan"
                                        className="w-full text-[14px] pl-[20px] py-[14px] font-semibold color-[#00000073] border border-[#D9D9D9] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        maxLength="16"
                                    />
                                </div>

                                {/* Nomor Kartu Keluarga */}
                                <div>
                                    <label className="block text-black md:text-[18x] text-[14px] font-semibold  mb-2">
                                        Nomor Kartu Keluarga
                                    </label>
                                    <input
                                        type="text"
                                        name="nomorKartuKeluarga"
                                        value={formData.nomorKartuKeluarga}
                                        onChange={handleInputChange}
                                        placeholder="Nomor Kartu Keluarga (16 digit)"
                                        className="w-full md:text-[14px] text-[12px] pl-[20px] py-[14px] font-semibold color-[#00000073] border border-[#D9D9D9] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        maxLength="16"
                                    />
                                </div>

                                {/* Tujuan Pengajuan Surat */}
                                <div>
                                    <label className="block text-black md:text-[18x] text-[14px] font-semibold mb-2">
                                        Tujuan Pengajuan Surat
                                    </label>
                                    <div className="relative">
                                        <div
                                            onClick={() =>
                                                setIsDropdownOpen(
                                                    !isDropdownOpen
                                                )
                                            }
                                            className="w-full md:text-[14px] text-[12px]  pl-[20px] py-[14px] font-semibold color-[#00000073] border border-[#D9D9D9] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <span
                                                className={
                                                    formData.tujuanPengajuan
                                                        ? "text-gray-900"
                                                        : "text-gray-400"
                                                }
                                            >
                                                {formData.tujuanPengajuan ||
                                                    "Pilih salah satu tujuan pengajuan surat"}
                                            </span>
                                        </div>

                                        {/* Dropdown Options */}
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
                                            >
                                                {tujuanOptions.map(
                                                    (option, index) => (
                                                        <div
                                                            key={index}
                                                            onClick={() =>
                                                                handleDropdownSelect(
                                                                    option
                                                                )
                                                            }
                                                            className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-gray-700 border-b border-gray-100 last:border-b-0 transition-colors"
                                                        >
                                                            {option}
                                                        </div>
                                                    )
                                                )}
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - File Upload */}
                            <div className="space-y-6">
                                {/* Upload KTP */}
                                <div>
                                    <label className="block text-black md:text-[18x] text-[14px] font-semibold  mb-2">
                                        Unggah KTP
                                    </label>
                                    <div className="flex gap-3 items-center">
                                        <div className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white min-h-[48px] flex items-center">
                                            <span className="text-gray-600 text-sm">
                                                {formData.ktpFile
                                                    ? formData.ktpFile.name
                                                    : ""}
                                            </span>
                                        </div>
                                        <label className="cursor-pointer">
                                            <input
                                                type="file"
                                                accept="image/*,.pdf"
                                                onChange={(e) =>
                                                    handleFileChange(
                                                        e,
                                                        "ktpFile"
                                                    )
                                                }
                                                className="hidden"
                                            />
                                            <div className="bg-darkBlue text-white md:text-[14px] text-[10px] px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="26"
                                                    height="26"
                                                    viewBox="0 0 26 26"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M11.9584 15.9424V19.2497C11.9584 19.5448 12.0584 19.7924 12.2584 19.9924C12.4584 20.1924 12.7056 20.292 13.0001 20.2913C13.2945 20.2906 13.5421 20.1906 13.7428 19.9913C13.9435 19.792 14.0431 19.5448 14.0417 19.2497V15.9424L14.9792 16.8799C15.0834 16.984 15.2008 17.0622 15.3313 17.1143C15.4619 17.1663 15.5921 17.1882 15.722 17.1799C15.8518 17.1715 15.9775 17.141 16.099 17.0882C16.2206 17.0354 16.3334 16.9573 16.4376 16.8538C16.6286 16.6455 16.7286 16.4025 16.7376 16.1247C16.7466 15.8469 16.6466 15.6038 16.4376 15.3955L13.7292 12.6872C13.6251 12.583 13.5122 12.5094 13.3907 12.4663C13.2692 12.4233 13.139 12.4014 13.0001 12.4007C12.8612 12.4 12.731 12.4219 12.6095 12.4663C12.4879 12.5108 12.3751 12.5844 12.2709 12.6872L9.56258 15.3955C9.35425 15.6038 9.2546 15.8469 9.26362 16.1247C9.27265 16.4025 9.38098 16.6455 9.58862 16.8538C9.79696 17.0448 10.04 17.1448 10.3178 17.1538C10.5956 17.1629 10.8386 17.0629 11.047 16.8538L11.9584 15.9424ZM6.75008 23.4163C6.17716 23.4163 5.68689 23.2125 5.27925 22.8049C4.87161 22.3972 4.66744 21.9066 4.66675 21.333V4.66634C4.66675 4.09342 4.87091 3.60315 5.27925 3.19551C5.68758 2.78787 6.17786 2.5837 6.75008 2.58301H14.224C14.5018 2.58301 14.7667 2.63509 15.0188 2.73926C15.2709 2.84342 15.4921 2.99099 15.6824 3.18197L20.7345 8.23405C20.9254 8.42502 21.073 8.64655 21.1772 8.89863C21.2813 9.15072 21.3334 9.4153 21.3334 9.69238V21.333C21.3334 21.9059 21.1296 22.3965 20.722 22.8049C20.3143 23.2132 19.8237 23.417 19.2501 23.4163H6.75008ZM14.0417 8.83301C14.0417 9.12815 14.1417 9.37572 14.3417 9.57572C14.5417 9.77572 14.789 9.87537 15.0834 9.87467H19.2501L14.0417 4.66634V8.83301Z"
                                                        fill="#FDFCFC"
                                                    />
                                                </svg>
                                                Unggah
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* Upload KK */}
                                <div>
                                    <label className="block text-black md:text-[18x] text-[14px] font-semibold mb-2">
                                        Unggah KK
                                    </label>
                                    <div className="flex gap-3 items-center">
                                        <div className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white min-h-[48px] flex items-center">
                                            <span className="text-gray-600 text-sm">
                                                {formData.kkFile
                                                    ? formData.kkFile.name
                                                    : ""}
                                            </span>
                                        </div>
                                        <label className="cursor-pointer">
                                            <input
                                                type="file"
                                                accept="image/*,.pdf"
                                                onChange={(e) =>
                                                    handleFileChange(
                                                        e,
                                                        "kkFile"
                                                    )
                                                }
                                                className="hidden"
                                            />
                                            <div className="bg-darkBlue text-white md:text-[14px] text-[10px]  px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="26"
                                                    height="26"
                                                    viewBox="0 0 26 26"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M11.9584 15.9424V19.2497C11.9584 19.5448 12.0584 19.7924 12.2584 19.9924C12.4584 20.1924 12.7056 20.292 13.0001 20.2913C13.2945 20.2906 13.5421 20.1906 13.7428 19.9913C13.9435 19.792 14.0431 19.5448 14.0417 19.2497V15.9424L14.9792 16.8799C15.0834 16.984 15.2008 17.0622 15.3313 17.1143C15.4619 17.1663 15.5921 17.1882 15.722 17.1799C15.8518 17.1715 15.9775 17.141 16.099 17.0882C16.2206 17.0354 16.3334 16.9573 16.4376 16.8538C16.6286 16.6455 16.7286 16.4025 16.7376 16.1247C16.7466 15.8469 16.6466 15.6038 16.4376 15.3955L13.7292 12.6872C13.6251 12.583 13.5122 12.5094 13.3907 12.4663C13.2692 12.4233 13.139 12.4014 13.0001 12.4007C12.8612 12.4 12.731 12.4219 12.6095 12.4663C12.4879 12.5108 12.3751 12.5844 12.2709 12.6872L9.56258 15.3955C9.35425 15.6038 9.2546 15.8469 9.26362 16.1247C9.27265 16.4025 9.38098 16.6455 9.58862 16.8538C9.79696 17.0448 10.04 17.1448 10.3178 17.1538C10.5956 17.1629 10.8386 17.0629 11.047 16.8538L11.9584 15.9424ZM6.75008 23.4163C6.17716 23.4163 5.68689 23.2125 5.27925 22.8049C4.87161 22.3972 4.66744 21.9066 4.66675 21.333V4.66634C4.66675 4.09342 4.87091 3.60315 5.27925 3.19551C5.68758 2.78787 6.17786 2.5837 6.75008 2.58301H14.224C14.5018 2.58301 14.7667 2.63509 15.0188 2.73926C15.2709 2.84342 15.4921 2.99099 15.6824 3.18197L20.7345 8.23405C20.9254 8.42502 21.073 8.64655 21.1772 8.89863C21.2813 9.15072 21.3334 9.4153 21.3334 9.69238V21.333C21.3334 21.9059 21.1296 22.3965 20.722 22.8049C20.3143 23.2132 19.8237 23.417 19.2501 23.4163H6.75008ZM14.0417 8.83301C14.0417 9.12815 14.1417 9.37572 14.3417 9.57572C14.5417 9.77572 14.789 9.87537 15.0834 9.87467H19.2501L14.0417 4.66634V8.83301Z"
                                                        fill="#FDFCFC"
                                                    />
                                                </svg>
                                                Unggah
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="lg:col-span-2 flex justify-end">
                                <Link href="/layanan">
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
                                        className="flex items-center gap-[72px] px-[19px] py-[12px] bg-gradient-to-b from-[#0272BA] to-[#95CFF4] hover:from-[#0272BA] hover:to-[#0272BA]
                    md:text-[14px] text-[10px] font-semibold text-white font-sans rounded-md sm:px-6 sm:py-2 transition-all duration-300 "
                                    >
                                        Kirim
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="16"
                                            viewBox="0 0 19 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M1.88289 15.7343C1.53567 15.8732 1.20581 15.8426 0.893311 15.6426C0.580811 15.4426 0.424561 15.152 0.424561 14.7708V10.0833L8.75789 7.99992L0.424561 5.91658V1.22908C0.424561 0.84714 0.580811 0.556515 0.893311 0.35721C1.20581 0.157904 1.53567 0.127348 1.88289 0.265543L17.9246 7.03638C18.3586 7.22735 18.5756 7.54853 18.5756 7.99992C18.5756 8.45131 18.3586 8.77249 17.9246 8.96346L1.88289 15.7343Z"
                                                fill="#FDFCFC"
                                            />
                                        </svg>
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default BuatSurat;
