import React, { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';
import KirimIcon from '../../assets/Home/icons/KirimIcon.png';

const AdminStatistikWilayah = ({ statistik }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const formRef = useRef(null);

  const { data, setData, put, processing, errors, reset } = useForm({
    luas_wilayah: statistik?.luas_wilayah || 0,
    jumlah_dusun: statistik?.jumlah_dusun || 0,
    jumlah_rw: statistik?.jumlah_rw || 0,
    jumlah_rt: statistik?.jumlah_rt || 0,
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put('/admin/statistik-wilayah', {
      onSuccess: () => {
        console.log('Statistik wilayah berhasil diperbarui');
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#EBE6E6] font-sans flex flex-col">
      <NavbarAdmin toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        {sidebarOpen && <SidebarAdmin />}

        <main className="flex-1 p-4 sm:p-6">
          <div className="bg-white rounded-lg shadow border border-[#D9D9D9] px-4 sm:px-12 py-6 sm:py-10 max-w-full sm:max-w-[1400px] mx-auto">
            <div ref={formRef}>
              <h1 className="text-[32px] sm:text-[40px] font-bold text-center mb-6">
                Kelola Statistik Wilayah
              </h1>
              <div className="border-t border-black/40 w-full mb-10"></div>

              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row flex-wrap gap-10">
                <div className="flex flex-col gap-6 w-full md:w-[500px]">
                  <div>
                    <label className="text-[18px] font-semibold mb-2 block">Luas Wilayah (km²)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={data.luas_wilayah}
                      onChange={(e) => setData('luas_wilayah', parseFloat(e.target.value) || 0)}
                      placeholder="Masukkan luas wilayah dalam km²"
                      className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                    />
                    {errors.luas_wilayah && <p className="text-red-500 text-sm mt-1">{errors.luas_wilayah}</p>}
                  </div>

                  <div>
                    <label className="text-[18px] font-semibold mb-2 block">Jumlah Dusun</label>
                    <input
                      type="number"
                      value={data.jumlah_dusun}
                      onChange={(e) => setData('jumlah_dusun', parseInt(e.target.value) || 0)}
                      placeholder="Masukkan jumlah dusun"
                      className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                    />
                    {errors.jumlah_dusun && <p className="text-red-500 text-sm mt-1">{errors.jumlah_dusun}</p>}
                  </div>

                  <div>
                    <label className="text-[18px] font-semibold mb-2 block">Jumlah RW</label>
                    <input
                      type="number"
                      value={data.jumlah_rw}
                      onChange={(e) => setData('jumlah_rw', parseInt(e.target.value) || 0)}
                      placeholder="Masukkan jumlah RW"
                      className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                    />
                    {errors.jumlah_rw && <p className="text-red-500 text-sm mt-1">{errors.jumlah_rw}</p>}
                  </div>

                  <div>
                    <label className="text-[18px] font-semibold mb-2 block">Jumlah RT</label>
                    <input
                      type="number"
                      value={data.jumlah_rt}
                      onChange={(e) => setData('jumlah_rt', parseInt(e.target.value) || 0)}
                      placeholder="Masukkan jumlah RT"
                      className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                    />
                    {errors.jumlah_rt && <p className="text-red-500 text-sm mt-1">{errors.jumlah_rt}</p>}
                  </div>
                </div>

                <div className="w-full md:w-[400px] flex justify-center items-center">
                  <div className="text-center p-6 sm:p-8 bg-gray-50 rounded-lg w-full">
                    <h3 className="text-lg font-semibold mb-4">Preview Data</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Luas Wilayah:</strong> {data.luas_wilayah} km²</p>
                      <p><strong>Jumlah Dusun:</strong> {data.jumlah_dusun}</p>
                      <p><strong>Jumlah RW:</strong> {data.jumlah_rw}</p>
                      <p><strong>Jumlah RT:</strong> {data.jumlah_rt}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row justify-end gap-4 mt-6">
                  <button
                    type="submit"
                    disabled={processing}
                    className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                    style={{
                      background: 'linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)',
                    }}
                  >
                    {processing ? 'Loading...' : 'Perbarui Data'}
                    <img src={KirimIcon} alt="Kirim Icon" className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminStatistikWilayah;
