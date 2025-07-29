import React from "react";
import Navbar from "@/Components/Navbar";
import BuatSurat from "@/Components/Layanan/BuatSurat";
import Footer from "@/Components/Footer";

const SubLayananBuatSurat = ({ suratJenis }) => {
    return (
        <>
            <Navbar />
            <BuatSurat suratJenis={suratJenis} />
            <Footer />
        </>
    );
};

export default SubLayananBuatSurat;
