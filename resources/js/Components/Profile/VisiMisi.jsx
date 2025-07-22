import React from 'react';

const VisiMisi = () => {
  return (
    <div
      className="min-h-screen p-4 md:p-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #FDFCFC 0%, #4CA0D7 61.38%, #0272BA 98%)"
      }}
    >
      <div className="w-full max-w-4xl space-y-8">

        {/* Visi Section */}
        <div className="overflow-hidden flex flex-col items-center">
          <div
            className="w-full lg:w-[600px] h-[100px] text-[#0272BA] text-center justify-center py-4 border border-gray-300"
            style={{
              borderRadius: "20px",
              background: "#FDFCFC"
            }}
          >
            <h2 className="text-[32px] md:text-[44px] font-bold">Visi</h2>
          </div>

          <div
            className="w-full p-4 md:p-6"
            style={{
              borderRadius: "20px",
              background: "rgba(253, 252, 252, 0.60)",
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
            }}
          >
            <h3 className="text-[20px] md:text-[24px] text-black mb-4 text-start">
              DESA KARANCANYAR "<strong>BERHATI EMAS</strong>"
            </h3>

            <p className="text-[16px] md:text-[24px] text-black leading-relaxed text-justify">
              Terwujudnya Desa Karanganyar yang Bersih, Harmonis, Akuntabel (dapat dipertanggungjawabkan), Transparan, Inovatif, Egaliter (sama/sederajat), Mandiri, Agamis, dan Sejahtera.
            </p>
          </div>
        </div>

        {/* Misi Section */}
        <div className="overflow-hidden flex flex-col items-center">
          <div
            className="w-full lg:w-[600px] h-[100px] text-[#0272BA] text-center justify-center py-4 border border-gray-300"
            style={{
              borderRadius: "20px",
              background: "#FDFCFC"
            }}
          >
            <h2 className="text-[32px] md:text-[44px] font-bold">Misi</h2>
          </div>

          <div
            className="w-full p-4 md:p-6"
            style={{
              borderRadius: "20px",
              background: "rgba(253, 252, 252, 0.60)",
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
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
                "Meningkatkan kemampuan pengelolaan keuangan dan aset desa."
              ].map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-justify text-[16px] md:text-[24px]">
                    {index + 1}. {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisiMisi;
