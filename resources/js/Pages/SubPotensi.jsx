import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import React from 'react'
import { Link } from '@inertiajs/react';
import { ArrowLeftIcon } from 'lucide-react';
import Card from '@/Components/Card';
import TombolKembali from '@/Components/TombolKembali';

// Data sample - idealnya ini akan diterima sebagai props atau dari API
const dataPotensi = [
    {
        id: 1,
        image: "https://picsum.photos/360/415",
        title: "Cimol Baper",
        description: "Cimolnya Baper Rek",
        tiktok: "cimolbaper",
        facebook: "cimolbaper",
        instagram: "cimolbaper",
        notelp: "+62 123-456-7890", // Menambahkan nomor telepon yang hilang
        deskripsi_lengkap:
            "Cimol Baper adalah produk UMKM unggulan yang menawarkan cita rasa autentik dengan kualitas terbaik. Dibuat dengan bahan-bahan pilihan dan resep turun temurun yang telah terbukti kelezatannya. Setiap gigitan memberikan pengalaman kuliner yang tak terlupakan.",
        menu_umkm: "Cimol",
    },
];

// Komponen untuk bagian header dengan tombol kembali
const PageHeader = () => (
    <header className="w-full mt-[76px] bg-gradient-to-b from-[#0272BA] to-[#95CFF4] py-11 px-8 shadow-md sticky top-0 z-10 max-h-28">
        <div className="max-w-[100vw] mx-auto">
            <Link
                href="/portal"
                className="flex items-center space-x-2 text-white font-bold text-lg hover:opacity-80 transition-opacity"
            >
                <ArrowLeftIcon className="w-8 h-8" />
                <span className="text-3xl font-sans">Kembali</span>
            </Link>
        </div>
    </header>
);

// Komponen untuk elemen dekoratif blur
const BlurDecorations = () => (
    <>
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] left-[90%] top-[18%] hidden lg:block z-[2]"></div>
        <div className="absolute inset-0 w-[10%] h-[30%] rounded-full bg-[#95CFF4] blur-[85px] top-[90%] hidden lg:block z-0"></div>
    </>
);

// Komponen untuk informasi produk di bagian kanan atas
const ProductInfo = ({ item }) => (
    <div className="p-6 bg-[#FFFFFF]">
        <h1 className="text-2xl font-bold text-black mb-4">{item.merk_dagang}</h1>
        <div className="text-sm text-justify flex text-black font-semibold leading-relaxed mb-4 w-full flex-wrap">
            {item.deskripsi_lengkap}
        </div>
    </div>
);

// Komponen untuk menu item UMKM
const MenuItem = ({ title, price, description }) => (
    <div className="flex items-start">
        <span className="w-3 h-3 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
        <div>
            <p className="font-semibold text-gray-800">
                {title}
                {price && ` - ${price}`}
            </p>
            {description && (
                <p className="text-sm text-gray-600">{description}</p>
            )}
        </div>
    </div>
);

// Komponen untuk ikon telepon` x
const PhoneIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 31 31"
        fill="none"
    >
        <path
            d="M11.755 5.16571C11.04 4.15321 10.05 3.69696 9.00001 3.70821C8.00376 3.71821 7.03376 4.14446 6.22376 4.71196C5.39759 5.29361 4.69312 6.0312 4.15001 6.88321C3.63751 7.69446 3.26751 8.65321 3.31751 9.58946C3.55876 14.0932 6.09251 18.9057 9.65126 22.467C13.2075 26.0245 17.9563 28.497 22.7513 28.0245C23.6913 27.932 24.58 27.4532 25.3063 26.8432C26.0574 26.2069 26.6711 25.4244 27.11 24.5432C27.535 23.6782 27.7888 22.6807 27.6488 21.7095C27.5038 20.697 26.9375 19.792 25.8963 19.192C25.6805 19.0668 25.4672 18.9376 25.2563 18.8045C25.0688 18.6882 24.8688 18.562 24.6263 18.417C24.1309 18.1116 23.6083 17.8529 23.065 17.6445C22.5063 17.4407 21.8675 17.307 21.2025 17.3982C20.5138 17.4932 19.8738 17.8182 19.32 18.4007C18.8938 18.8507 18.2663 18.9907 17.3838 18.7357C16.4863 18.4757 15.4763 17.8307 14.5988 16.9582C13.7213 16.0882 13.0575 15.0707 12.7738 14.152C12.4938 13.242 12.6175 12.5732 13.055 12.112C13.6463 11.4895 13.9613 10.797 14.0275 10.0645C14.0925 9.35196 13.915 8.68196 13.6613 8.09696C13.2813 7.22321 12.6363 6.35446 12.1313 5.67696C12.0043 5.50758 11.8793 5.33673 11.7563 5.16446"
            fill="#0272BA"
        />
    </svg>
);

// Komponen untuk informasi kontak
const ContactSection = ({ phoneNumber, className = "" }) => (
    <div className={`mb-6 ${className}`}>
        <h3 className="text-lg font-bold text-gray-800 mb-3">
            Kontak Pemesanan
        </h3>
        <div className="flex items-center">
            <PhoneIcon />
            <span className="text-gray-700 ml-2">{phoneNumber}</span>
        </div>
    </div>
);

// Komponen untuk media sosial
const SocialMediaSection = ({ mediaSosial, className = "" }) => (
        <div className={className}>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Media Sosial</h3>
            <div className="space-y-2">
                {mediaSosial && mediaSosial.map((media, index) => (
                    <div key={index} className="flex items-center">
                        {/* You can add a generic icon here if desired, or leave it without one */}
                        <div className="w-4 h-4 bg-gray-400 rounded-full mr-2"></div>
                        <a
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                            href={media.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {media.platform ? `${media.platform}: ` : ''}{media.link}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
// Komponen untuk menu UMKM dan kontak (kiri bawah)
const MenuAndContactSection = ({ item }) => (
    <div className="p-6 bg-white ">
        <h2 className="text-xl font-bold text-black mb-4">Menu UMKM</h2>

        <div className="space-y-4 mb-6 ">
            <MenuItem title={item.menu_umkm} />
        </div>

        {/* Contact - Desktop only */}
        <ContactSection phoneNumber={item.kontak_pemesanan} className="hidden md:block" />

        {/* Social Media - Desktop only */}
        <SocialMediaSection
            mediaSosial={item.media_sosial}
            className="hidden md:block"
        />
    </div>
);

// Komponen untuk kontak dan media sosial (mobile only)
const MobileContactSection = ({ item }) => (
    <div className="p-6 bg-[#FFFFFF]  md:hidden">
        <ContactSection phoneNumber={item.notelp} />
        <SocialMediaSection
            tiktok={item.tiktok}
            facebook={item.facebook}
            instagram={item.instagram}
        />
    </div>
);

// Komponen utama
const SubPotensi = ({ item, umkm}) => {
    // Menggunakan data dari props atau fallback ke data sample
    const currentItem = umkm || dataPotensi[0];
    console.log(currentItem)
  return (
    <>
      <Navbar />
      <div className='pt-[76px]'>
        <TombolKembali backTo="/" />
      </div>
      <BlurDecorations />
      
      <div className="min-h-screen bg-white p-4">
        {/* Main Container */}
        <div className="max-w-4xl mx-auto pt-[70px] bg-[#FDFCFC] rounded-lg shadow-lg overflow-hidden">
          {/* Grid Layout - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            
            {/* Top Left - Product Image & Description */}
            <Card
              key={currentItem.id}
              title={currentItem.title || currentItem.merk_dagang}
              description={currentItem.deskripsi_singkat || currentItem.description}
              image={currentItem.gambar_path ?  `https://is3.cloudhost.id/karanganyar/${currentItem.gambar_path}` : currentItem.image}
            />
            <ProductInfo item={currentItem} />
          </div>
          <div className='flex-flex-col items-center w-full'>  
            {/* Top Right - Product Info */}

                        {/* Bottom Left - Menu UMKM & Contact */}
                        <MenuAndContactSection item={currentItem} />

                        {/* Bottom Right - Contact & Social Media (Mobile Only) */}
                        <MobileContactSection item={currentItem} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default SubPotensi;
