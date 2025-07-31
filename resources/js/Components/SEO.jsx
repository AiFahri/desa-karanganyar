import { Head } from '@inertiajs/react';
import React from 'react';

const SEO = ({ 
    title = 'Desa Karanganyar - Kecamatan Poncokusumo Kabupaten Malang',
    description = 'Website resmi Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang. Informasi layanan desa, berita, pengumuman, dan potensi desa.',
    keywords = 'Desa Karanganyar, Poncokusumo, Malang, Layanan Desa, UMKM Karanganyar',
    ogImage = '/logo_karanganyar.png',
    url = null
}) => {
    const currentUrl = url || window.location.href;
    
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
            
            <link rel="canonical" href={currentUrl} />
        </Head>
    );
};

export default SEO;