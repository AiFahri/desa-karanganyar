import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import Animation from "../Animation";

const ItemBerita = ({
    id,
    slug,
    title,
    date,
    description,
    buttonText,
    image,
}) => {
    return (
        <Animation delay={0.2}>
            {/* Tambahkan max-width yang konsisten dan pastikan full width */}
            <div className="font-sans border border-gray-200 w-full max-w-full rounded-lg bg-white my-4 flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 lg:p-12 lg:items-center">
                
                {/* Perbaikan pada container gambar */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                    <img
                        src={image}
                        alt={title || "Gambar Berita"}
                        className="w-full h-auto object-cover rounded-lg aspect-video"
                        onError={(e) => {
                            e.target.src =
                                "https://placehold.co/400x300/cccccc/ffffff?text=No+Image";
                        }}
                    />
                </div>

                {/* Pastikan content menggunakan sisa ruang */}
                <div className="flex flex-col gap-6 lg:justify-between h-full flex-1">
                    <div>
                        <h2 className="text-xl font-semibold mb-1">{title}</h2>
                        <div className="text-blue-600 font-medium text-base mb-2">
                            {new Date(date).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </div>
                        <p className="text-gray-500">{description}</p>
                    </div>

                    <Link href={`/berita/${slug}`} className="w-full lg:w-auto">
                        <motion.div
                            initial={{
                                background:
                                    "linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)",
                            }}
                            whileHover={{
                                background:
                                    "linear-gradient(180deg, #0272BA 0%, #0272BA 98%)",
                            }}
                            transition={{ duration: 0.3, easing: "easeIn" }}
                            className="cursor-pointer text-white font-sans font-semibold rounded-lg px-4 py-3 flex items-center justify-between shadow w-full lg:max-w-[260px] lg:ml-auto"
                        >
                            {buttonText}

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                            >
                                <path
                                    d="M5.20833 12.5H19.7917"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.5 5.20833L19.7917 12.5L12.5 19.7917"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </Animation>
    );
};

export default ItemBerita;