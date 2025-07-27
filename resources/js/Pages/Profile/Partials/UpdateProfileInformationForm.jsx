import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { React, useState } from 'react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const EyeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round"
             className="w-5 h-5 text-gray-500">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );

    const EyeOffIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round"
             className="w-5 h-5 text-gray-500">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line x1="2" x2="22" y1="2" y2="22" />
        </svg>
    );

    const { data, setData, patch, errors, processing, recentlySuccessful, reset } =
        useForm({
            nik: user.nik,
            email: user.email,
            no_hp: user.no_hp,
            password: '',
            password_confirmation: '',
        });

        const [localError, setLocalError] = useState('');


    const submit = (e) => {
    e.preventDefault();

    // Cek apakah password dan konfirmasi cocok
    if (data.password !== data.password_confirmation) {
        setLocalError('Password dan konfirmasi password tidak cocok.');
        return;
    }

    setLocalError(''); // Hapus error jika sebelumnya ada

    patch(route('profile.update'), {
        preserveScroll: true,
        onSuccess: () => reset('password', 'password_confirmation'),
    });
};


    return (
        <section className={className}>
            <header>
                <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-2">
                        <span className="text-4xl text-white">👤</span>
                    </div>
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-gray-500">{user.email}</p>
                </div>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="nik" value="NIK" />
                    <TextInput
                        id="nik"
                        className="mt-1 block w-full"
                        value={data.nik}
                        onChange={(e) => setData('nik', e.target.value)}
                        required
                        isFocused
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

                <div className="relative">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        className="mt-1 block w-full pr-10"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        autoComplete="new-password"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                    <InputError className="mt-2" message={errors.password} />
                </div>

                <div>
    <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" />
    <TextInput
        id="password_confirmation"
        type="password"
        className="mt-1 block w-full"
        value={data.password_confirmation}
        onChange={(e) => setData('password_confirmation', e.target.value)}
        autoComplete="new-password"
    />
    <InputError className="mt-2" message={errors.password_confirmation || localError} />
</div>


                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Email Anda belum terverifikasi.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="ml-1 text-sm underline text-gray-600 hover:text-gray-900"
                            >
                                Klik di sini untuk kirim ulang email verifikasi.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                Tautan verifikasi baru telah dikirim.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton
                        disabled={processing}
                        className="mx-auto bg-[#0272BA] hover:bg-white hover:text-[#0272BA] hover:shadow"
                    >
                        Simpan
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Disimpan.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
