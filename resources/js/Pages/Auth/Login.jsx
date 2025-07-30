import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { EyeIcon, EyeOffIcon } from "@/Components/Icons/EyeIcon";
import pic1 from "../../../assets/Login/pic1.jpg";
import pic2 from "../../../assets/Login/pic2.jpg";
import pic3 from "../../../assets/Login/pic3.jpg";
import Animation from "@/Components/Animation";
import { validateNIK, isValidEmail } from "../../utils/validation";

export default function Login({ status, canResetPassword, redirect }) {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        remember: false,
        redirect: redirect || "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleUsernameChange = (e) => {
        let value = e.target.value;
        
        if (/^\d+$/.test(value)) {
            value = validateNIK(value);
        }
        
        setData("username", value);
    };

    const submit = (e) => {
        e.preventDefault();
        
        const isEmail = data.username.includes('@');
        const isNIK = /^\d+$/.test(data.username);
        
        if (isEmail && !isValidEmail(data.username)) {
            return;
        }
        
        if (isNIK && data.username.length !== 16) {
            return;
        }
        
        post("/login");
    };

    return (
        <GuestLayout description="Silakan masuk dulu untuk bergabung di Website Desa Karanganyar dan temukan berbagai informasi serta layanan desa secara mudah">
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <Animation delay={0.2}>
                <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="lg:hidden w-full p-4 bg-gradient-to-br from-blue-100 to-white">
                        <div className="grid grid-cols-3 gap-2 w-full">
                            <div className="h-20 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={pic1}
                                    alt="Gambar Kegiatan Warga 1"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="h-20 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={pic2}
                                    alt="Gambar Kegiatan Warga 2"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="h-20 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={pic3}
                                    alt="Gambar Kegiatan Warga 3"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:w-1/2 p-8 bg-gradient-to-br from-blue-100 to-white flex-col items-center justify-center space-y-6">
                        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-md">
                            <img
                                src={pic1}
                                alt="Gambar Kegiatan Warga 1"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-md">
                                <img
                                    src={pic3}
                                    alt="Gambar Kegiatan Warga 2"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm overflow-hidden shadow-md">
                                <img
                                    src={pic2}
                                    alt="Gambar Kegiatan Warga 3"
                                    className="w-full h-full object-cover rounded-lg"
                                />
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
                                    placeholder="Masukkan NIK sesuai KTP / Masukkan alamat email"
                                    onChange={handleUsernameChange}
                                />
                                <InputError
                                    message={errors.username}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />
                                <div className="relative">
                                    <TextInput
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full pr-10"
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        placeholder="Masukkan password Anda"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? (
                                            <EyeOffIcon />
                                        ) : (
                                            <EyeIcon />
                                        )}
                                    </button>
                                </div>
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className="ms-2 text-sm text-gray-600">
                                        Ingat saya
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="underline text-sm text-blue-600 hover:text-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Lupa password?
                                    </Link>
                                )}

                                <PrimaryButton
                                    className="ms-4 px-6 py-2 bg-darkBlue"
                                    disabled={processing}
                                >
                                    {processing ? "Masuk..." : "Masuk"}
                                </PrimaryButton>
                            </div>

                            <div className="text-center mt-6">
                                <Link
                                    href={route("register.page")}
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
            </Animation>
        </GuestLayout>
    );
}



