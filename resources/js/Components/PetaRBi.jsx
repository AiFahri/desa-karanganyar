import React from 'react';
import logoCardView from '../../assets/img/logoCardView.png';
import imgpetaRBI from '../../assets/img/imgpetaRBI.png';


const PetaRBI = ({backgroundIMG}) => {
  return (
    <>
    <section
    style={{
      backgroundImage: `url(${backgroundIMG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}  
    className='relative w-full h-full min-h-dvh'>
      <img src={backgroundIMG} className='absolute max-w-full z-0'/>
      <div className='absolute left-[13.5vw] max-w-[70vw] h-auto z-40 w-full'>
        <div className='flex flex-col justify-between items-center px-[9%] pt-[18.87vh] mx-auto w-full gap-y-12'>
          <div className="flex">
            <p className='font-sans text-blue-800 text-5xl font-bold drop-shadow-xl'>Peta Rupa Bumi Indonesia 2022</p>
          </div>
          <div className="flex">
            <img src={imgpetaRBI} className='max-w-[70vw] max-h-[70vh]'></img>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default PetaRBI