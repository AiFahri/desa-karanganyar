import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {/* <p className="text-lg text-gray-700 mb-10 text-center px-4 max-w-2xl">
                Silakan masuk dulu untuk bergabung di Website Desa Karanganyar
                dan temukan berbagai informasi serta layanan desa secara mudah
            </p> */}

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="hidden lg:flex lg:w-1/2 p-8 bg-gradient-to-br from-blue-100 to-white flex-col items-center justify-center space-y-6">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-md">
                        Gambar Kegiatan Warga 1
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-md">
                            Gambar Kegiatan Warga 2
                        </div>
                        <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-md">
                            Gambar Kegiatan Warga 3
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 p-8 sm:p-10 bg-blue-50 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
                        Hai, warga Karanganyar! Silakan login untuk lanjut.
                    </h2>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel
                                htmlFor="username"
                                value="NIK atau Email"
                            />
                            <TextInput
                                id="username"
                                type="text"
                                name="username"
                                value={data.username}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                placeholder="Masukkan NIK sesuai KTP (16 digit) / Masukkan alamat email"
                                onChange={(e) =>
                                    setData("username", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.username}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                placeholder="Masukkan kata sandi akun"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center text-sm text-gray-600">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2">Ingat Saya</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")} // Ini masih aman karena ada nama rute 'password.request' di auth.php
                                    className="underline text-sm text-blue-600 hover:text-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Lupa Password?
                                </Link>
                            )}

                            <PrimaryButton
                                className="ms-4 px-6 py-2"
                                disabled={processing}
                            >
                                Masuk
                            </PrimaryButton>
                        </div>

                        <div className="text-center mt-6">
                            <Link
                                href={route("register.page")} // <-- UBAH KE NAMA RUTE BARU ANDA
                                className="underline text-sm text-blue-600 hover:text-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Belum punya akun?{" "}
                                <span className="font-semibold">
                                    Daftar dulu yuk
                                </span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
