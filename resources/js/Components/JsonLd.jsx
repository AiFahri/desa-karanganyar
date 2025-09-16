import React from 'react';
import { Head } from '@inertiajs/react';

const JsonLd = ({ data }) => {
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(data)
                }}
            />
        </Head>
    );
};

// Predefined structured data for common pages
export const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pemerintahan Desa Karanganyar",
    "alternateName": "Desa Karanganyar",
    "description": "Website resmi Pemerintahan Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang, Jawa Timur",
    "url": "https://karanganyarmalang.com",
    "logo": "https://karanganyarmalang.com/logo_karanganyar.png",
    "image": "https://karanganyarmalang.com/images/gapura karanganyar.webp",
    "telephone": "+62-823-3138-6980",
    "email": "dkaranganyar01@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Raya Karang Anyar No.6, Lor Kali",
        "addressLocality": "Karanganyar",
        "addressRegion": "Poncokusumo",
        "addressCountry": "ID",
        "postalCode": "65157"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -7.7971,
        "longitude": 112.6337
    },
    "openingHours": "Mo-Fr 08:00-16:00",
    "sameAs": [
        "https://www.facebook.com/groups/401277673330593/",
        "https://www.instagram.com/seputar_desakaranganyar/"
    ],
    "hasMap": "https://maps.google.com/?q=-7.7971,112.6337",
    "areaServed": {
        "@type": "City",
        "name": "Karanganyar"
    },
    "serviceArea": {
        "@type": "City",
        "name": "Karanganyar"
    },
    "priceRange": "Free",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash",
    "areaServed": {
        "@type": "City",
        "name": "Karanganyar"
    }
};

export const GovernmentOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": "Pemerintahan Desa Karanganyar",
    "alternateName": "Desa Karanganyar",
    "description": "Pemerintahan Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang, Jawa Timur",
    "url": "https://karanganyarmalang.com",
    "logo": "https://karanganyarmalang.com/logo_karanganyar.png",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Raya Karang Anyar No.6, Lor Kali",
        "addressLocality": "Karanganyar",
        "addressRegion": "Poncokusumo",
        "addressCountry": "ID",
        "postalCode": "65157"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+62-823-3138-6980",
        "contactType": "customer service",
        "availableLanguage": "Indonesian"
    },
    "areaServed": {
        "@type": "City",
        "name": "Karanganyar"
    },
    "serviceType": [
        "Administrasi Desa",
        "Layanan Surat",
        "Informasi Desa",
        "Pengumuman Resmi"
    ]
};

export const WebSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Website Resmi Desa Karanganyar",
    "url": "https://karanganyarmalang.com",
    "description": "Website resmi Pemerintahan Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang, Jawa Timur",
    "publisher": {
        "@type": "GovernmentOrganization",
        "name": "Pemerintahan Desa Karanganyar"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://karanganyarmalang.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    },
    "inLanguage": "id",
    "isAccessibleForFree": true
};

export const BreadcrumbListSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }))
});

export const ArticleSchema = (article) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.judul,
    "description": article.deskripsi,
    "image": article.gambar ? `https://karanganyarmalang.com/storage/${article.gambar}` : null,
    "author": {
        "@type": "Organization",
        "name": "Pemerintahan Desa Karanganyar"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Pemerintahan Desa Karanganyar",
        "logo": {
            "@type": "ImageObject",
            "url": "https://karanganyarmalang.com/logo_karanganyar.png"
        }
    },
    "datePublished": article.tanggal_publish,
    "dateModified": article.updated_at,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://karanganyarmalang.com/berita/${article.slug}`
    }
});

export default JsonLd;