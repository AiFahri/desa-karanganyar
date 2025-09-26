import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-[200px] p-8 bg-gray-50 rounded-lg">
                    <div className="text-red-600 text-2xl mb-4">⚠️</div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Oops! Terjadi kesalahan
                    </h2>
                    <p className="text-gray-600 text-center mb-4">
                        Maaf, terjadi masalah saat memuat konten. Silakan refresh halaman.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-[#0272BA] text-white rounded-lg hover:bg-[#025a8f] transition-colors"
                    >
                        Refresh Halaman
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
