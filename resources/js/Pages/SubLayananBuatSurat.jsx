import React from 'react'
import { circInOut, easeInOut, motion } from "framer-motion";
import { Link } from '@inertiajs/react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import View from '@/Components/Layanan/View'
import BuatSurat from '@/Components/Layanan/BuatSurat';

const SubLayananBuatSurat = () => {
  return (
        <>
            <Navbar />
            <BuatSurat />
            
        </>
  )
}

export default SubLayananBuatSurat
            
      