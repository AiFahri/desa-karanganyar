import { Head } from '@inertiajs/react';
import React from 'react';

const SEO = ({ 
    title = 'Desa Karanganyar - Kecamatan Poncokusumo Kabupaten Malang | Website Resmi Pemerintahan Desa',
    description = 'Website resmi Pemerintahan Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang, Jawa Timur. Layanan administrasi desa, berita terkini, pengumuman resmi, dan informasi potensi UMKM desa.',
    keywords = 'Desa Karanganyar, Poncokusumo, Malang, Jawa Timur, Website Desa, Pemerintahan Desa, Layanan Desa, UMKM Karanganyar, Berita Desa, Pengumuman Desa, Administrasi Desa',
    ogImage = 'https://karanganyarmalang.com/logo_karanganyar.png',
    url = null,
    type = 'website',
    publishedTime = null,
    modifiedTime = null,
    author = 'Pemerintahan Desa Karanganyar',
    section = 'Pemerintahan Desa',
    tags = ['Desa Karanganyar', 'Poncokusumo', 'Malang', 'Jawa Timur']
}) => {
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://karanganyarmalang.com');
    const siteName = 'Website Resmi Desa Karanganyar';
    const twitterHandle = '@desa_karanganyar';
    
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="google-site-verification" content="nNid45i1fMitMrc7SoM9tQc2aJrhfvtLXDuHxHZTdEU" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            
            <link rel="canonical" href={currentUrl} />
            
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Logo Resmi Desa Karanganyar" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="id_ID" />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={twitterHandle} />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content="Logo Resmi Desa Karanganyar" />
            
            <meta name="geo.region" content="ID-JI" />
            <meta name="geo.placename" content="Desa Karanganyar, Poncokusumo, Malang, Jawa Timur" />
            <meta name="geo.position" content="-7.7971;112.6337" />
            <meta name="ICBM" content="-7.7971, 112.6337" />
            
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {section && <meta property="article:section" content={section} />}
            {tags.map(tag => (
                <meta key={tag} property="article:tag" content={tag} />
            ))}
            
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://is3.cloudhost.id" />
            
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            
            <meta name="theme-color" content="#0272BA" />
            <meta name="msapplication-TileColor" content="#0272BA" />
            
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            
            <meta httpEquiv="Content-Language" content="id" />
            <meta charSet="utf-8" />
            
            <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
            <meta httpEquiv="X-Frame-Options" content="DENY" />
            <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        </Head>
    );
};

export default SEO;