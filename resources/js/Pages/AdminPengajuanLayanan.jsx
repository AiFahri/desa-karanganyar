import React, { useState } from 'react';
import { Link, useForm, router } from '@inertiajs/react';
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';

const AdminPengajuanLayanan = ({ pengajuanSurat, filters }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedPengajuan, setSelectedPengajuan] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const { data, setData, post, put, processing, errors, reset } = useForm({
    status: '',
    catatan_admin: '',
    file_surat: null
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get('search');
    const status = formData.get('status');
    
    router.get('/admin/pengajuan-surat', { search, status }, {
      preserveState: true,
      replace: true
    });
  };

  const openDetailModal = (pengajuan) => {
    setSelectedPengajuan(pengajuan);
    setData({
      status: pengajuan.status,
      catatan_admin: pengajuan.catatan_admin || '',
      file_surat: null
    });
    setShowDetailModal(true);
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
    setSelectedPengajuan(null);
    reset();
  };

  const handleUpdateStatus = (e) => {
    e.preventDefault();
    put(`/admin/pengajuan-surat/${selectedPengajuan.id}`, {
      onSuccess: () => {
        closeDetailModal();
      }
    });
  };

  const handleUploadSurat = (e) => {
    e.preventDefault();
    post(`/admin/pengajuan-surat/${selectedPengajuan.id}/upload-surat`, {
      forceFormData: true,
      onSuccess: () => {
        setShowUploadModal(false);
        closeDetailModal();
      }
    });
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'sedang diproses': { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Sedang Diproses' },
      'selesai': { bg: 'bg-green-100', text: 'text-green-800', label: 'Selesai' },
      'ditolak': { bg: 'bg-red-100', text: 'text-red-800', label: 'Ditolak' }
    };
    
    const config = statusConfig[status] || statusConfig['sedang diproses'];
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#EBE6E6] font-sans flex flex-col">
      <NavbarAdmin toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        {sidebarOpen && <SidebarAdmin />}

        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Pengajuan Layanan Surat</h1>
            
            <form onSubmit={handleSearch} className="flex gap-4 mb-4">
              <input
                type="text"
                name="search"
                placeholder="Cari berdasarkan nama atau NIK..."
                defaultValue={filters?.search || ''}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="status"
                defaultValue={filters?.status || ''}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Semua Status</option>
                <option value="sedang diproses">Sedang Diproses</option>
                <option value="selesai">Selesai</option>
                <option value="ditolak">Ditolak</option>
              </select>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Cari
              </button>
            </form>
          </div>

          {/* Table */}
          <section className="rounded p-4 shadow text-white" style={{ background: '#0272BA' }}>
            <h2 className="font-bold text-lg mb-3">Daftar Pengajuan Surat</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-blue-900 rounded overflow-hidden">
                <thead style={{ backgroundColor: '#FFFFFF80' }} className="text-white">
                  <tr>
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">NAMA</th>
                    <th className="p-2 border">NIK</th>
                    <th className="p-2 border">JENIS SURAT</th>
                    <th className="p-2 border">TANGGAL PENGAJUAN</th>
                    <th className="p-2 border">STATUS</th>
                    <th className="p-2 border">FOTO KTP</th>
                    <th className="p-2 border">FOTO KK</th>
                    <th className="p-2 border">AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  {pengajuanSurat?.data?.length > 0 ? (
                    pengajuanSurat.data.map((pengajuan, index) => (
                      <tr
                        key={pengajuan.id}
                        style={{
                          backgroundColor: index % 2 === 0 ? '#FFFFFF80' : '#95CFF4',
                        }}
                      >
                        <td className="p-2 border text-center">{pengajuan.id}</td>
                        <td className="p-2 border">{pengajuan.nama_lengkap}</td>
                        <td className="p-2 border">{pengajuan.nik_pemohon}</td>
                        <td className="p-2 border">{pengajuan.surat_jenis?.nama_jenis}</td>
                        <td className="p-2 border text-center">
                          {new Date(pengajuan.created_at).toLocaleDateString('id-ID')}
                        </td>
                        <td className="p-2 border text-center">
                          {getStatusBadge(pengajuan.status)}
                        </td>
                        <td className="p-2 border text-center">
                          {pengajuan.foto_ktp_url ? (
                            <a
                              href={pengajuan.foto_ktp_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 transition-colors"
                            >
                              Lihat KTP
                            </a>
                          ) : (
                            <span className="text-gray-500 text-xs">-</span>
                          )}
                        </td>
                        <td className="p-2 border text-center">
                          {pengajuan.foto_kk_url ? (
                            <a
                              href={pengajuan.foto_kk_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700 transition-colors"
                            >
                              Lihat KK
                            </a>
                          ) : (
                            <span className="text-gray-500 text-xs">-</span>
                          )}
                        </td>
                        <td className="p-2 border text-center">
                          <button
                            onClick={() => openDetailModal(pengajuan)}
                            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                          >
                            Detail
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="p-4 text-center text-gray-500">
                        Tidak ada data pengajuan surat
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pengajuanSurat?.links && (
              <div className="mt-4 flex justify-center">
                <div className="flex space-x-1">
                  {pengajuanSurat.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      className={`px-3 py-2 text-sm rounded ${
                        link.active
                          ? 'bg-white text-blue-600 font-semibold'
                          : 'bg-blue-500 text-white hover:bg-blue-400'
                      } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        </main>
      </div>

      {showDetailModal && selectedPengajuan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Detail Pengajuan Surat</h2>
                <button
                  onClick={closeDetailModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Informasi Pengajuan</h3>
                  <div>
                    <label className="font-medium text-gray-700">Nama Lengkap:</label>
                    <p className="text-gray-900">{selectedPengajuan.nama_lengkap}</p>
                  </div>
                  <div>
                    <label className="font-medium text-gray-700">NIK:</label>
                    <p className="text-gray-900">{selectedPengajuan.nik_pemohon}</p>
                  </div>
                  <div>
                    <label className="font-medium text-gray-700">No. KK:</label>
                    <p className="text-gray-900">{selectedPengajuan.no_kk_pemohon}</p>
                  </div>
                  <div>
                    <label className="font-medium text-gray-700">Jenis Surat:</label>
                    <p className="text-gray-900">{selectedPengajuan.surat_jenis?.nama_jenis}</p>
                  </div>
                  <div>
                    <label className="font-medium text-gray-700">Tanggal Pengajuan:</label>
                    <p className="text-gray-900">{new Date(selectedPengajuan.created_at).toLocaleString('id-ID')}</p>
                  </div>
                  <div>
                    <label className="font-medium text-gray-700">Status:</label>
                    <div className="mt-1">{getStatusBadge(selectedPengajuan.status)}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Dokumen</h3>
                  <div>
                    <label className="font-medium text-gray-700">Foto KTP:</label>
                    {selectedPengajuan.foto_ktp_url && (
                      <a
                        href={selectedPengajuan.foto_ktp_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-1 text-blue-600 hover:text-blue-800"
                      >
                        Lihat Foto KTP
                      </a>
                    )}
                  </div>
                  <div>
                    <label className="font-medium text-gray-700">Foto KK:</label>
                    {selectedPengajuan.foto_kk_url && (
                      <a
                        href={selectedPengajuan.foto_kk_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-1 text-blue-600 hover:text-blue-800"
                      >
                        Lihat Foto KK
                      </a>
                    )}
                  </div>
                  {selectedPengajuan.surat_jadi_url && (
                    <div>
                      <label className="font-medium text-gray-700">Surat Jadi:</label>
                      <a
                        href={selectedPengajuan.surat_jadi_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-1 text-blue-600 hover:text-blue-800"
                      >
                        Download Surat
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <form onSubmit={handleUpdateStatus} className="mt-6 border-t pt-4">
                <h3 className="font-semibold text-lg mb-4">Update Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">Status:</label>
                    <select
                      value={data.status}
                      onChange={(e) => setData('status', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="sedang diproses">Sedang Diproses</option>
                      <option value="selesai">Selesai</option>
                      <option value="ditolak">Ditolak</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">Catatan Admin:</label>
                    <textarea
                      value={data.catatan_admin}
                      onChange={(e) => setData('catatan_admin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      placeholder="Catatan untuk pemohon..."
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    type="submit"
                    disabled={processing}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  >
                    {processing ? 'Menyimpan...' : 'Update Status'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Upload Surat Jadi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Upload Surat Jadi</h2>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleUploadSurat}>
                <div className="mb-4">
                  <label className="block font-medium text-gray-700 mb-2">File Surat (PDF/DOC/DOCX):</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setData('file_surat', e.target.files[0])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  {errors.file_surat && (
                    <p className="text-red-500 text-sm mt-1">{errors.file_surat}</p>
                  )}
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={processing}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                  >
                    {processing ? 'Mengupload...' : 'Upload'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPengajuanLayanan;


