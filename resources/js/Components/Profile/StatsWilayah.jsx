import React from 'react';

const StatsWilayah = ({ stats }) => {
  const statsData = [
    {
      label: 'Luas Wilayah',
      value: `${stats?.luas_wilayah || 5.43} km²`,
      color: 'text-[#0272BA] font-semibold'
    },
    {
      label: 'Jumlah Dusun',
      value: stats?.jumlah_dusun || 5,
      color: 'text-[#0272BA] font-semibold'
    },
    {
      label: 'Jumlah Penduduk',
      value: `${(stats?.jumlah_penduduk || 8244).toLocaleString('id-ID')} jiwa`,
      color: 'text-[#0272BA] font-semibold'
    },
    {
      label: 'Jumlah RW dan RT',
      value: `${stats?.jumlah_rw || 18} RW dan ${stats?.jumlah_rt || 45} RT`,
      color: 'text-[#0272BA] font-semibold'
    }
  ];

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:mx-0 mx-20 md:my-0 my-12">
          {statsData.map((item, index) => (
            <div key={index} className="text-center bg-white rounded-lg md:p-6 p-2 shadow-[0_0_4px_0_rgba(0,0,0,0.25)]">
              <h3 className={`md:text-[16px] text-[12px] font-medium ${item.color} mb-2`}>
                {item.label}
              </h3>
              <p className="md:text-[18px] text-[10px] font-semibold text-black">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsWilayah;