import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Home/Hero";
import Footer from "@/Components/Footer";
import CardViewDesa from "@/Components/Home/CardViewDesa";
import PetaRBI from "@/Components/Home/PetaRBi";
import bgCardView from "../../assets/Home/img/bgCardView.png";
import logoCardView from "../../assets/Home/img/logoCardView.png"; 
import bgPetaView from '../../assets/Home/img/bgPetaView.png';
import BuatLayanan from "@/Components/Home/BuatLayanan";
import HeaderPotensi from "@/Components/Home/HeaderPotensi";
import PotensiSection from "@/Components/Home/PotensiSection";
import BumDesa from "@/Components/Home/BumDesa";

const Home = ({ statistikWilayah }) => {
    return (
        <>
            <Navbar />
            <Hero />
            <CardViewDesa background={bgCardView} logo={logoCardView}/>
            <PetaRBI backgroundIMG={bgPetaView} statsWilayah={statistikWilayah} />
            <BuatLayanan />
            <HeaderPotensi />
            <PotensiSection id={"potensiGan1"} headerTitle={"Potensi Alam"}/>
            <PotensiSection id={"potensiGan2"} headerTitle={"Potensi UMKM"}/>
            <BumDesa id={"bumDesa"} headerTitle={"BUM Desa"}/>
            <Footer />
        </>
    );
};
export default Home;

