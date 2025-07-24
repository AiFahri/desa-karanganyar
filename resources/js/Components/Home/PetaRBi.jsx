import React from "react";
import imgpetaRBI from "../../../assets/Home/img/imgpetaRBI.png";

const PetaRBI = ({ backgroundIMG }) => {
    return (
        // Section 1: Main container
        // Uses flexbox to center content vertically and horizontally.
        // Responsive padding `p-` is used instead of percentage `py-[]`.
        <div
            className="h-full md:min-h-screen max-h-screen w-full flex items-start lg:items-center justify-center p-6 sm:p-12"
            style={{
                backgroundImage: `url(${backgroundIMG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // backgroundAttachment: 'fixed', // Optional: for a parallax effect
            }}
        >
            {/* Section 2: Content wrapper */}
            {/* Provides a max-width to prevent content from becoming too wide on large screens. */}
            {/* `w-full` ensures it fills the padded space on smaller screens. */}
            {/* `flex-col` stacks the title and image vertically with a responsive gap. */}
            <div className="w-full max-w-5xl flex flex-col items-center gap-y-8 md:gap-y-12">
                {/* Section 3: Title */}
                {/* Uses responsive text sizes (e.g., `text-3xl` on small screens, `lg:text-5xl` on large). */}
                <h1 className="font-sans text-blue-800 font-bold text-center text-3xl sm:text-4xl lg:text-5xl drop-shadow-xl">
                    Peta Desa Karanganyar
                </h1>

                {/* Section 4: Image */}
                {/* `w-full` and `h-auto` make the image scale responsively within its container. */}
                {/* `object-contain` ensures the entire image is visible without being cropped. */}
                {/* <img
          src={imgpetaRBI}
          alt="Peta Rupa Bumi Indonesia Tahun 2022" // Best practice: Add descriptive alt text for accessibility
          className="w-full h-auto object-contain"
        /> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18002.44546077551!2d112.75638044999998!3d-8.075874500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62478ae2bb219%3A0x6812d843c866d6cb!2sKaranganyar%2C%20Kec.%20Poncokusumo%2C%20Kabupaten%20Malang%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1753201447698!5m2!1sid!2sid"
                    width="1400"
                    height="700"
                    style={{ border: 1, maxWidth: "75vw", }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="rounded-xl overflow-hidden"
                ></iframe>
            </div>
        </div>
    );
};

export default PetaRBI;
