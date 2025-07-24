import React, { useState, useRef } from 'react';
import { useForm } from '@inertiajs/react';
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';
import KirimIcon from '../../assets/Home/icons/KirimIcon.png';

const AdminPengumuman = ({ pengumuman }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const formRef = useRef(null);

  const { data, setData, post, put, delete: destroy, processing, errors, reset } = useForm({
    judul: '',
    waktu_acara: '',
    tempat_acara: '',
    deskripsi: '',
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      const item = pengumuman.data.find(p => p.id === editingId);
      put(`/admin/pengumuman/${item.slug}`, {
        onSuccess: () => {
          reset();
          setEditingId(null);
        }
      });
    } else {
      post('/admin/pengumuman', {
        onSuccess: () => reset()
      });
    }
  };

  const handleEdit = (item) => {
    setData({
      judul: item.judul,
      waktu_acara: item.waktu_acara ? item.waktu_acara.split('T')[0] : '',
      tempat_acara: item.tempat_acara,
      deskripsi: item.deskripsi,
    });
    setEditingId(item.id);
    
    if (formRef.current) {
      formRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const handleDelete = (item) => {
    if (confirm('Yakin ingin menghapus pengumuman ini?')) {
      destroy(`/admin/pengumuman/${item.slug}`, {
        onSuccess: () => {
          console.log('Pengumuman berhasil dihapus');
        }
      });
    }
  };

  const handleCancel = () => {
    reset();
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-[#EBE6E6] font-sans flex flex-col">
      <NavbarAdmin toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        {sidebarOpen && <SidebarAdmin />}

        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow border border-[#D9D9D9] px-12 py-10 max-w-[1400px] mx-auto">
            <div ref={formRef}>
              <h1 className="text-[40px] font-bold text-center mb-6">
                {editingId ? 'Edit Pengumuman' : 'Upload Pengumuman'}
              </h1>
              <div className="border-t border-black/40 w-full mb-10"></div>

              {editingId && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Mode Edit: Sedang mengedit pengumuman
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-wrap gap-10">
                <div className="flex flex-col gap-6 w-[500px]">
                  <div>
                    <label className="text-[18px] font-semibold mb-2 block">Judul Pengumuman</label>
                    <input
                      type="text"
                      value={data.judul}
                      onChange={(e) => setData('judul', e.target.value)}
                      placeholder="Masukkan judul pengumuman"
                      className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                    />
                    {errors.judul && <p className="text-red-500 text-sm mt-1">{errors.judul}</p>}
                  </div>

                  <div>
                    <label className="text-[18px] font-semibold mb-2 block">Waktu Acara</label>
                    <input
                      type="datetime-local"
                      value={data.waktu_acara}
                      onChange={(e) => setData('waktu_acara', e.target.value)}
                      className="w-[300px] h-[50px] px-4 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black"
                    />
                  </div>

                  <div>
                    <label className="text-[18px] font-semibold mb-2 block">Tempat Acara</label>
                    <input
                      type="text"
                      value={data.tempat_acara}
                      onChange={(e) => setData('tempat_acara', e.target.value)}
                      placeholder="Masukkan tempat acara"
                      className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                    />
                    {errors.tempat_acara && <p className="text-red-500 text-sm mt-1">{errors.tempat_acara}</p>}
                  </div>

                  <div>
                    <label className="text-[18px] font-semibold mb-2 block">Deskripsi Pengumuman</label>
                    <textarea
                      rows="6"
                      value={data.deskripsi}
                      onChange={(e) => setData('deskripsi', e.target.value)}
                      placeholder="Berikan penjelasan atau deskripsi di sini"
                      className="w-full px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-[#9A9A9A]"
                    />
                    {errors.deskripsi && <p className="text-red-500 text-sm mt-1">{errors.deskripsi}</p>}
                  </div>
                </div>

                <div className="w-full flex justify-end gap-4 mt-6">
                  {editingId && (
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
                    >
                      Batal
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={processing}
                    className="flex items-center gap-3 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                    style={{
                      background: 'linear-gradient(180deg, #0272BA 0%, #95CFF4 98%)',
                    }}
                  >
                    {processing ? 'Loading...' : editingId ? 'Update' : 'Kirim'}
                    <img src={KirimIcon} alt="Kirim Icon" className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Daftar Pengumuman</h2>
              <div className="space-y-4">
                {pengumuman.data.map((item) => (
                  <div key={item.id} className={`border rounded-lg p-6 transition-colors ${
                    editingId === item.id ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{item.judul}</h3>
                        <p className="text-blue-600 text-sm mb-1">
                          {new Date(item.tanggal_publish).toLocaleDateString('id-ID')}
                        </p>
                        {item.waktu_acara && (
                          <p className="text-gray-600 text-sm mb-1">
                            Waktu: {new Date(item.waktu_acara).toLocaleString('id-ID')}
                          </p>
                        )}
                        <p className="text-gray-600 text-sm mb-2">Tempat: {item.tempat_acara}</p>
                        <p className="text-gray-700">{item.deskripsi}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(item)}
                          disabled={processing}
                          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                            editingId === item.id 
                              ? 'bg-green-500 text-white' 
                              : 'bg-blue-500 text-white hover:bg-blue-600'
                          }`}
                        >
                          {editingId === item.id ? 'Sedang Edit' : 'Edit'}
                        </button>
                        <button
                          onClick={() => handleDelete(item)}
                          disabled={processing || editingId === item.id}
                          className="px-4 py-2 bg-red-500 text-white rounded text-sm font-medium hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPengumuman;
