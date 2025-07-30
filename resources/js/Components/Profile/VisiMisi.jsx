import React from "react";
import Animation from "../Animation";

const VisiMisi = () => {
    return (
        <Animation delay={0.2}>
            <div
                className="min-h-screen p-4 md:p-8 flex items-center justify-center"
                style={{
                    background:
                        "linear-gradient(180deg, #FDFCFC 0%,#4CA0D7 50%, #4CA0D7  75%, #FDFCFC 100%)",
                }}
            >
                <div className="w-full max-w-4xl space-y-8">
                    {/* Visi Section */}
                    <div className="overflow-hidden flex flex-col items-center">
                        <div
                            className=" md:w-[600px] md:h-[100px] w-[250px] h-[44px] text-[#0272BA] text-center justify-center  border border-gray-300"
                            style={{
                                borderRadius: "15px 15px 0 0",
                                background: "#FDFCFC",
                            }}
                        >
                            <h2 className="md:text-[44px] text-[24px] font-bold">
                                Visi
                            </h2>
                        </div>

                        <div
                            className="w-full p-4 md:p-6"
                            style={{
                                borderRadius: "20px",
                                background: "rgba(253, 252, 252, 0.60)",
                                boxShadow:
                                    "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                            }}
                        >
                            <h3 className=" md:text-[24px] text-[12px] text-black mb-4 text-start">
                                DESA KARANCANYAR "<strong>BERHATI EMAS</strong>"
                            </h3>

                            <p className="md:text-[24px] text-[12px]  text-black leading-relaxed text-justify">
                                Terwujudnya Desa Karanganyar yang Bersih,
                                Harmonis, Akuntabel (dapat
                                dipertanggungjawabkan), Transparan, Inovatif,
                                Egaliter (sama/sederajat), Mandiri, Agamis, dan
                                Sejahtera.
                            </p>
                        </div>
                    </div>

                    {/* Misi Section */}
                    <div className="overflow-hidden flex flex-col items-center">
                        <div
                            className="md:w-[600px] md:h-[100px] w-[250px] h-[44px] text-[#0272BA] text-center justify-center  border border-gray-300"
                            style={{
                                borderRadius: "15px 15px 0 0",
                                background: "#FDFCFC",
                            }}
                        >
                            <h2 className=" md:text-[44px] text-[24px] font-bold">
                                Misi
                            </h2>
                        </div>

                        <div
                            className="w-full p-4 md:p-6"
                            style={{
                                borderRadius: "20px",
                                background: "rgba(253, 252, 252, 0.60)",
                                boxShadow:
                                    "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                            }}
                        >
                            <ol className="space-y-4 text-black leading-relaxed">
                                {[
                                    "Mewujudkan pemerintahan yang senantiasa mengayomi, melindungi, dan melayani dengan jujur dan amanah.",
                                    "Meningkatkan sinergitas pemerintah desa dengan kelembagaan desa lainnya.",
                                    "Mempertanggungjawabkan secara hasil kerja pemerintahan desa kepada seluruh warga masyarakat desa dan Negara Kesatuan Republik Indonesia secara tegas, jujur, dan prosedural.",
                                    "Meningkatkan pembangunan yang merata dalam berbagai bidang, baik fisik maupun nonfisik.",
                                    "Mengembangkan ide-ide baru yang kreatif dalam berbagai seni budaya, dan mewujudkan kawasan penyangga pariwisata yang tertata.",
                                    "Meningkatkan mutu kebersihan lingkungan permukiman, lingkungan pendidikan, dan pelayanan kesehatan.",
                                    "Mengembangkan forum komunikasi dengan masyarakat secara terbuka.",
                                    "Meningkatkan kualitas keimanan dan ketakwaan kepada Tuhan Yang Maha Esa.",
                                    "Meningkatkan kemampuan pengelolaan keuangan dan aset desa.",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <span className="md:text-[24px] text-[12px]  mr-2 flex-shrink-0">
                                            {index + 1}.
                                        </span>
                                        <span className="text-justify md:text-[24px] text-[12px] flex-1">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </Animation>
    );
};

export default VisiMisi;
