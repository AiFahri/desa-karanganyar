import { useState } from 'react';
import { useForm, usePage, router } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import Modal from '@/Components/Modal';
import { EyeIcon, EyeOffIcon } from '@/Components/Icons/EyeIcon';

export default function UpdateProfileInformationForm({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;
    const [showPassword, setShowPassword] = useState(false);
    const [localError, setLocalError] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const { data, setData, patch, errors, processing, recentlySuccessful, reset } =
        useForm({
            name: user.name,
            nik: user.nik,
            email: user.email,
            no_hp: user.no_hp,
            current_password: '',
            password: '',
            password_confirmation: '',
        });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const submit = (e) => {
        e.preventDefault();

        // Validasi password hanya jika diisi
        if (data.password && data.password !== data.password_confirmation) {
            setLocalError('Password dan konfirmasi password tidak cocok.');
            return;
        }

        // Validasi current_password jika ingin ubah password
        if (data.password && !data.current_password) {
            setLocalError('Password lama wajib diisi jika ingin mengubah password.');
            return;
        }

        setLocalError('');

        patch(route('profile.update'), {
            preserveScroll: true,
            onSuccess: () => {
                reset('current_password', 'password', 'password_confirmation');
                setLocalError('');
                setShowSuccessModal(true);
            },
            onError: (errors) => {
                if (errors.current_password) {
                    setLocalError(errors.current_password);
                } else if (errors.password) {
                    setLocalError('Terjadi kesalahan pada password.');
                }
            }
        });
    };

    const handleModalClose = () => {
        setShowSuccessModal(false);
        router.visit('/');
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Informasi Profil
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Perbarui informasi profil dan alamat email akun Anda.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                {/* Peringatan */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">
                                Perhatian!
                            </h3>
                            <div className="mt-2 text-sm text-yellow-700">
                                <p>Harap berhati-hati saat mengubah data berikut:</p>
                                <ul className="list-disc list-inside mt-1">
                                    <li><strong>NIK:</strong> Pastikan sesuai dengan KTP Anda</li>
                                    <li><strong>Email:</strong> Gunakan email yang masih aktif untuk notifikasi</li>
                                    <li><strong>Nomor HP:</strong> Pastikan nomor yang masih aktif</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Nama Lengkap" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="nik" value="NIK" />
                    <TextInput
                        id="nik"
                        className="mt-1 block w-full"
                        value={data.nik}
                        onChange={(e) => setData('nik', e.target.value)}
                        required
                        autoComplete="nik"
                    />
                    <InputError className="mt-2" message={errors.nik} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="email"
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="no_hp" value="Nomor Telepon" />
                    <TextInput
                        id="no_hp"
                        type="tel"
                        className="mt-1 block w-full"
                        value={data.no_hp}
                        onChange={(e) => setData('no_hp', e.target.value)}
                        required
                        autoComplete="no_hp"
                    />
                    <InputError className="mt-2" message={errors.no_hp} />
                </div>

                {/* Section Password */}
                <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Ubah Password</h3>
                    <p className="text-sm text-gray-600 mb-4">Kosongkan jika tidak ingin mengubah password</p>
                    
                    <div className="space-y-4">
                        <div className="relative">
                            <InputLabel htmlFor="current_password" value="Password Lama" />
                            <TextInput
                                id="current_password"
                                type={showPassword ? 'text' : 'password'}
                                className="mt-1 block w-full pr-10"
                                value={data.current_password}
                                onChange={(e) => setData('current_password', e.target.value)}
                                autoComplete="current-password"
                                placeholder="Masukkan password lama jika ingin mengubah password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 mt-6 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                            <InputError className="mt-2" message={errors.current_password} />
                        </div>

                        <div className="relative">
                            <InputLabel htmlFor="password" value="Password Baru" />
                            <TextInput
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                className="mt-1 block w-full pr-10"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                autoComplete="new-password"
                                placeholder="Kosongkan jika tidak ingin mengubah password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 mt-6 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                            <InputError className="mt-2" message={errors.password} />
                        </div>

                        <div className="relative">
                            <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password Baru" />
                            <TextInput
                                id="password_confirmation"
                                type={showPassword ? 'text' : 'password'}
                                className="mt-1 block w-full pr-10"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                autoComplete="new-password"
                                placeholder="Ulangi password baru"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 mt-6 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                            <InputError className="mt-2" message={errors.password_confirmation} />
                        </div>

                        {localError && (
                            <div className="mt-2 text-sm text-red-600">{localError}</div>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing} className='bg-darkBlue'>
                        {processing ? 'Menyimpan...' : 'Simpan'}
                    </PrimaryButton>
                </div>
            </form>

            <Modal show={showSuccessModal} onClose={handleModalClose}>
                <div className="p-6 text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Profil Berhasil Diperbarui!
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-6">
                        Data profil Anda telah berhasil disimpan. Anda akan diarahkan ke halaman utama.
                    </p>
                    
                    <div className="flex justify-center gap-3">
                        <button
                            onClick={handleModalClose}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </Modal>
        </section>
    );
}

