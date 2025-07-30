import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import PetaRBI from "@/Components/Profile/PetaRBi";
import VisiMisi from "@/Components/Profile/VisiMisi";
import PopulationStats from "@/Components/Profile/StatsPenduduk";
import Perangkat from "@/Components/Profile/Perangkat";
import StatsWilayah from "@/Components/Profile/StatsWilayah";
import { usePage } from "@inertiajs/react";

const ProfilDesa = ({ statistikPenduduk, statistikWilayah }) => {
    const { auth } = usePage().props;
    return (
        <>
            <Navbar user={auth.user} />
            <PetaRBI />
            <StatsWilayah stats={statistikWilayah} />
            <PopulationStats stats={statistikPenduduk} />
            <VisiMisi />
            <Perangkat />
            <Footer />
        </>
    );
};

export default ProfilDesa;
