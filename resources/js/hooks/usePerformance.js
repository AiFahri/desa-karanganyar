import { useEffect, useCallback } from 'react';

export const usePerformance = () => {
    // Preload critical resources
    const preloadResource = useCallback((url, type = 'image') => {
        if (type === 'image') {
            const img = new Image();
            img.src = url;
        } else if (type === 'script') {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    // Intersection Observer for lazy loading
    const useIntersectionObserver = useCallback((callback, options = {}) => {
        useEffect(() => {
            const observer = new IntersectionObserver(callback, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
                ...options
            });

            return () => observer.disconnect();
        }, [callback, options]);
    }, []);

    // Debounce function for performance
    const debounce = useCallback((func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }, []);

    // Throttle function for performance
    const throttle = useCallback((func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }, []);

    return {
        preloadResource,
        useIntersectionObserver,
        debounce,
        throttle
    };
};
