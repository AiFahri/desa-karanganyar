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

const Home = ({ statistikWilayah, umkmData }) => {
    return (
        <>
            <Navbar />
            <Hero />
            <CardViewDesa background={bgCardView} logo={logoCardView} />
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
                umkmData={umkmData}
            />
            <BumDesa id={"bumDesa"} headerTitle={"BUM Desa"} />
            <Footer />
        </>
    );
};
export default Home;
