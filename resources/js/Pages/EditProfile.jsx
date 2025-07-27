import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

// SVG Icon for the user avatar
const UserAvatarIcon = () => (
  <svg
    className="w-16 h-16 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    ></path>
  </svg>
);

// SVG Icon for showing the password
const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-gray-500"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// SVG Icon for hiding the password
const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-gray-500"
  >
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);


// Main Profile Form Component
function ProfileForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen flex flex-col items-center pt-[76px]">
      <header className="w-full bg-gradient-to-b from-blue-500 to-cyan-400 py-11 px-8 shadow-md sticky top-0 z-10 max-h-28">
        <div className="max-w-[100vw] mx-auto">
          <Link href="/portal" className="flex items-center space-x-2 text-white font-bold text-lg hover:opacity-80 transition-opacity">
            <ArrowLeftIcon className="w-8 h-8" />
            <span className='text-3xl font-sans'>Kembali</span>
          </Link>
        </div>
      </header>
      <div className="w-full max-w-3xl mx-auto pt-24">
        {/* User Profile Header */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            <UserAvatarIcon />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Alexa Rawles</h1>
            <p className="text-gray-500">alexarawles@gmail.com</p>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          {/* NIK Input */}
          <div>
            <label htmlFor="nik" className="block text-sm font-medium text-gray-700 mb-1">
              NIK
            </label>
            <input
              type="text"
              id="nik"
              name="nik"
              readOnly
              defaultValue="3576021301990002"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue="alexarawles@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Nomor HP
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue="+6281234567890"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                defaultValue="••••••••••"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-4 pt-4">
            <Link href={'/riwayat-pengajuan'}>
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300"
            >
              Riwayat Pengajuan Surat
            </button>
            </Link>
            <Link href={'/lupa-password'}>
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition-colors duration-300"
            >
              Lupa Password
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default function App() {
  return <ProfileForm />;
}
