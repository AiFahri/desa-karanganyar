import React from 'react';
import imgpetaRBI from '../../../assets/Home/img/imgpetaRBI.png';

const PetaRBI = ({ backgroundIMG }) => {
  return (
    // Section 1: Main container
    // Uses flexbox to center content vertically and horizontally.
    // Responsive padding `p-` is used instead of percentage `py-[]`.
    <div
      className="min-h-screen w-full flex items-center justify-center p-6 sm:p-12"
      style={{
        backgroundImage: `url(${backgroundIMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
          Peta Rupa Bumi Indonesia 2022
        </h1>

        {/* Section 4: Image */}
        {/* `w-full` and `h-auto` make the image scale responsively within its container. */}
        {/* `object-contain` ensures the entire image is visible without being cropped. */}
        <img
          src={imgpetaRBI}
          alt="Peta Rupa Bumi Indonesia Tahun 2022" // Best practice: Add descriptive alt text for accessibility
          className="w-full h-auto object-contain"
        />

      </div>
    </div>
  );
};

export default PetaRBI;