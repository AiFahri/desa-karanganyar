import React from "react";
import { motion, scale } from "motion/react";

const DesaKaranganyar = ({ backgroundIMG, logo }) => {

  const container = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  const item = {
    hidden: { scale: 0 },
    show: { scale: 1 }
  }

  return (
    <motion.div
      className="h-full lg:min-h-screen max-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 mt-0"
      initial="hidden"
      animate="show"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      style={{
                    backgroundImage: `url(${backgroundIMG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1400px] bg-transparent lg:bg-white lg:rounded-2xl lg:shadow-2xl overflow-hidden mt-0 lg:mt-0">

        
        <motion.div 
        className="hidden lg:flex h-10 bg-blue-500 rounded-t-lg items-center px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={container}
        >
          <motion.div variants={item} className="w-3 h-3 rounded-full bg-red-400 mr-1.5" />
          <motion.div variants={item} className="w-3 h-3 rounded-full bg-yellow-400 mr-1.5" />
          <motion.div variants={item} className="w-3 h-3 rounded-full bg-green-500" />
          
          <motion.div variants={item} className="hidden lg:flex flex-1 justify-center px-4">
            <div className="bg-white border border-gray-200 rounded-md px-4 py-0.5 text-xs text-gray-700 w-full max-w-md text-center truncate">
              Desa Karanganyar
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
        className="flex flex-col lg:flex-row p-6 sm:p-8 lg:p-32 gap-8 items-center justify-between w-full pt-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        >
          <motion.div 
          className="flex-shrink-0 w-1/2 sm:w-1/3 lg:w-[21vw] max-h-[480px]"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          >
            <img
              src={logo}
              alt="Logo Desa Karanganyar"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div 
          className="flex-1 text-center lg:text-left max-w-[640px] self-start"
          transition={{ delay: 0.5 }}
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          >
            <h1 className="text-blue-600 text-3xl sm:text-4xl lg:text-5xl font-sans font-bold mb-4">
              Desa Karanganyar
            </h1>
            <p className="text-blue-800 text-base text-justify sm:text-lg lg:text-2xl font-sans font-semibold leading-relaxed mx-auto lg:mx-0 pb-10 lg:pb-0">
            Desa Karanganyar, Kecamatan Poncokusumo, dikenal sebagai kawasan pertanian subur yang menghasilkan beragam komoditas unggulan seperti tomat, jagung, kubis, cabai, timun, dan jeruk. Didukung oleh kondisi geografis yang sejuk dan tanah yang subur, aktivitas bercocok tanam menjadi bagian tak terpisahkan dari kehidupan masyarakat desa. Setiap hamparan lahan diisi dengan tanaman hortikultura yang tumbuh subur sepanjang tahun. Potensi ini tak hanya memperkuat perekonomian warga, tetapi juga mempercantik lanskap desa. Karanganyar tumbuh sebagai desa agraris yang mandiri, hijau, dan lestari.             </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DesaKaranganyar;
