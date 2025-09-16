import React from "react";

const InfiniteGalleryFallback = ({ items }) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 p-4">
            {items.map((item, index) => (
                <div key={index} className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                    {item.content}
                </div>
            ))}
        </div>
    );
};

export default InfiniteGalleryFallback;
