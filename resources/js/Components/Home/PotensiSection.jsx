import React from "react";
import Card from "../Card";
import { dummyPotensi } from "../../data/dummyPotensi";

const PotensiSection = ({ id, className = "", headerTitle }) => {
    return (
        <section
            id={id}
            className={`relative pb-20 bg-gradient-to-br from-stone-50 to-stone-50${className}`}
        >
            <div className="relative z-10 container mx-auto px-4">
                <p className="text-[44px] pb-16 font-sans text-[#0272BA] font-semibold text-center">
                  {headerTitle}
                </p>

                <div className="z-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-x-24 lg:gap-y-24 justify-items-center max-w-6xl mx-auto">
                    {dummyPotensi.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>

                {/* <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4 opacity-30">
            <div className="w-16 h-0.5 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            <div className="w-16 h-0.5 bg-amber-600"></div>
          </div>
        </div> */}
            </div>
        </section>
    );
};

export default PotensiSection;
