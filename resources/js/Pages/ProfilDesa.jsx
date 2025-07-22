import React from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import PetaRBI from '@/Components/Profile/PetaRBi'
import VisiMisi from '@/Components/Profile/VisiMisi'
import PopulationStats from '@/Components/Profile/StatsPenduduk'
import Perangkat from '@/Components/Profile/Perangkat'

const karanganyarStats = {
  villageName: "Karanganyar",
  district: "Poncokusumo",
  regency: "Malang",
  month: "Mei",
  year: 2025,
  totalPopulation: 7989,
  male: 4072,
  female: 3917,
  households: 2472,
};

const ProfilDesa = () => {
  return (
    <>
      <Navbar />
      <PetaRBI />
      <VisiMisi />
      <PopulationStats stats={karanganyarStats} />
      <Perangkat />
      <Footer />
    </>
  )
}

export default ProfilDesa