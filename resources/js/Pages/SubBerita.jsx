import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { usePage } from "@inertiajs/react";
import SEO from "@/Components/SEO";
import JsonLd from "@/Components/JsonLd";
import Breadcrumbs from "@/Components/Breadcrumbs";
import { formatDate } from "@/utils/dateFormatter";

const SubBerita = ({ berita, relatedBerita }) => {
    const { auth, meta } = usePage().props;
    
    return (
        <>
            <SEO 
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
                ogImage={meta.ogImage}
            />
            <JsonLd 
                data={{
                    "@context": "https://schema.org",
                    "@type": "NewsArticle",
                    "headline": berita.judul,
                    "image": berita.gambar ? `https://is3.cloudhost.id/karanganyar/${berita.gambar}` : null,
                    "datePublished": berita.tanggal_publish,
                    "dateModified": berita.updated_at,
                    "author": {
                        "@type": "Organization",
                        "name": "Desa Karanganyar"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Desa Karanganyar",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://karanganyarmalang.com/logo_karanganyar.png"
                        }
                    },
                    "description": meta.description
                }}
            />
            <Navbar user={auth.user} />
            
            <div className="container mx-auto px-4 py-8 mt-20">
                <Breadcrumbs 
                    items={[
                        { label: 'Portal Berita', href: '/portal' },
                        { label: berita.judul }
                    ]} 
                />
                
                <h1 className="text-3xl font-bold mb-4 mt-4">{berita.judul}</h1>
                <div className="text-gray-600 mb-4">
                    {berita.tanggal_publish && (
                        <p>
                            Dipublikasikan pada {formatDate(berita.tanggal_publish)}
                        </p>
                    )}
                </div>
                
                {berita.gambar && (
                    <img 
                        src={`https://is3.cloudhost.id/karanganyar/${berita.gambar}`}
                        alt={berita.judul}
                        className="w-1/3 h-auto object-cover rounded-lg shadow-md"
                    />
                )}
                
                <div 
                    className="prose max-w-none mt-6"
                    dangerouslySetInnerHTML={{ __html: berita.deskripsi }}
                />
                
                {relatedBerita && relatedBerita.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-4">Berita Terkait</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedBerita.map((item) => (
                                <div key={item.id} className="border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-2">{item.judul}</h3>
                                    <p className="text-gray-600 mb-4">{item.deskripsi}</p>
                                    <a
                                        href={`/berita/${item.slug}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        Baca Selengkapnya
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            <Footer />
        </>
    );
};

export default SubBerita;





