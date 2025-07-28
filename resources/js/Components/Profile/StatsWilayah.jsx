import React from 'react';

const StatsWilayah = ({ stats }) => {
  const statsData = [
    {
      label: 'Luas Wilayah',
      value: `${stats?.luas_wilayah || 5.43} km²`,
      color: 'text-blue-600'
    },
    {
      label: 'Jumlah Dusun',
      value: stats?.jumlah_dusun || 5,
      color: 'text-blue-600'
    },
    {
      label: 'Jumlah Penduduk',
      value: `${(stats?.jumlah_penduduk || 8244).toLocaleString('id-ID')} jiwa`,
      color: 'text-blue-600'
    },
    {
      label: 'Jumlah RW dan RT',
      value: `${stats?.jumlah_rw || 18} RW dan ${stats?.jumlah_rt || 45} RT`,
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {statsData.map((item, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className={`text-sm font-medium ${item.color} mb-2`}>
                {item.label}
              </h3>
              <p className="text-2xl font-bold text-gray-800">
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