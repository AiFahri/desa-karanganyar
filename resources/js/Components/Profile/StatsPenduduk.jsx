import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
} from "recharts";

import pria from "./../../../assets/ProfilDesa/pria.png";
import kepala_keluarga from "./../../../assets/ProfilDesa/kepala_keluarga.png";
import penduduk from "./../../../assets/ProfilDesa/penduduk.png";
import wanita from "./../../../assets/ProfilDesa/wanita.png";
import Animation from "../Animation";


const FamilyIcon = () => (
    <img
        src={penduduk}
        alt="Gambar layanan"
        className=" relative z-10 max-w-full object-contain w-full h-auto"
    />
);

const MaleIcon = () => (
    <img
        src={pria}
        alt="Gambar layanan"
        className="w-full relative z-10 max-w-full h-auto object-contain"
    />
);

const FemaleIcon = () => (
    <img
        src={wanita}
        alt="Gambar layanan"
        className="w-full relative z-10 max-w-full h-auto object-contain"
    />
);

const HouseholdIcon = () => (
    <img
        src={kepala_keluarga}
        alt="Gambar layanan"
        className="w-full relative z-10 max-w-full h-auto object-contain"
    />
);

const StatItem = ({ icon, value, label, bgColor }) => (
    <div className="flex flex-row gap-x-2 md:flex-col items-center text-center">
        <div
            className={`md:w-[80px] w-[35px] md:h-[80px] h-[35px] rounded-full flex items-center justify-center shadow-md ${bgColor}`}
        >
            {icon}
        </div>
        <div className="flex flex-col">
            <p className="md:text-[24px] text-[14px] font-semibold mt-3 text-black md:self-center self-start">
                {value.toLocaleString("id-ID")}
            </p>
            <p className="md:text-[14px] text-[11px] font-semibold text-black">
                {label}
            </p>
        </div>
    </div>
);

export const PopulationStats = ({ stats }) => {
    const chartData = [
        { name: "Pria", Jumlah: stats.jumlah_pria || stats.male || 0 },
        { name: "Wanita", Jumlah: stats.jumlah_wanita || stats.female || 0 },
        {
            name: "Kepala Keluarga",
            Jumlah: stats.jumlah_kepala_keluarga || stats.households || 0,
        },
        {
            name: "Jumlah Penduduk",
            Jumlah: stats.jumlah_penduduk || stats.totalPopulation || 0,
        },
    ];

    return (
        <Animation delay={0.2}>
            <div className="bg-[#FDFCFC] min-h-screen p-4 sm:p-6 md:p-8 font-sans">
                <div className="max-w-7xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                            Informasi Statistik Penduduk Desa{" "}
                            {stats.villageName || "Karanganyar"}
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                            Grafik berikut menunjukkan data jumlah kepala
                            keluarga, penduduk laki-laki, perempuan, dan total
                            penduduk di Desa{" "}
                            {stats.villageName || "Karanganyar"}, Kecamatan{" "}
                            {stats.district || "Poncokusumo"}.
                        </p>
                    </div>

                    {/* Main Content: Chart and Icons */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-8">
                        {/* Left Side: Chart */}
                        <div className="w-full lg:w-3/5">
                            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                                <div className="bg-blue-600 p-5 text-white">
                                    <span className="bg-blue-500 text-xs font-semibold px-3 py-1 rounded-full">
                                        Statistik Penduduk
                                    </span>
                                    <h2 className="text-2xl font-bold mt-2">
                                        Desa{" "}
                                        {stats.villageName || "Karanganyar"}
                                    </h2>
                                    <p className="text-sm opacity-90">
                                        Kecamatan{" "}
                                        {stats.district || "Poncokusumo"},
                                        Kabupaten {stats.regency || "Malang"}
                                    </p>
                                </div>
                                <div className="p-4 h-96">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <BarChart
                                            data={chartData}
                                            margin={{
                                                top: 30,
                                                right: 0,
                                                left: 0,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid
                                                strokeDasharray="3 3"
                                                vertical={false}
                                                stroke="#e0e0e0"
                                            />
                                            <XAxis
                                                dataKey="name"
                                                tick={{
                                                    fontSize: 12,
                                                    fill: "#666",
                                                }}
                                            />
                                            <YAxis
                                                tick={{
                                                    fontSize: 12,
                                                    fill: "#666",
                                                }}
                                            />
                                            <Tooltip
                                                cursor={{
                                                    fill: "rgba(236, 240, 241, 0.5)",
                                                }}
                                            />
                                            <Bar
                                                dataKey="Jumlah"
                                                fill="#0284c7"
                                                barSize={100}
                                                radius={[8, 8, 0, 0]}
                                            >
                                                <LabelList
                                                    dataKey="Jumlah"
                                                    position="top"
                                                    formatter={(value) =>
                                                        value.toLocaleString(
                                                            "id-ID"
                                                        )
                                                    }
                                                    style={{
                                                        fill: "#333",
                                                        fontSize: 12,
                                                    }}
                                                />
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Icons */}
                        <div className="w-full lg:w-2/5 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-8">
                                <StatItem
                                    icon={<FamilyIcon />}
                                    value={
                                        stats.jumlah_penduduk ||
                                        stats.totalPopulation ||
                                        0
                                    }
                                    label="Jumlah Penduduk"
                                    bgColor="bg-purple-100"
                                />
                                <StatItem
                                    icon={<MaleIcon />}
                                    value={stats.jumlah_pria || stats.male || 0}
                                    label="Pria"
                                    bgColor="bg-green-100"
                                />
                                <StatItem
                                    icon={<HouseholdIcon />}
                                    value={
                                        stats.jumlah_kepala_keluarga ||
                                        stats.households ||
                                        0
                                    }
                                    label="Kepala Keluarga"
                                    bgColor="bg-teal-100"
                                />
                                <StatItem
                                    icon={<FemaleIcon />}
                                    value={
                                        stats.jumlah_wanita || stats.female || 0
                                    }
                                    label="Wanita"
                                    bgColor="bg-orange-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Animation>
    );
};

export default PopulationStats;
