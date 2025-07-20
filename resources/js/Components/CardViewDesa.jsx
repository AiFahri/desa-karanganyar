import React from "react";

const DesaKaranganyar = ({ background = bgImage, logo = logoImage }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-[10%] "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-[70vw] min-h-[500px] h-full max-h-[70vh] bg-white rounded-2xl border-blue-500 shadow-lg">
        {/* Browser Bar */}
        <div className="h-10 bg-blue-500 rounded-t-xl flex items-center px-4">
          <div className="w-3 h-3 rounded-full bg-red-400 mr-1.5" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1.5" />
          <div className="w-3 h-3 rounded-full bg-green-500 mr-4" />
          <div className="flex-1 flex justify-center">
            <div className="bg-white border border-gray-200 rounded px-72 py-0.5 text-xs text-gray-700 max-w-[720px] truncate">
              Desa Karanganyar
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex py-[10vh] gap-x-12 items-center px-[10%] max-w-[70vw]">
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center w-[20vw]">
            <img
              src={logo}
              alt="Logo"
              className="w-[20vw] h-auto object-contain"
            />
          </div>
          {/* Text */}
          <div className="flex-1 max-w-[50vw]">
            <h1 className="text-blue-600 text-5xl font-sans font-bold mb-4">
              Desa Karanganyar
            </h1>
            <p className="text-blue-800 text-2xl font-sans font-semibold text-justify leading-relaxed max-w-[600px] tracking-tight">
              Desa Karanganyar terletak di kaki Gunung Semeru, terkenal akan pesona alaminya yang asri dan udara pegunungan yang sejuk. Dikelilingi hamparan kebun apel, perkebunan sayur, serta pemandangan hijau yang memanjakan mata, desa ini menjadi titik singgah favorit wisatawan sebelum menuju kawasan Taman Nasional Bromo Tengger Semeru. Karanganyar juga dikenal dengan suasana pedesaan yang ramah dan tradisi budaya lokal yang masih terjaga, membuat setiap kunjungan terasa hangat dan berkesan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesaKaranganyar;