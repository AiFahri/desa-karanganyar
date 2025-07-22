import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const karanganyarStats = {
    title: "Statistik Penarikan Sampah BUMDes Karanganyar",
    district: "Poncokusumo",
    regency: "Malang",
    desa: "Karanganyar",
    year: 2025,
    count2024: 7989,
};

const BumDesa = ({ id, className = "", headerTitle, stats = karanganyarStats }) => {

    const chartData = [
        { name: '2024', Jumlah: stats.count2024 },
    ];

    return (
        <section
            id={id}
            className={`relative pb-20 bg-gradient-to-br from-stone-50 to-stone-50${className}`}
        >
            <div className="relative z-10 container mx-auto px-4">
                <p className="text-[44px] pb-5 font-sans text-[#0272BA] font-semibold text-center">
                    {headerTitle}
                </p>
                <p className="text-2xl mb-12 font-sans text-black font-medium text-center">
                    Lihat perkembangan jumlah penarikan sampah yang dikelola
                    BUMDes Karanganyar setiap tahunnya untuk mendukung
                    kebersihan dan kenyamanan lingkungan desa
                </p>
                <div className="flex flex-col gap-y-16 items-center justify-around w-full max-w-[1100px] max-h-[900px] mx-auto">
                    <div className="w-full lg:w-3/5">
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                            <div className="bg-blue-600 p-5 text-white">
                            <h2 className="text-2xl font-bold mt-2">{stats.title}</h2>
                            <p className="text-sm opacity-90">Desa {stats.desa}, Kecamatan {stats.district}, Kabupaten {stats.regency}</p>
                            </div>
                            <div className="p-4 h-96">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{ top: 30, right: 0, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#666' }} />
                                <YAxis tick={{ fontSize: 12, fill: '#666' }} />
                                <Tooltip cursor={{fill: 'rgba(236, 240, 241, 0.5)'}}/>
                                <Bar dataKey="Jumlah" fill="#0284c7" barSize={100} radius={[8,8,0,0]}>
                                    <LabelList 
                                        dataKey="Jumlah" 
                                        position="top" 
                                        formatter={(value) => value.toLocaleString('id-ID')}
                                        style={{ fill: '#333', fontSize: 12 }} 
                                    />
                                </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-32 items-center justify-around w-full mx-auto max-w-full">
                        <div className="rounded-xl flex flex-col items-center justify-around px-8 py-3 shadow-md">
                            <div className="text-[#0272BA] drop-shadow font-semibold">
                                Rumah Terdaftar
                            </div>
                            <div>Jadwal Penarikan</div>
                        </div>
                        <div className="rounded-xl flex flex-col items-center justify-around px-8 py-3 shadow-md">
                            <div className="text-[#0272BA] drop-shadow font-semibold">
                                Biaya
                            </div>
                            <div>Jadwal Penarikan</div>
                        </div>
                        <div className="rounded-xl flex flex-col items-center justify-around px-8 py-3 shadow-md">
                            <div className="text-[#0272BA] drop-shadow font-semibold">
                                Jadwal Penarikan
                            </div>
                            <div>Jadwal Penarikan</div>
                        </div>
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
