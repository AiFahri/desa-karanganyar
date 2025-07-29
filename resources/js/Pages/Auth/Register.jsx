import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        nik: "",
        email: "",
        no_hp: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post("/register");
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            {/* <p className="text-lg text-gray-700 mb-10 text-center px-4 max-w-2xl">
                Buat akun baru untuk mengakses informasi, mengajukan surat, dan
                menggunakan berbagai layanan di Website Desa Karanganyar.
            </p> */}

            <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="hidden lg:flex lg:w-1/2 p-8 bg-gradient-to-br from-blue-100 to-white flex-col items-center justify-center space-y-6">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-md">
                        {/* <img
                            src="/images/login3.jpg"
                            alt="Gambar Kegiatan Warga 1"
                            className="w-full h-full object-cover rounded-lg"
                        /> */}{" "}
                        Gambar Kegiatan Warga 1
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-md">
                            {/* <img
                                src="/images/login2.jpg"
                                alt="Gambar Kegiatan Warga 1"
                                className="w-full h-full object-cover rounded-lg"
                            /> */}
                            Gambar Kegiatan Warga 2
                        </div>
                        <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-md">
                            {/* <img
                                src="/images/login1.jpg"
                                alt="Gambar Kegiatan Warga 1"
                                className="w-full h-full object-cover rounded-lg"
                            /> */}
                            Gambar Kegiatan Warga 3
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 p-8 sm:p-10 bg-blue-50 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
                        Kalau belum punya akun, Daftar Dulu yuk!
                    </h2>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Nama Lengkap" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="nik" value="NIK" />
                            <TextInput
                                id="nik"
                                name="nik"
                                value={data.nik}
                                className="mt-1 block w-full"
                                autoComplete="off"
                                placeholder="Masukkan NIK sesuai KTP (16 digit)"
                                onChange={(e) => setData("nik", e.target.value)}
                                required
                            />
                            <InputError message={errors.nik} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                placeholder="Masukkan alamat email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="no_hp" value="Nomor HP" />
                            <TextInput
                                id="no_hp"
                                type="text"
                                name="no_hp"
                                value={data.no_hp}
                                className="mt-1 block w-full"
                                autoComplete="tel"
                                placeholder="Masukkan nomor HP yang masih aktif"
                                onChange={(e) =>
                                    setData("no_hp", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.no_hp}
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
                                autoComplete="new-password"
                                placeholder="Masukkan kata sandi akun"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Konfirmasi Password"
                            />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                placeholder="Masukkan kata sandi akun"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            <Link
                                href={route("login")}
                                className="underline text-sm text-blue-600 hover:text-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Sudah punya akun?{" "}
                                <span className="font-semibold">
                                    Masuk untuk lanjut
                                </span>
                            </Link>

                            <PrimaryButton
                                className="ms-4 px-6 py-2 bg-darkBlue"
                                disabled={processing}
                            >
                                Daftar
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
