import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import CardViewDesa from "@/Components/CardViewDesa";


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <CardViewDesa />
            {/* <h1 className="text-red-400">Halo brok</h1> */}
            {/* <div className="min-h-[1920px] bg-black block">asd</div> */}
            
        </>
    );
};
export default Home;
