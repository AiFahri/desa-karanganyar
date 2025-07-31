import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Home/Hero";
import Footer from "@/Components/Footer";
import CardViewDesa from "@/Components/Home/CardViewDesa";
import PetaRBIHome from "@/Components/Home/PetaRBi";
import bgCardView from "../../assets/Home/img/bgCardView.png";
import logoCardView from "../../assets/Home/img/logoCardView.png";
import bgPetaView from "../../assets/Home/img/bgPetaView.png";
import BuatLayanan from "@/Components/Home/BuatLayanan";
import HeaderPotensi from "@/Components/Home/HeaderPotensi";
import PotensiSection from "@/Components/Home/PotensiSection";
import BumDesa from "@/Components/Home/BumDesa";
import { dummyPotensi } from "@/data/dummyPotensi";
import { usePage } from "@inertiajs/react";
import SEO from "@/Components/SEO";
import JsonLd from "@/Components/JsonLd";

const Home = ({ statistikWilayah, umkmData, beritaData }) => {
    const { auth } = usePage().props;
    
    return (
        <>
            <SEO 
                title="Desa Karanganyar - Kecamatan Poncokusumo Kabupaten Malang | Website Resmi"
                description="Website resmi Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang. Informasi layanan desa, berita terkini, pengumuman, dan potensi UMKM desa."
                keywords="Desa Karanganyar, Poncokusumo, Malang, Website Desa, Layanan Desa, UMKM Karanganyar, Berita Desa"
            />
            <JsonLd 
                data={{
                    "@context": "https://schema.org",
                    "@type": "GovernmentOrganization",
                    "name": "Desa Karanganyar",
                    "url": "https://karanganyarmalang.com",
                    "logo": "https://karanganyarmalang.com/logo_karanganyar.png",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Poncokusumo",
                        "addressRegion": "Malang",
                        "addressCountry": "ID"
                    },
                    "description": "Website resmi Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang."
                }}
            />
            <Navbar user={auth.user} />
            <Hero />
            <CardViewDesa backgroundIMG={bgCardView} logo={logoCardView} />
            <PetaRBIHome
                backgroundIMG={bgPetaView}
                statsWilayah={statistikWilayah}
            />
            <BuatLayanan />
            <HeaderPotensi />
            <PotensiSection
                id={"potensiGan1"}
                headerTitle={"Potensi Alam"}
                
                umkmData={dummyPotensi}
            />
            <PotensiSection
                id={"potensiGan2"}
                headerTitle={"Potensi UMKM"}
                deskripsi={"Pilih salah satu UMKM pada daftar di bawah untuk mengetahui informasi lebih lengkap."}
                umkmData={umkmData}
            />
            <BumDesa id={"bumDesa"} headerTitle={"BUM Desa"} />
            <Footer />
        </>
    );
};
export default Home;



