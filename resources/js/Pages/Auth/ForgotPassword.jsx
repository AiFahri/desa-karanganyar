import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Lupa Kata Sandi" />

            <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                        Lupa Kata Sandi
                    </h1>
                    <div className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                        Lupa kata sandi Anda? Tidak masalah. Cukup berikan alamat email 
                        Anda dan kami akan mengirimkan tautan reset kata sandi yang 
                        memungkinkan Anda memilih kata sandi baru.
                    </div>
                </div>

                {status && (
                    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-md">
                        <div className="text-sm sm:text-base font-medium text-green-600 text-center sm:text-left">
                            {status}
                        </div>
                    </div>
                )}

                <form onSubmit={submit} className="space-y-4 sm:space-y-6">
                    <div>
                        <label 
                            htmlFor="email" 
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Alamat Email
                        </label>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="Masukkan alamat email Anda"
                            className="block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0272BA] focus:border-[#0272BA] text-sm sm:text-base"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="pt-2 sm:pt-4 mx-auto justify-self-center">
                        <PrimaryButton 
                            className="w-full sm:w-auto sm:min-w-[200px] px-6 py-3 text-sm sm:text-base font-medium text-white hover:text-[#0272BA] bg-darkBlue hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed" 
                            disabled={processing}
                        >
                            {processing ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Mengirim...
                                </span>
                            ) : (
                                'Kirim Tautan Reset Kata Sandi'
                            )}
                        </PrimaryButton>
                    </div>

                    <div className="text-center pt-4 sm:pt-6">
                        <a 
                            href={route('login')} 
                            className="text-sm sm:text-base text-[#0272BA] hover:text-[#0272BA] font-medium transition duration-150 ease-in-out"
                        >
                            Kembali ke Halaman Masuk
                        </a>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}