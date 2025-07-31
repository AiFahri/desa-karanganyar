import React, { useState, useRef } from "react";
import { useForm } from "@inertiajs/react";
import NavbarAdmin from "./NavbarAdmin";
import SidebarAdmin from "./SidebarAdmin";
import Modal from "../Components/Modal";
import KirimIcon from "../../assets/Home/icons/KirimIcon.png";
import UploadGambarIcon from "../../assets/Home/icons/UploadGambarIcon.png";

const AdminPotensiUMKM = ({ umkm }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const formRef = useRef(null);
    const fileInputRef = useRef(null);

    const {
        data,
        setData,
        post,
        put,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({
        merk_dagang: "",
        deskripsi_singkat: "",
        deskripsi_lengkap: "",
        menu_umkm: [""],
        media_sosial: [""],
        kontak_pemesanan: "",
        gambar: null,
    });

    const addMediaSosial = () => {
        setData("media_sosial", [...data.media_sosial, ""]);
    };

    const removeMediaSosial = (index) => {
        const newMediaSosial = data.media_sosial.filter((_, i) => i !== index);
        setData("media_sosial", newMediaSosial);
    };

    const updateMediaSosial = (index, value) => {
        const newMediaSosial = [...data.media_sosial];
        newMediaSosial[index] = value;
        setData("media_sosial", newMediaSosial);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("gambar", file);

            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => setPreviewImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Filter empty values dari arrays
        const cleanedData = {
            ...data,
            menu_umkm: data.menu_umkm.filter(item => item.trim() !== ''),
            media_sosial: data.media_sosial.filter(item => item.trim() !== ''),
        };

        console.log('Submitting data:', cleanedData);

        if (editingId) {
            const item = umkm.data.find((u) => u.id === editingId);
            put(`/admin/umkm/${item.slug}`, cleanedData, {
                onSuccess: () => {
                    reset();
                    setEditingId(null);
                    setPreviewImage(null);
                    setShowSuccessModal(true);
                },
                onError: (errors) => {
                    console.log('Update errors:', errors);
                }
            });
        } else {
            post("/admin/umkm", cleanedData, {
                onSuccess: () => {
                    reset();
                    setPreviewImage(null);
                    if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                    }
                    setShowSuccessModal(true);
                },
                onError: (errors) => {
                    console.log('Create errors:', errors);
                }
            });
        }
    };

    const handleEdit = (item) => {
        // Parse menu_umkm dengan benar
        let menuUmkm = [""];
        if (item.menu_umkm) {
            try {
                // Jika sudah dalam bentuk array
                if (Array.isArray(item.menu_umkm)) {
                    menuUmkm = item.menu_umkm.filter(menu => menu && menu.trim() !== '');
                } 
                // Jika dalam bentuk JSON string
                else if (typeof item.menu_umkm === 'string') {
                    const parsed = JSON.parse(item.menu_umkm);
                    menuUmkm = Array.isArray(parsed) ? parsed.filter(menu => menu && menu.trim() !== '') : [item.menu_umkm];
                }
                // Fallback jika format lain
                else {
                    menuUmkm = [item.menu_umkm.toString()];
                }
            } catch (e) {
                // Jika parsing gagal, treat as string
                menuUmkm = item.menu_umkm.split("||").filter(menu => menu && menu.trim() !== '');
            }
        }
        
        // Pastikan minimal ada satu item kosong
        if (menuUmkm.length === 0) {
            menuUmkm = [""];
        }

        setData({
            merk_dagang: item.merk_dagang || "",
            deskripsi_singkat: item.deskripsi_singkat || "",
            deskripsi_lengkap: item.deskripsi_lengkap || "",
            menu_umkm: menuUmkm,
            media_sosial: Array.isArray(item.media_sosial) ? item.media_sosial : (item.media_sosial ? [item.media_sosial] : [""]),
            kontak_pemesanan: item.kontak_pemesanan || "",
            gambar: null,
        });
        
        setEditingId(item.id);

        if (item.gambar_path) {
            setPreviewImage(item.gambar_path);
        } else {
            setPreviewImage(null);
        }

        if (formRef.current) {
            formRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handleDelete = (item) => {
        if (confirm("Yakin ingin menghapus UMKM ini?")) {
            destroy(`/admin/umkm/${item.slug}`, {
                onSuccess: () => {
                    console.log("UMKM berhasil dihapus");
                },
            });
        }
    };

    const handleCancel = () => {
        reset();
        setEditingId(null);
        setPreviewImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // Tambahkan fungsi untuk handle menu UMKM (sama seperti media sosial):
    const addMenuUMKM = () => {
        setData("menu_umkm", [...data.menu_umkm, ""]);
    };

    const removeMenuUMKM = (index) => {
        const newMenuUMKM = data.menu_umkm.filter((_, i) => i !== index);
        setData("menu_umkm", newMenuUMKM);
    };

    const updateMenuUMKM = (index, value) => {
        const newMenuUMKM = [...data.menu_umkm];
        newMenuUMKM[index] = value;
        setData("menu_umkm", newMenuUMKM);
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
                                {editingId ? "Edit UMKM" : "Tambah UMKM"}
                            </h1>
                            <div className="border-t border-black/40 w-full mb-10"></div>

                            {editingId && (
                                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-blue-800 font-semibold">
                                        Mode Edit: Sedang mengedit UMKM
                                    </p>
                                </div>
                            )}

                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-wrap gap-10"
                            >
                                {/* Kiri */}
                                <div className="flex flex-col gap-6 w-[500px]">
                                    <div>
                                        <label className="text-[18px] font-semibold mb-2 block">
                                            Merk Dagang
                                        </label>
                                        <input
                                            type="text"
                                            value={data.merk_dagang}
                                            onChange={(e) =>
                                                setData(
                                                    "merk_dagang",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black"
                                            required
                                        />
                                        {errors.merk_dagang && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.merk_dagang}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-[18px] font-semibold mb-2 block">
                                            Keterangan
                                        </label>
                                        <textarea
                                            value={data.deskripsi_singkat}
                                            onChange={(e) =>
                                                setData(
                                                    "deskripsi_singkat",
                                                    e.target.value
                                                )
                                            }
                                            rows="3"
                                            className="w-full px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black"
                                            required
                                        />
                                        {errors.deskripsi_singkat && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.deskripsi_singkat}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-[18px] font-semibold mb-2 block">
                                            Deskripsi Lengkap
                                        </label>
                                        <textarea
                                            value={data.deskripsi_lengkap}
                                            onChange={(e) =>
                                                setData(
                                                    "deskripsi_lengkap",
                                                    e.target.value
                                                )
                                            }
                                            rows="4"
                                            className="w-full px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black"
                                            required
                                        />
                                        {errors.deskripsi_lengkap && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.deskripsi_lengkap}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-[18px] font-semibold mb-2 block">
                                            Menu UMKM
                                        </label>
                                        {data.menu_umkm.map((menu, index) => (
                                            <div
                                                key={index}
                                                className="flex gap-2 mb-2"
                                            >
                                                <input
                                                    type="text"
                                                    value={menu}
                                                    onChange={(e) =>
                                                        updateMenuUMKM(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Contoh: Nasi Gudeg - Rp 15.000"
                                                    className="flex-1 h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black"
                                                />
                                                {data.menu_umkm.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeMenuUMKM(
                                                                index
                                                            )
                                                        }
                                                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                                    >
                                                        ×
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={addMenuUMKM}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                                        >
                                            + Tambah Menu
                                        </button>
                                        {errors.menu_umkm && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.menu_umkm}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-[18px] font-semibold mb-2 block">
                                            Kontak Pemesanan
                                        </label>
                                        <input
                                            type="text"
                                            value={data.kontak_pemesanan}
                                            onChange={(e) =>
                                                setData(
                                                    "kontak_pemesanan",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black"
                                        />
                                        {errors.kontak_pemesanan && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.kontak_pemesanan}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-[18px] font-semibold mb-2 block">
                                            Media Sosial
                                        </label>
                                        {data.media_sosial.map(
                                            (link, index) => (
                                                <div
                                                    key={index}
                                                    className="flex gap-2 mb-2"
                                                >
                                                    <input
                                                        type="url"
                                                        value={link}
                                                        onChange={(e) =>
                                                            updateMediaSosial(
                                                                index,
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="https://instagram.com/username"
                                                        className="flex-1 h-[50px] px-5 py-3 border border-[#D9D9D9] bg-[#FDFCFC] rounded-lg text-sm font-semibold text-black"
                                                    />
                                                    {data.media_sosial.length >
                                                        1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                removeMediaSosial(
                                                                    index
                                                                )
                                                            }
                                                            className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                                        >
                                                            ×
                                                        </button>
                                                    )}
                                                </div>
                                            )
                                        )}
                                        <button
                                            type="button"
                                            onClick={addMediaSosial}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                                        >
                                            + Tambah Link
                                        </button>
                                        {errors.media_sosial && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.media_sosial}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Kanan (Unggah Gambar) */}
                                <div className="flex flex-col w-[400px]">
                                    <label className="text-[18px] font-semibold mb-2 block">
                                        Unggah Gambar
                                    </label>
                                    <div
                                        className="w-full h-[400px] border border-[#D9D9D9] bg-[#FDFCFC] rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                                        onClick={() =>
                                            fileInputRef.current?.click()
                                        }
                                    >
                                        {previewImage ? (
                                            <img
                                                src={
                                                    previewImage?.startsWith(
                                                        "data:"
                                                    )
                                                        ? previewImage
                                                        : `https://is3.cloudhost.id/karanganyar/${previewImage}`
                                                }
                                            />
                                        ) : (
                                            <div className="text-center">
                                                <img
                                                    src={UploadGambarIcon}
                                                    alt="Upload Gambar"
                                                    className="w-12 h-12 mx-auto mb-4"
                                                />
                                                <p className="text-sm text-[#9A9A9A] font-semibold">
                                                    Klik atau drag untuk unggah
                                                    gambar
                                                </p>
                                                <p className="text-xs text-[#9A9A9A] mt-1">
                                                    Format: JPG, PNG, GIF (Max
                                                    5MB)
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
                                    {errors.gambar && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.gambar}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="w-full flex justify-center gap-4 mt-6">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex items-center gap-3 px-8 py-3 bg-gradient-to-b from-[#0272BA] to-[#95CFF4] text-white font-semibold rounded-lg hover:from-[#0272BA] hover:to-[#0272BA] transition-all duration-300 disabled:opacity-50"
                                    >
                                        <img
                                            src={KirimIcon}
                                            alt="Kirim"
                                            className="w-5 h-5"
                                        />
                                        {processing
                                            ? "Menyimpan..."
                                            : editingId
                                            ? "Update UMKM"
                                            : "Tambah UMKM"}
                                    </button>

                                    {editingId && (
                                        <button
                                            type="button"
                                            onClick={handleCancel}
                                            className="px-8 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                                        >
                                            Batal
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* List UMKM */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-6">
                                Daftar UMKM
                            </h2>
                            <div className="space-y-4">
                                {umkm?.data?.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                                    >
                                        {item.gambar_path && (
                                            <img
                                                src={`https://is3.cloudhost.id/karanganyar/${item.gambar_path}`}
                                                alt={item.merk_dagang}
                                                className="w-20 h-20 object-cover rounded-lg"
                                            />
                                        )}
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold mb-2">
                                                {item.merk_dagang}
                                            </h3>
                                            <p className="text-gray-700 line-clamp-2">
                                                {item.deskripsi_singkat}
                                            </p>
                                            {item.menu_umkm && Array.isArray(item.menu_umkm) && item.menu_umkm.length > 0 && (
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Menu: {item.menu_umkm.join(', ')}
                                                </p>
                                            )}
                                            {item.kontak_pemesanan && (
                                                <p className="text-sm text-gray-500">
                                                    Kontak: {item.kontak_pemesanan}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEdit(item)}
                                                disabled={processing}
                                                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                                                    editingId === item.id
                                                        ? "bg-green-500 text-white"
                                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                                }`}
                                            >
                                                {editingId === item.id ? "Sedang Edit" : "Edit"}
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item)}
                                                disabled={processing || editingId === item.id}
                                                className="px-4 py-2 bg-red-500 text-white rounded text-sm font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
                                            >
                                                Hapus
                                            </button>
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

export default AdminPotensiUMKM;







