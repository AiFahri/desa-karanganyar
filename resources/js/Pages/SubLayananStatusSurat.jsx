import React from "react";
import { circInOut, easeInOut, motion } from "framer-motion";
import { Link, usePage } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import View from "@/Components/Layanan/View";
import StatusSurat from "@/Components/Layanan/StatusSurat";

const SubLayananStatusSurat = () => {
    const { auth } = usePage().props;
    return (
        <>
            <Navbar user={auth.user}/>
            <StatusSurat />
        </>
    );
};

export default SubLayananStatusSurat;
