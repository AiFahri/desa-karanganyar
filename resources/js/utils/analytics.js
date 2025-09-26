// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.VITE_GA_TRACKING_ID;

// Initialize Google Analytics
export const initGA = () => {
    if (typeof window !== 'undefined' && GA_TRACKING_ID) {
        // Google Analytics 4
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GA_TRACKING_ID, {
            page_title: document.title,
            page_location: window.location.href,
        });
        
        // Add GA script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
        document.head.appendChild(script);
        
        window.gtag = gtag;
    }
};

// Track page views
export const trackPageView = (url) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
    trackEvent('form_submit', 'engagement', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
    trackEvent('button_click', 'engagement', buttonName);
};

// Track external links
export const trackExternalLink = (url) => {
    trackEvent('external_link', 'engagement', url);
};

// Track search queries
export const trackSearch = (query) => {
    trackEvent('search', 'engagement', query);
};

// Track video views
export const trackVideoView = (videoTitle) => {
    trackEvent('video_view', 'engagement', videoTitle);
};

// Track file downloads
export const trackDownload = (fileName) => {
    trackEvent('file_download', 'engagement', fileName);
};
