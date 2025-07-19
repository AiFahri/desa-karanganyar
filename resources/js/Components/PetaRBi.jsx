import React from 'react';
import CardViewLogo from '../../assets/img/CardViewLogo.png';

const PetaRBI = () => {
  return (
    <>
    <section className='relative w-full h-full min-h-dvh'>
      <img src={bgCardView} className='absolute max-w-full z-0'/>
      <img src={CardViewLogo} className='absolute left-[13.5vw] top-[13.88vh] max-w-[72.9vw] h-auto z-20'/> 
      <div className='absolute left-[13.5vw] top-[13.88vh] max-w-[72.9vw] h-auto z-50'>
        <div className='flex flex-row justify-between items-center px-[9%] pt-[18.87vh]'>
          <div className="flex">
            <img src={logoCardView} className='max-w-[20.833vw] max-h-[20.833vw]'></img>
          </div>
          <div className="flex flex-col items-start max-w-[50%]">
            <p className='text-5xl font-sans text-[#0272BA] font-bold mb-6 drop-shadow-md bg-transparent'>Desa Karanganyar</p>
            <div className='text-2xl font-sans text-[#0272BA] text-justify font-semibold'>
              Desa Karanganyar terletak di kaki Gunung Semeru, terkenal akan pesona alamnya yang asri dan udara pegunungan yang sejuk. Dikelilingi hamparan kebun apel, perkebunan sayur, serta pemandangan hijau yang memanjakan mata, desa ini menjadi titik singgah favorit wisatawan sebelum menuju kawasan Taman Nasional Bromo Tengger Semeru. Karanganyar juga dikenal dengan suasana pedesaan yang ramah dan tradisi budaya lokal yang masih terjaga, membuat setiap kunjungan terasa hangat dan berkesan.
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default PetaRBI