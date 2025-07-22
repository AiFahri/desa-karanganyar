import React from 'react';

const VisiMisi = () => {
  return (
        
    <div className="min-h-screen bg-gradient-to-br from-sky-300 via-sky-400 to-sky-500 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        
        {/* Visi Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-white text-[#0272BA] text-center py-4">
            <h2 className="text-[44px] font-bold">Visi</h2>
          </div>
          
          <div className="p-6">
            <h3 className="text-[24px] font-bold text-black mb-4 text-start">
              DESA KARANCANYAR "BERHATI EMAS"
            </h3>
            
            <p className="text-[24px] text-black leading-relaxed text-justify">
              Terwujudnya Desa Karanganyar yang Bersih, Harmonis, Akuntabel (dapat dipertanggungjawabkan), Transparan, Inovatif, Egaliter (sama/sederajat), Mandiri, Agamis, dan Sejahtera.
            </p>
          </div>
        </div>

        {/* Misi Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-4">
            <h2 className="text-2xl font-bold">Misi</h2>
          </div>
          
          <div className="p-6">
            <ol className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex">
                <span className="text-[24px] font-bold text-blue-600 mr-3 mt-1">1.</span>
                <span className="text-justify">
                  Mewujudkan pemerintahan yang senantiasa mengayomi, melindungi, dan 
                  melayani dengan jujur dan amanah.
                </span>
              </li>
              
              <li className="flex">
                <span className="font-bold text-blue-600 mr-3 mt-1">2.</span>
                <span className="text-justify">
                  Meningkatkan sinergitas pemerintah desa dengan kelembagaan desa lainnya.
                </span>
              </li>
              
              <li className="flex">
                <span className="font-bold text-blue-600 mr-3 mt-1">3.</span>
                <span className="text-justify">
                  Mempertanggungjawabkan secara hasil kerja pemerintahan desa kepada seluruh 
                  warga masyarakat desa dan Negara Kesatuan Republik Indonesia secara tegas, 
                  jujur, dan prosedural.
                </span>
              </li>
              
              <li className="flex">
                <span className="font-bold text-blue-600 mr-3 mt-1">4.</span>
                <span className="text-justify">
                  Meningkatkan pembangunan yang merata dalam berbagai bidang, baik fisik 
                  maupun nonfisik.
                </span>
              </li>
              
              <li className="flex">
                <span className="font-bold text-blue-600 mr-3 mt-1">5.</span>
                <span className="text-justify">
                  Mengembangkan ide-ide baru yang kreatif dalam berbagai seni budaya, dan 
                  mewujudkan kawasan penyangga pariwisata yang tertata.
                </span>
              </li>
              
              <li className="flex">
                <span className="font-bold text-blue-600 mr-3 mt-1">6.</span>
                <span className="text-justify">
                  Meningkatkan mutu kebersihan lingkungan permukiman, lingkungan 
                  pendidikan, dan pelayanan kesehatan.
                </span>
              </li>
              
              <li className="flex">
                <span className="font-bold text-blue-600 mr-3 mt-1">7.</span>
                <span className="text-justify">
                  Mengembangkan forum komunikasi dengan masyarakat secara terbuka.
                </span>
              </li>
              
              <li className="flex">
                <span className="font-bold text-blue-600 mr-3 mt-1">8.</span>
                <span className="text-justify">
                  Meningkatkan kualitas keimanan dan ketakwaan kepada Tuhan Yang Maha 
                  Esa.
                </span>
              </li>
              
              <li className="flex">
                <span className="font-bold text-blue-600 mr-3 mt-1">9.</span>
                <span className="text-justify">
                  Meningkatkan kemampuan pengelolaan keuangan dan aset desa.
                </span>
              </li>
            </ol>
          </div>
        </div>
        
      </div>
    </div>
  
  )
}

export default VisiMisi;