<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Desa Karanganyar - Kecamatan Poncokusumo Kabupaten Malang') }}</title>
        <meta name="description" content="Website resmi Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang. Informasi layanan desa, berita, pengumuman, dan potensi desa.">
        <meta name="keywords" content="Desa Karanganyar, Poncokusumo, Malang, Layanan Desa, UMKM Karanganyar">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:title" content="{{ config('app.name', 'Desa Karanganyar - Kecamatan Poncokusumo Kabupaten Malang') }}">
        <meta property="og:description" content="Website resmi Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang. Informasi layanan desa, berita, pengumuman, dan potensi desa.">
        <meta property="og:image" content="{{ asset('logo_karanganyar.png') }}">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ url()->current() }}">
        <meta property="twitter:title" content="{{ config('app.name', 'Desa Karanganyar - Kecamatan Poncokusumo Kabupaten Malang') }}">
        <meta property="twitter:description" content="Website resmi Desa Karanganyar, Kecamatan Poncokusumo, Kabupaten Malang. Informasi layanan desa, berita, pengumuman, dan potensi desa.">
        <meta property="twitter:image" content="{{ asset('logo_karanganyar.png') }}">
        
        <link rel="icon" type="image/x-icon" href="/logo_karanganyar.png">
        <link rel="canonical" href="{{ url()->current() }}">

        <!-- Preload critical assets -->
        <link rel="preload" href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" as="style">
        <link rel="preload" href="/logo_karanganyar.png" as="image">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>


