import React from 'react'
import heroBG from '../../assets/img/hero_bg.png'
import { Link } from '@inertiajs/react'

const Hero = () => {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <img src={heroBG} className='absolute w-full max-w-[100dvw] max-h-[100dvh] top-0 object-cover' />
        <div className='flex flex-row justify-between items-center px-16'>
          <div className='flex flex-col w-full max-w-[640px]'>
            <div className="text-white font-sans">Desa Karanganyar</div>
            <div className="text-white font-sans">Kecamatan Poncokusumo, Kabupaten Malang, Jawa Timur</div>
            <Link className="text-xl font-normal px-10 py-6 text-center max-w-fit text-white font-sans bg-gradient-to-b from-[#0272BA] to-[#95CFF4]" href="/profildesa">Yuk Jelajahi</Link>
          </div>
          <div className=''>Placeholder</div>
        </div>
      </div>
    </div>
  )
}

export default Hero