import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 text-center px-4">
                Selamat Datang di Website Desa Karanganyar!
            </h1>
            <p className="text-lg text-gray-700 mb-10 text-center px-4 max-w-2xl">
            </p>

            <div className="w-full flex justify-center items-center px-4 sm:px-0"> 
                {children}
            </div>
        </div>
    );
}