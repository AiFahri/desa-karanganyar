import React from "react";

const BumDesa = ({ id, className = "", headerTitle }) => {
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
                    <img
                        src="https://picsum.photos/360/415"
                        alt="Grafik Pendapatan BUMDes"
                        className="border-2 border-black rounded-[20px]"
                    />
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
