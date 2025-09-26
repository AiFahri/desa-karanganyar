import React, { Suspense, lazy, memo } from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Home/Hero";
import Footer from "@/Components/Footer";
import CardViewDesa from "@/Components/Home/CardViewDesa";
import PetaRBIHome from "@/Components/Home/PetaRBi";
import bgCardView from "../../assets/Home/img/bgCardView.png";
import logoCardView from "../../assets/Home/img/logoCardView.png";
import bgPetaView from "../../assets/Home/img/bgPetaView.png";
import BuatLayanan from "@/Components/Home/BuatLayanan";
import HeaderPotensi from "@/Components/Home/HeaderPotensi";
import PotensiSection from "@/Components/Home/PotensiSection";
import BumDesa from "@/Components/Home/BumDesa";
import { dummyPotensi } from "@/data/dummyPotensi";
import { usePage } from "@inertiajs/react";
import SEO from "@/Components/SEO";
import JsonLd, { LocalBusinessSchema, GovernmentOrganizationSchema, WebSiteSchema } from "@/Components/JsonLd";
import LoadingSpinner from "@/Components/LoadingSpinner";
import ErrorBoundary from "@/Components/ErrorBoundary";
import { preloadCriticalResources } from "@/utils/preloadResources";

const LazyPotensiSection = lazy(() => import("@/Components/Home/PotensiSection"));
const LazyBumDesa = lazy(() => import("@/Components/Home/BumDesa"));

const LoadingFallback = () => <LoadingSpinner size="md" color="blue" />;

const MemoizedHero = memo(Hero);
const MemoizedCardViewDesa = memo(CardViewDesa);
const MemoizedPetaRBIHome = memo(PetaRBIHome);
const MemoizedBuatLayanan = memo(BuatLayanan);
const MemoizedHeaderPotensi = memo(HeaderPotensi);

const Home = ({ statistikWilayah, umkmData, beritaData }) => {
    const { auth } = usePage().props;
    
    React.useEffect(() => {
        preloadCriticalResources();
    }, []);
    
    return (
        <>
            <SEO 
                title="Desa Karanganyar - Kecamatan Poncokusumo Kabupaten Malang | Website Resmi"
                description="Website resmi Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang. Informasi layanan desa, berita terkini, pengumuman, dan potensi UMKM desa."
                keywords="Desa Karanganyar, Poncokusumo, Malang, Website Desa, Layanan Desa, UMKM Karanganyar, Berita Desa"
            />
            <JsonLd data={GovernmentOrganizationSchema} />
            <JsonLd data={LocalBusinessSchema} />
            <JsonLd data={WebSiteSchema} />
            <Navbar user={auth.user} />
            <MemoizedHero />
            <MemoizedCardViewDesa backgroundIMG={bgCardView} logo={logoCardView} />
            <MemoizedPetaRBIHome
                backgroundIMG={bgPetaView}
                statsWilayah={statistikWilayah}
            />
            <MemoizedBuatLayanan />
            <MemoizedHeaderPotensi />
            
            <ErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                    <LazyPotensiSection
                        id={"potensiGan1"}
                        headerTitle={"Potensi Alam"}
                        umkmData={dummyPotensi}
                    />
                </Suspense>
            </ErrorBoundary>
            
            <ErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                    <LazyPotensiSection
                        id={"potensiGan2"}
                        headerTitle={"Potensi UMKM"}
                        deskripsi={"Pilih salah satu UMKM pada daftar di bawah untuk mengetahui informasi lebih lengkap."}
                        umkmData={umkmData}
                    />
                </Suspense>
            </ErrorBoundary>
            
            <ErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                    <LazyBumDesa id={"bumDesa"} headerTitle={"BUM Desa"} />
                </Suspense>
            </ErrorBoundary>
            
            <Footer />
        </>
    );
};

export default memo(Home);



