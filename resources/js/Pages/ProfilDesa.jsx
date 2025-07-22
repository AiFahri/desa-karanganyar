import React from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import PetaRBI from '@/Components/Profile/PetaRBi'
import VisiMisi from '@/Components/Profile/VisiMisi'
import Perangkat from '@/Components/Profile/Perangkat'
const ProfilDesa = () => {
  return (
    <>
      <Navbar />
      <PetaRBI />
      <VisiMisi />
      <Perangkat />
      <Footer />
    </>
  )
}

export default ProfilDesa