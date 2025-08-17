import React from "react";
import Navbar from "@/Components/Navbar";
import BuatSurat from "@/Components/Layanan/BuatSurat";
import Footer from "@/Components/Footer";
import { usePage } from "@inertiajs/react";

const SubLayananBuatSurat = ({ suratJenis }) => {
    const { auth } = usePage().props;
    return (
        <>
            <Navbar user={auth.user}/>
            <BuatSurat suratJenis={suratJenis} />
            <Footer />
        </>
    );
};

export default SubLayananBuatSurat;
