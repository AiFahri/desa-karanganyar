import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

// --- SVG Icons (self-contained for easy use) ---

const FamilyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 34.6667C37.8914 34.6667 42.6667 29.8914 42.6667 24C42.6667 18.1086 37.8914 13.3333 32 13.3333C26.1086 13.3333 21.3333 18.1086 21.3333 24C21.3333 29.8914 26.1086 34.6667 32 34.6667Z" fill="#2E86C1"/>
    <path d="M48 50.6667C48 43.968 40.8787 38.6667 32 38.6667C23.1213 38.6667 16 43.968 16 50.6667H48Z" fill="#2E86C1"/>
    <path d="M51.2,29.3333A8,8,0,1,0,39.4667,24,8,8,0,0,0,51.2,29.3333Z" fill="#FADBD8"/>
    <path d="M56,42.6667c0-3.5347-3.5813-6.4-8-6.4s-8,2.8653-8,6.4Z" fill="#FADBD8"/>
    <path d="M21.3333,40a5.3333,5.3333,0,1,0-10.6666,0A5.3333,5.3333,0,0,0,21.3333,40Z" fill="#EC7063"/>
    <path d="M24,50.6667c0-2.651-2.388-4.8-5.3333-4.8S13.3333,48.0157,13.3333,50.6667Z" fill="#EC7063"/>
  </svg>
);

const MaleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="24" r="12" fill="#2ECC71"/>
    <path d="M48 53.3333C48 45.418 40.8787 38.6667 32 38.6667C23.1213 38.6667 16 45.418 16 53.3333H48Z" fill="#2ECC71"/>
  </svg>
);

const FemaleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="24" r="12" fill="#E67E22"/>
    <path d="M50 53.3333C50 44 42 38.6667 32 38.6667C22 38.6667 14 44 14 53.3333Z" fill="#E67E22"/>
    <path d="M20 24 C 20 12, 44 12, 44 24" fill="#D35400"/>
  </svg>
);

const HouseholdIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="24" r="12" fill="#16A085"/>
    <path d="M48 53.3333C48 45.418 40.8787 38.6667 32 38.6667C23.1213 38.6667 16 45.418 16 53.3333H48Z" fill="#16A085"/>
    <path d="M32 38.6667L36 48L32 52L28 48L32 38.6667Z" fill="#E74C3C"/>
    <path d="M32 38.6667L26 38.6667L28 48H36L38 38.6667H32Z" fill="#f8f9fa"/>
  </svg>
);


// --- Reusable Stat Item Component ---
const StatItem = ({ icon, value, label, bgColor }) => (
  <div className="flex flex-col items-center text-center">
    <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-md ${bgColor}`}>
      {icon}
    </div>
    <p className="text-2xl font-bold mt-3 text-gray-800">{value.toLocaleString('id-ID')}</p>
    <p className="text-sm font-semibold text-gray-600">{label}</p>
  </div>
);

// --- Main Component ---
export const PopulationStats = ({ stats }) => {

  const chartData = [
    { name: 'Pria', Jumlah: stats.male },
    { name: 'Wanita', Jumlah: stats.female },
    { name: 'Kepala Keluarga', Jumlah: stats.households },
    { name: 'Jumlah Penduduk', Jumlah: stats.totalPopulation },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Informasi Statistik Penduduk Desa {stats.villageName}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Grafik berikut menunjukkan data jumlah kepala keluarga, penduduk laki-laki, perempuan, dan total penduduk di Desa {stats.villageName}, Kecamatan {stats.district} selama bulan {stats.month} {stats.year}.
          </p>
        </div>

        {/* Main Content: Chart and Icons */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-8">
          
          {/* Left Side: Chart */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-blue-600 p-5 text-white">
                <span className="bg-blue-500 text-xs font-semibold px-3 py-1 rounded-full">Statistik Penduduk</span>
                <h2 className="text-2xl font-bold mt-2">Desa {stats.villageName}</h2>
                <p className="text-sm opacity-90">Kecamatan {stats.district}, Kabupaten {stats.regency}</p>
              </div>
              <div className="p-4 h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 30, right: 0, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#666' }} />
                    <YAxis tick={{ fontSize: 12, fill: '#666' }} />
                    <Tooltip cursor={{fill: 'rgba(236, 240, 241, 0.5)'}}/>
                    <Bar dataKey="Jumlah" fill="#0284c7" barSize={100}>
                       <LabelList 
                         dataKey="Jumlah" 
                         position="top" 
                         formatter={(value) => value.toLocaleString('id-ID')}
                         style={{ fill: '#333', fontSize: 12 }} 
                       />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Side: Icons */}
          <div className="w-full lg:w-2/5 flex items-center justify-center">
             <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-8">
                <StatItem 
                    icon={<FamilyIcon />}
                    value={stats.totalPopulation}
                    label="Jumlah Penduduk"
                    bgColor="bg-purple-100"
                />
                <StatItem 
                    icon={<MaleIcon />}
                    value={stats.male}
                    label="Pria"
                    bgColor="bg-green-100"
                />
                <StatItem 
                    icon={<HouseholdIcon />}
                    value={stats.households}
                    label="Kepala Keluarga"
                    bgColor="bg-teal-100"
                />
                <StatItem 
                    icon={<FemaleIcon />}
                    value={stats.female}
                    label="Wanita"
                    bgColor="bg-orange-100"
                />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};


// --- Example Usage ---

// export default function App() {
//   // You can fetch this data from an API or define it statically
//   const karanganyarStats = {
//     villageName: "Karanganyar",
//     district: "Poncokusumo",
//     regency: "Malang",
//     month: "Mei",
//     year: 2025,
//     totalPopulation: 7989,
//     male: 4072,
//     female: 3917,
//     households: 2472,
//   };

//   return <PopulationStats stats={karanganyarStats} />;
// }

export default PopulationStats;