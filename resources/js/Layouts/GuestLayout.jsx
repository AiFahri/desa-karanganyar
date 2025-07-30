import { Link } from "@inertiajs/react";
import Animation from "@/Components/Animation";

export default function Guest({ children, description }) {
    return (
        <Animation delay={0.2}>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-16 pb-6  lg:pt-0 bg-gray-100 px-2 sm:px-4 lg:px-6 xl:px-8 xl:py-16">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-blue-800 mb-3 sm:mb-4 lg:mb-6 text-center px-2 sm:px-4 leading-tight">
                    Selamat Datang di Website Desa Karanganyar!
                </h1>
                {description && (
                    <p className="text-sm sm:text-base lg:text-lg xl:text-lg text-gray-700 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 text-center px-2 sm:px-4 lg:px-6 max-w-sm sm:max-w-lg lg:max-w-2xl xl:max-w-4xl leading-relaxed">
                        {description}
                    </p>
                )}

                <div className="w-full flex justify-center items-center px-2 sm:px-4 lg:px-6 xl:px-8">
                    {children}
                </div>
            </div>
        </Animation>
    );
}
