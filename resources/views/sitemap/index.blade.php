{!! '<'.'?xml version="1.0" encoding="UTF-8"?'.'>' !!}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    
    {{-- Static Pages --}}
    @foreach ($staticPages as $page)
    <url>
        <loc>{{ $page['url'] }}</loc>
        <lastmod>{{ $page['lastmod'] }}</lastmod>
        <changefreq>{{ $page['changefreq'] }}</changefreq>
        <priority>{{ $page['priority'] }}</priority>
    </url>
    @endforeach
    
    {{-- Berita --}}
    @foreach ($berita as $item)
    <url>
        <loc>{{ url('/berita/' . $item->slug) }}</loc>
        <lastmod>{{ $item->updated_at->toISOString() }}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
        @if($item->gambar)
        <image:image>
            <image:loc>{{ url('/storage/' . $item->gambar) }}</image:loc>
            <image:title>{{ $item->judul }}</image:title>
            <image:caption>{{ strip_tags($item->deskripsi) }}</image:caption>
        </image:image>
        @endif
    </url>
    @endforeach
    
    {{-- Pengumuman --}}
    @foreach ($pengumuman as $item)
    <url>
        <loc>{{ url('/pengumuman/' . $item->slug) }}</loc>
        <lastmod>{{ $item->updated_at->toISOString() }}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    @endforeach
    
    {{-- UMKM --}}
    @foreach ($umkm as $item)
    <url>
        <loc>{{ url('/sub-umkm/' . $item->slug) }}</loc>
        <lastmod>{{ $item->updated_at->toISOString() }}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
        @if($item->gambar_path)
        <image:image>
            <image:loc>{{ 'https://is3.cloudhost.id/karanganyar/' . $item->gambar_path }}</image:loc>
            <image:title>{{ $item->merk_dagang }}</image:title>
            <image:caption>{{ $item->deskripsi_singkat }}</image:caption>
        </image:image>
        @endif
    </url>
    @endforeach
</urlset>