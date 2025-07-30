import React, { useRef } from 'react';
import { useForm } from '@inertiajs/react';
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';
import KirimIcon from '../../assets/Home/icons/KirimIcon.png';

const AdminStatistikPenduduk = ({ statistik }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const formRef = useRef(null);

  const { data, setData, put, processing, errors } = useForm({
    jumlah_penduduk: statistik?.jumlah_penduduk || 0,
    jumlah_kepala_keluarga: statistik?.jumlah_kepala_keluarga || 0,
    jumlah_pria: statistik?.jumlah_pria || 0,
    jumlah_wanita: statistik?.jumlah_wanita || 0,
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put('/admin/statistik-penduduk', {
      onSuccess: () => {
        console.log('Statistik penduduk berhasil diperbarui');
      },
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
              <h1 className="text-2xl sm:text-[40px] font-bold text-center mb-6">
                Kelola Statistik Penduduk
              </h1>
              <div className="border-t border-black/40 w-full mb-10"></div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row flex-wrap gap-10"
              >
                <div className="flex flex-col gap-6 w-full md:w-[500px]">
                  <div>
                    <label className="text-base sm:text-[18px] font-semibold mb-2 block">
                      Jumlah Penduduk
                    </label>
                    <input
                      type="number"
                      value={data.jumlah_penduduk}
                      onChange={(e) =>
                        setData('jumlah_penduduk', parseInt(e.target.value) || 0)
                      }
                      placeholder="Masukkan jumlah penduduk"
                      className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                    />
                    {errors.jumlah_penduduk && (
                      <p className="text-red-500 text-sm mt-1">{errors.jumlah_penduduk}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-base sm:text-[18px] font-semibold mb-2 block">
                      Jumlah Kepala Keluarga
                    </label>
                    <input
                      type="number"
                      value={data.jumlah_kepala_keluarga}
                      onChange={(e) =>
                        setData('jumlah_kepala_keluarga', parseInt(e.target.value) || 0)
                      }
                      placeholder="Masukkan jumlah kepala keluarga"
                      className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                    />
                    {errors.jumlah_kepala_keluarga && (
                      <p className="text-red-500 text-sm mt-1">{errors.jumlah_kepala_keluarga}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-base sm:text-[18px] font-semibold mb-2 block">
                      Jumlah Pria
                    </label>
                    <input
                      type="number"
                      value={data.jumlah_pria}
                      onChange={(e) =>
                        setData('jumlah_pria', parseInt(e.target.value) || 0)
                      }
                      placeholder="Masukkan jumlah pria"
                      className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                    />
                    {errors.jumlah_pria && (
                      <p className="text-red-500 text-sm mt-1">{errors.jumlah_pria}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-base sm:text-[18px] font-semibold mb-2 block">
                      Jumlah Wanita
                    </label>
                    <input
                      type="number"
                      value={data.jumlah_wanita}
                      onChange={(e) =>
                        setData('jumlah_wanita', parseInt(e.target.value) || 0)
                      }
                      placeholder="Masukkan jumlah wanita"
                      className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                    />
                    {errors.jumlah_wanita && (
                      <p className="text-red-500 text-sm mt-1">{errors.jumlah_wanita}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-[400px] justify-center items-center">
                  <div className="text-center p-6 sm:p-8 bg-gray-50 rounded-lg w-full">
                    <h3 className="text-lg font-semibold mb-4">Preview Data</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Total Penduduk:</strong>{' '}
                        {data.jumlah_penduduk.toLocaleString('id-ID')}
                      </p>
                      <p>
                        <strong>Kepala Keluarga:</strong>{' '}
                        {data.jumlah_kepala_keluarga.toLocaleString('id-ID')}
                      </p>
                      <p>
                        <strong>Pria:</strong>{' '}
                        {data.jumlah_pria.toLocaleString('id-ID')}
                      </p>
                      <p>
                        <strong>Wanita:</strong>{' '}
                        {data.jumlah_wanita.toLocaleString('id-ID')}
                      </p>
                      <div className="mt-4 pt-4 border-t">
                        <p
                          className={`text-sm ${
                            data.jumlah_pria + data.jumlah_wanita === data.jumlah_penduduk
                              ? 'text-green-600'
                              : 'text-red-600'
                          }`}
                        >
                          Validasi:{' '}
                          {data.jumlah_pria + data.jumlah_wanita === data.jumlah_penduduk
                            ? '✓ Valid'
                            : '✗ Pria + Wanita ≠ Total'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row justify-end gap-4 mt-6">
                  <button
                    type="submit"
                    disabled={processing}
                    className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity w-full sm:w-auto"
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

export default AdminStatistikPenduduk;
