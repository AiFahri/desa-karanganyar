import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import CardViewDesa from "@/Components/CardViewDesa";
import PetaRBI from "@/Components/PetaRBi";
import bgPeta from '../../assets/img/bgPetaView.png';
import bgCard from '../../assets/img/bgCardView.png';
import logoCard from '../../assets/img/logoCardView.png';



const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <CardViewDesa background={bgCard} logo={logoCard}/>
            <PetaRBI backgroundIMG={bgPeta}/>
            {/* <h1 className="text-red-400">Halo brok</h1> */}
            {/* <div className="min-h-[1920px] bg-black block">asd</div> */}
            <Footer />
        </>
    );
};
export default Home;
