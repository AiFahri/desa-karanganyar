import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import React from 'react'

const SubPotensi = () => {
  return (
    <div className=''>
      <Navbar />
        <header className="w-full bg-gradient-to-b from-blue-500 to-cyan-400 py-11 px-8 shadow-md sticky top-0 z-10 max-h-28">
          <div className="max-w-[100vw] mx-auto">
            <Link href="/portal" className="flex items-center space-x-2 text-white font-bold text-lg hover:opacity-80 transition-opacity">
              <ArrowLeftIcon className="w-8 h-8" />
              <span className='text-3xl font-sans'>Kembali</span>
            </Link>
          </div>
        </header>
      <Footer />
    </div>
  )
}

export default SubPotensi