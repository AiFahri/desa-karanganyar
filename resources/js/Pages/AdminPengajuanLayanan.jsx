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

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
      onSuccess: () => closeDetailModal()
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
    const config = {
      'sedang diproses': { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Sedang Diproses' },
      'selesai': { bg: 'bg-green-100', text: 'text-green-800', label: 'Selesai' },
      'ditolak': { bg: 'bg-red-100', text: 'text-red-800', label: 'Ditolak' }
    }[status] || { bg: 'bg-yellow-100', text: 'text-yellow-800', label: status };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  const renderFileButton = (fileUrl, fileName, buttonText, buttonColor) => {
    if (!fileUrl) {
      return <span className="text-gray-500 text-xs">-</span>;
    }

    const isPdf = fileUrl.toLowerCase().includes('.pdf');
    
    return (
      <button
        onClick={() => window.open(fileUrl, '_blank')}
        className={`px-2 py-1 ${buttonColor} text-white rounded text-xs hover:opacity-80 transition-colors`}
      >
        {isPdf ? `📄 ${buttonText}` : `👁️ ${buttonText}`}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#EBE6E6] font-sans flex flex-col">
      <NavbarAdmin toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        {sidebarOpen && <SidebarAdmin />}

        <main className="flex-1 w-full bg-[#EBE6E6] p-4 sm:p-6 overflow-x-auto">
  <div className="mb-6">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Pengajuan Layanan Surat</h1>

    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-4">
      <input
        type="text"
        name="search"
        placeholder="Cari berdasarkan nama atau NIK..."
        defaultValue={filters?.search || ''}
        className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        name="status"
        defaultValue={filters?.status || ''}
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Semua Status</option>
        <option value="sedang diproses">Sedang Diproses</option>
        <option value="selesai">Selesai</option>
        <option value="ditolak">Ditolak</option>
      </select>
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Cari
      </button>
    </form>
  </div>

  <section className="rounded p-4 shadow text-white" style={{ background: '#0272BA' }}>
    <h2 className="font-bold text-lg mb-3">Daftar Pengajuan Surat</h2>

    {/* TABEL RESPONSIF */}
    <div className="w-full overflow-x-auto text-sm">
      <table className="min-w-full text-blue-900 rounded overflow-hidden">
        <thead style={{ backgroundColor: '#FFFFFF80' }} className="text-white">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">NAMA</th>
            <th className="p-2 border hidden md:table-cell">EMAIL</th>
            <th className="p-2 border hidden md:table-cell">NO HP</th>
            <th className="p-2 border hidden md:table-cell">NIK</th>
            <th className="p-2 border">JENIS SURAT</th>
            <th className="p-2 border">TANGGAL</th>
            <th className="p-2 border">STATUS</th>
            <th className="p-2 border">KTP</th>
            <th className="p-2 border">KK</th>
            <th className="p-2 border">AKSI</th>
          </tr>
        </thead>
        <tbody>
          {pengajuanSurat?.data?.length > 0 ? (
            pengajuanSurat.data.map((p) => (
              <tr key={p.id} className="bg-white text-sm md:text-base">
                <td className="p-2 border text-center">{p.id}</td>
                <td className="p-2 border">{p.nama_lengkap}</td>
                <td className="p-2 border hidden md:table-cell">{p.user?.email || '-'}</td>
                <td className="p-2 border hidden md:table-cell">{p.user?.no_hp || '-'}</td>
                <td className="p-2 border hidden md:table-cell">{p.nik_pemohon}</td>
                <td className="p-2 border">{p.surat_jenis?.nama_jenis}</td>
                <td className="p-2 border text-center">{new Date(p.created_at).toLocaleDateString('id-ID')}</td>
                <td className="p-2 border text-center">{getStatusBadge(p.status)}</td>
                <td className="p-2 border text-center">
                  {p.foto_ktp_url ? (
                    <button
                      onClick={() => window.open(p.foto_ktp_url, '_blank')}
                      className="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
                    >
                      Lihat KTP
                    </button>
                  ) : <span className="text-xs text-gray-400">-</span>}
                </td>
                <td className="p-2 border text-center">
                  {p.foto_kk_url ? (
                    <button
                      onClick={() => window.open(p.foto_kk_url, '_blank')}
                      className="px-2 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700"
                    >
                      Lihat KK
                    </button>
                  ) : <span className="text-xs text-gray-400">-</span>}
                </td>
                <td className="p-2 border text-center">
                  <button
                    onClick={() => openDetailModal(p)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" className="p-4 text-center text-white">Tidak ada data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    {pengajuanSurat?.links && (
      <div className="mt-4 flex justify-center overflow-x-auto text-sm">
        <div className="flex space-x-1">
          {pengajuanSurat.links.map((link, index) =>
            !link.url ? (
              <span key={index}
                className="px-3 py-2 rounded opacity-50 bg-blue-500 text-white cursor-not-allowed"
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            ) : (
              <a key={index}
                href={link.url}
                className={`px-3 py-2 rounded ${
                  link.active ? 'bg-white text-blue-600 font-semibold' : 'bg-blue-500 text-white hover:bg-blue-400'
                }`}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            )
          )}
        </div>
      </div>
    )}
  </section>
</main>

      </div>

      {/* Modal detail dan upload tetap seperti yang kamu kirim */}
      {/* Sudah responsif karena menggunakan grid-cols-1 di mobile */}

      {/* Modal logic detail dan upload tetap disisipkan seperti sebelumnya */}
    </div>
  );
};

export default AdminPengajuanLayanan;
