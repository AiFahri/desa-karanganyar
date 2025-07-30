import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TombolKembali from "@/Components/TombolKembali";

const RiwayatPengajuan = ({ pengajuanSurat }) => {
    const getStatusBadge = (status) => {
        const statusConfig = {
            "sedang diproses": "bg-yellow-100 text-yellow-800",
            selesai: "bg-green-100 text-green-800",
            ditolak: "bg-red-100 text-red-800",
        };

        return statusConfig[status] || "bg-gray-100 text-gray-800";
    };

    const getStatusText = (status) => {
        const statusText = {
            "sedang diproses": "Sedang Diproses",
            selesai: "Selesai",
            ditolak: "Ditolak",
        };

        return statusText[status] || status;
    };

    return (
        <div className="min-h-screen max-h-screen bg-gray-50 pt-20">
            <Head title="Riwayat Pengajuan" />
            <Navbar />
            <div className="-mt-1">
                <TombolKembali backTo="/layanan" />
            </div>

            <main className="container mx-auto px-4 pt-8 pb-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">
                        Riwayat Pengajuan Surat
                    </h1>

                    {pengajuanSurat?.length > 0 ? (
                        <div className="space-y-6">
                            {pengajuanSurat.map((pengajuan) => (
                                <div
                                    key={pengajuan.id}
                                    className="bg-white rounded-lg shadow-md p-6 border"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {
                                                    pengajuan.surat_jenis
                                                        ?.nama_jenis
                                                }
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Diajukan:{" "}
                                                {new Date(
                                                    pengajuan.created_at
                                                ).toLocaleDateString("id-ID")}
                                            </p>
                                        </div>
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(
                                                pengajuan.status
                                            )}`}
                                        >
                                            {getStatusText(pengajuan.status)}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-sm">
                                        <p>
                                            <span className="font-medium">
                                                Nama:
                                            </span>{" "}
                                            {pengajuan.nama_lengkap}
                                        </p>
                                        <p>
                                            <span className="font-medium">
                                                NIK:
                                            </span>{" "}
                                            {pengajuan.nik_pemohon}
                                        </p>
                                        {pengajuan.catatan_admin && (
                                            <p>
                                                <span className="font-medium">
                                                    Catatan Admin:
                                                </span>{" "}
                                                {pengajuan.catatan_admin}
                                            </p>
                                        )}
                                    </div>

                                    {pengajuan.status === "selesai" &&
                                        pengajuan.surat_jadi_url && (
                                            <div className="mt-4 pt-4 border-t">
                                                <a
                                                    href={
                                                        pengajuan.surat_jadi_url
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                                >
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                        />
                                                    </svg>
                                                    Download Surat
                                                </a>
                                            </div>
                                        )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">
                                Belum ada pengajuan surat
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RiwayatPengajuan;
