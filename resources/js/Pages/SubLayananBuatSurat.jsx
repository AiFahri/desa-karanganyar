import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/Components/Navbar";
import BuatSurat from "@/Components/Layanan/BuatSurat";

const SubLayananBuatSurat = ({ suratJenis }) => {
    const suratJenisCount = suratJenis?.length;
    console.log('=== DEBUG SubLayananBuatSurat ===');
    console.log('Props received:', { suratJenis });
    console.log('suratJenis type:', typeof suratJenis);
    console.log('suratJenis length:', suratJenisCount);
    console.log('======================');
    return (
        <>
            <Navbar />
            <BuatSurat suratJenis={suratJenis} />
        </>
    );
};

export default SubLayananBuatSurat;
