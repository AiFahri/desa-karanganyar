import React from "react";

const DesaKaranganyar = ({ background, logo }) => {
  return (
    // CONTAINER UTAMA: Menggunakan padding yang lebih sesuai untuk tampilan mobile dan desktop.
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundAttachment: "fixed", // Efek paralaks yang bagus
      }}
    >
      {/* JENDELA KONTEN: Lebar disesuaikan untuk berbagai ukuran layar. Dihilangkan batasan tinggi (max-h) agar konten bisa pas. */}
      <div className="w-full max-w-[1400px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Browser Bar */}
        <div className="h-10 bg-blue-500 rounded-t-lg flex items-center px-4">
          <div className="w-3 h-3 rounded-full bg-red-400 mr-1.5" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1.5" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          
          {/* Address Bar: Dibuat fleksibel dan tidak akan rusak di layar kecil. */}
          <div className="flex-1 flex justify-center px-4">
            <div className="bg-white border border-gray-200 rounded-md px-4 py-0.5 text-xs text-gray-700 w-full max-w-md text-center truncate">
              Desa Karanganyar
            </div>
          </div>
        </div>

        {/* Konten Utama */}
        {/* TATA LETAK KONTEN: Ditumpuk di mobile (flex-col), berdampingan di desktop (lg:flex-row). */}
        <div className="flex flex-col lg:flex-row p-6 sm:p-8 lg:p-32 gap-8 items-center justify-between w-full">
          
          {/* Logo */}
          {/* UKURAN LOGO: Dibuat responsif, lebih kecil di mobile, lebih besar di desktop. */}
          <div className="flex-shrink-0 w-1/2 sm:w-1/3 lg:w-[21vw] max-h-[480px]">
            <img
              src={logo}
              alt="Logo Desa Karanganyar"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Teks */}
          <div className="flex-1 text-center lg:text-left max-w-[640px] self-start">
            {/* UKURAN FONT: Disesuaikan agar mudah dibaca di semua perangkat. */}
            <h1 className="text-blue-600 text-3xl sm:text-4xl lg:text-5xl font-sans font-bold mb-4">
              Desa Karanganyar
            </h1>
            <p className="text-blue-800 text-base sm:text-lg lg:text-2xl font-sans font-semibold leading-relaxed mx-auto lg:mx-0">
              Desa Karanganyar terletak di kaki Gunung Semeru, terkenal akan pesona alaminya yang asri dan udara pegunungan yang sejuk. Dikelilingi hamparan kebun apel, perkebunan sayur, serta pemandangan hijau yang memanjakan mata, desa ini menjadi titik singgah favorit wisatawan sebelum menuju kawasan Taman Nasional Bromo Tengger Semeru. Karanganyar juga dikenal dengan suasana pedesaan yang ramah dan tradisi budaya lokal yang masih terjaga, membuat setiap kunjungan terasa hangat dan berkesan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesaKaranganyar;
