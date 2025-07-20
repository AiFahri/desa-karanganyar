import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import CardViewDesa from "@/Components/CardViewDesa";
import PetaRBI from "@/Components/PetaRBi";
import bgCardView from "../../assets/Home/img/bgCardView.png";
import logoCardView from "../../assets/Home/img/logoCardView.png"; 
import bgPetaView from '../../assets/Home/img/bgPetaView.png';     // Ganti dengan path gambar background kamu
import BuatLayanan from "@/Components/BuatLayanan";


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <CardViewDesa background={bgCardView} logo={logoCardView}/>
            <PetaRBI backgroundIMG={bgPetaView} />
            <BuatLayanan />
            {/* <h1 className="text-red-400">Halo brok</h1> */}
            {/* <div className="min-h-[1920px] bg-black block">asd</div> */}
            
        </>
    );
};
export default Home;
