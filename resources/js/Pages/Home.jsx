import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Home/Hero";
import Footer from "@/Components/Footer";
import CardViewDesa from "@/Components/Home/CardViewDesa";
import PetaRBI from "@/Components/Home/PetaRBi";
import bgCardView from "../../assets/Home/img/bgCardView.png";
import logoCardView from "../../assets/Home/img/logoCardView.png"; 
import bgPetaView from '../../assets/Home/img/bgPetaView.png';     // Ganti dengan path gambar background kamu
import BuatLayanan from "@/Components/Home/BuatLayanan";
import HeaderPotensi from "@/Components/Home/HeaderPotensi";


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <CardViewDesa background={bgCardView} logo={logoCardView}/>
            <PetaRBI backgroundIMG={bgPetaView} />
            <BuatLayanan />
            <HeaderPotensi />
            {/* <h1 className="text-red-400">Halo brok</h1> */}
            {/* <div className="min-h-[1920px] bg-black block">asd</div> */}
            <Footer />
        </>
    );
};
export default Home;
