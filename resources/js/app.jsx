import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';

const appName = import.meta.env.VITE_APP_NAME;
const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

// Initialize Google Analytics
ReactGA.initialize(GA_TRACKING_ID);

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// Track page views on navigation
document.addEventListener('inertia:navigate', (event) => {
    ReactGA.send({ 
        hitType: "pageview", 
        page: window.location.pathname,
        title: event.detail.page.props.title || document.title
    });
});


