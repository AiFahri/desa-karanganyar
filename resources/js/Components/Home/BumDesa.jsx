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

const karanganyarStats = {
    title: "Statistik Penarikan Sampah BUMDes Karanganyar",
    district: "Poncokusumo",
    regency: "Malang",
    desa: "Karanganyar",
    year: 2025,
    januari: "10310000",
    februari: "10230000",
    maret: "10030000",
    april: "8920000",
    mei: "6270000",
    juni: "1250000",
    juli: "270000",
    agustus: "165000",
    september: "120000",
    oktober: "105000",
    november: "75000",
    desember: "75000",
};

const BumDesa = ({
    id,
    className = "",
    headerTitle,
    stats = karanganyarStats,
}) => {
    const chartData = [
        { name: "Januari", Pendapatan: stats.januari },
        { name: "Februari", Pendapatan: stats.februari },
        { name: "Maret", Pendapatan: stats.maret },
        { name: "April", Pendapatan: stats.april },
        { name: "Mei", Pendapatan: stats.mei },
        { name: "Juni", Pendapatan: stats.juni },
        { name: "Juli", Pendapatan: stats.juli },
        { name: "Agustus", Pendapatan: stats.agustus },
        { name: "September", Pendapatan: stats.september },
        { name: "Oktober", Pendapatan: stats.oktober },
        { name: "November", Pendapatan: stats.november },
        { name: "Desember", Pendapatan: stats.desember },
    ];

    return (
        <section
            id={id}
            className={`relative pb-20 bg-gradient-to-br from-stone-50 to-stone-50${className}`}
        >
            <div className="relative z-10 container mx-auto px-4">
                <p className="text-3xl md:text-[44px] pb-5 font-sans text-[#0272BA] font-semibold text-center">
                    {headerTitle}
                </p>
                <p className="text-lg md:text-2xl mb-12 font-sans text-black font-medium text-center">
                    Lihat perkembangan jumlah penarikan sampah yang dikelola
                    BUMDes Karanganyar setiap tahunnya untuk mendukung
                    kebersihan dan kenyamanan lingkungan desa
                </p>
                <div className="flex flex-col gap-y-16 items-center justify-around w-full max-w-[1100px] max-h-[900px] mx-auto">
                    <div className="w-full lg:w-3/5">
                        <div className="bg-white rounded-2xl shadow-md border-[2px] border-[#0272BA] overflow-hidden">
                            <div className="bg-transparent p-12 text-black">
                                <h2 className="text-2xl font-bold mt-2">
                                    {stats.title}
                                </h2>
                                <p className="text-sm opacity-90">
                                    Desa {stats.desa}, Kecamatan{" "}
                                    {stats.district}, Kabupaten {stats.regency}
                                </p>
                            </div>
                            <div className="p-12 pt-0 h-96">
                                <ResponsiveContainer width="100%" height="100%">
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
                                            dataKey="Pendapatan"
                                            fill="#0284c7"
                                            barSize={100}
                                            radius={[8, 8, 0, 0]}
                                        >
                                            <LabelList
                                                dataKey="Pendapatan"
                                                position="bottom"
                                                formatter={(value) =>
                                                    value.toLocaleString(
                                                        "id-ID"
                                                    )
                                                }
                                                style={{
                                                    fill: "#333",
                                                    fontSize: 12,
                                                    opacity: 0,
                                                }}
                                            />
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row lg:gap-x-32 items-center justify-around w-full mx-auto max-w-screen overflow-hidden">
                        {/* <div className="rounded-2xl flex flex-col items-center justify-around px-4 sm:px-6 md:px-8 py-4 bg-white shadow-md ">
                            <div className="text-[#0272BA] drop-shadow font-semibold">
                                Rumah Terdaftar
                            </div>
                            <div>Jadwal Penarikan</div>
                        </div>
                        <div className="rounded-xl flex flex-col items-center justify-around px-8 py-3 bg-white shadow-md">
                            <div className="text-[#0272BA] drop-shadow font-semibold">
                                Biaya
                            </div>
                            <div>Jadwal Penarikan</div>
                        </div>
                        <div className="rounded-xl flex flex-col items-center justify-around px-8 py-3 bg-white shadow-md">
                            <div className="text-[#0272BA] drop-shadow font-semibold">
                                Jadwal Penarikan
                            </div>
                            <div>Jadwal Penarikan</div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4 opacity-30">
            <div className="w-16 h-0.5 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            <div className="w-16 h-0.5 bg-amber-600"></div>
          </div>
        </div> */}
            </div>
        </section>
    );
};

export default BumDesa;
