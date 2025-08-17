import React, { useState, useRef } from 'react';
import { useForm, router } from '@inertiajs/react';
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';
import Modal from '../Components/Modal';
import KirimIcon from '../../assets/Home/icons/KirimIcon.png';
import UploadGambarIcon from '../../assets/Home/icons/UploadGambarIcon.png';

const AdminPortalBerita = ({ berita }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  const { data, setData, post, put, delete: destroy, processing, errors, reset } = useForm({
    judul: '',
    deskripsi: '',
    gambar: null,
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData('gambar', file);
      const reader = new FileReader();
      reader.onload = (e) => setPreviewImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingId) {
        const item = berita.data.find(b => b.id === editingId);
        
        router.post(`/admin/berita/${item.slug}`, {
            _method: 'PUT',
            judul: data.judul,
            deskripsi: data.deskripsi,
            gambar: data.gambar,
        }, {
            forceFormData: true,
            onSuccess: () => {
                reset();
                setEditingId(null);
                setPreviewImage(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                setShowSuccessModal(true);
            }
        });
    } else {
        router.post('/admin/berita', {
            judul: data.judul,
            deskripsi: data.deskripsi,
            gambar: data.gambar,
        }, {
            forceFormData: true,
            onSuccess: () => {
                reset();
                setPreviewImage(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                setShowSuccessModal(true);
            }
        });
    }
  };

  const handleEdit = (item) => {
    // Jangan reset dulu, langsung set data
    setData({
        judul: item.judul || '',
        deskripsi: item.deskripsi || '',
        gambar: null, // Selalu null untuk edit
    });
    
    setEditingId(item.id);
    
    // Set preview image jika ada
    if (item.gambar) {
        setPreviewImage(`https://is3.cloudhost.id/karanganyar/${item.gambar}`);
    } else {
        setPreviewImage(null);
    }
    
    // Clear file input
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
    
    // Scroll to form
    if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDelete = (item) => {
    if (confirm('Yakin ingin menghapus berita ini?')) {
      destroy(`/admin/berita/${item.slug}`, {
        onSuccess: () => {
          console.log('Berita berhasil dihapus');
        }
      });
    }
  };

  const handleCancel = () => {
    reset();
    setEditingId(null);
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen font-sans flex flex-col bg-[#EBE6E6]">
      <NavbarAdmin toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        {sidebarOpen && <SidebarAdmin />}

        <main className="flex-1 p-4 sm:p-6">
          <div className="overflow-x-auto sm:overflow-visible">
            <div className="w-full sm:min-w-[1000px] bg-white shadow-md rounded-lg p-4">
              <div ref={formRef}>
                <h1 className="text-[28px] sm:text-[40px] font-bold text-center mb-6">
                  {editingId ? 'Edit Berita' : 'Upload Berita'}
                </h1>
                <div className="border-t border-black/40 w-full mb-10"></div>

                {editingId && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 font-semibold">
                      Mode Edit: Sedang mengedit berita
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row flex-wrap gap-10">
                  <div className="flex flex-col gap-6 w-full lg:w-[500px]">
                    <div>
                      <label className="text-[18px] font-semibold mb-2 block">Judul Berita</label>
                      <input
                        type="text"
                        value={data.judul}
                        onChange={(e) => setData('judul', e.target.value)}
                        placeholder="Masukkan judul berita"
                        className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-black/45"
                      />
                      {errors.judul && <p className="text-red-500 text-sm mt-1">{errors.judul}</p>}
                    </div>

                    <div>
                      <label className="text-[18px] font-semibold mb-2 block">Deskripsi Berita</label>
                      <textarea
                        rows="8"
                        value={data.deskripsi}
                        onChange={(e) => setData('deskripsi', e.target.value)}
                        placeholder="Berikan penjelasan atau deskripsi di sini"
                        className="w-full px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black placeholder:text-[#9A9A9A]"
                      />
                      {errors.deskripsi && <p className="text-red-500 text-sm mt-1">{errors.deskripsi}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col w-full lg:w-[400px]">
                    <label className="text-[18px] font-semibold mb-2 block">Unggah Gambar</label>
                    <div
                      className="w-full h-[300px] sm:h-[400px] border border-[#D9D9D9] bg-[#FDFCFC] rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {previewImage ? (
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <div className="text-center">
                          <img
                            src={UploadGambarIcon}
                            alt="Upload Gambar"
                            className="w-12 h-12 mx-auto mb-4"
                          />
                          <p className="text-sm text-[#9A9A9A] font-semibold">
                            Klik atau drag untuk unggah gambar
                          </p>
                          <p className="text-xs text-[#9A9A9A] mt-1">
                            Format: JPG, PNG, GIF (Max 5MB)
                          </p>
                        </div>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {errors.gambar && <p className="text-red-500 text-sm mt-1">{errors.gambar}</p>}
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
                <h2 className="text-2xl font-bold mb-6">Daftar Berita</h2>
                <div className="space-y-4">
                  {berita.data.map((item) => (
                    <div
                      key={item.id}
                      className={`border rounded-lg p-6 transition-colors ${
                        editingId === item.id ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {item.gambar && (
                          <img
                            src={`https://is3.cloudhost.id/karanganyar/${item.gambar}`}
                            alt={item.judul}
                            className="w-full sm:w-24 h-24 object-cover rounded-lg"
                          />
                        )}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold mb-1">{item.judul}</h3>
                              <p className="text-blue-600 text-sm mb-1">
                                {new Date(item.tanggal_publish).toLocaleDateString('id-ID')}
                              </p>
                              <p className="text-gray-700 line-clamp-2">{item.deskripsi}</p>
                            </div>
                            <div className="flex gap-2">
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <div className="p-6 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {editingId ? 'Berita Berhasil Diperbarui!' : 'Berita Berhasil Ditambahkan!'}
          </h3>
          
          <p className="text-sm text-gray-600 mb-6">
            {editingId ? 'Data berita telah berhasil diperbarui.' : 'Berita baru telah berhasil ditambahkan.'}
          </p>
          
          <button
            onClick={() => setShowSuccessModal(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tutup
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminPortalBerita;
















