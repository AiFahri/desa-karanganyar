import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import View from "@/Components/Layanan/View";
import { usePage } from "@inertiajs/react";

const LayananMasyarakat = () => {
    const { auth } = usePage().props;
    return (
        <>
            <Navbar user={auth.user} /> <View />
            <Footer />
        </>
    );
};

export default LayananMasyarakat;
