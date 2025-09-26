import React from "react";

const LoadingSpinner = ({ size = "md", color = "blue" }) => {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-8 w-8", 
        lg: "h-12 w-12",
        xl: "h-16 w-16"
    };

    const colorClasses = {
        blue: "border-[#0272BA]",
        white: "border-white",
        gray: "border-gray-400"
    };

    return (
        <div className="flex justify-center items-center py-8">
            <div 
                className={`animate-spin rounded-full border-2 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}
                role="status"
                aria-label="Loading"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingSpinner;
