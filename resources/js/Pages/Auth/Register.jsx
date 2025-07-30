import { useEffect, useState } from "react";
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
import { validateNIK, validatePhoneNumber, isValidNIK, isValidPhoneNumber, isValidEmail } from "../../utils/validation";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [nikError, setNikError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        nik: "",
        email: "",
        no_hp: "",
        password: "",
        password_confirmation: "",
    });

    const handleNikChange = (e) => {
        const validatedNik = validateNIK(e.target.value);
        setData("nik", validatedNik);
        
        if (validatedNik.length > 0 && validatedNik.length < 16) {
            setNikError('NIK harus 16 digit');
        } else if (validatedNik.length === 16) {
            setNikError('');
        }
    };

    const handlePhoneChange = (e) => {
        const validatedPhone = validatePhoneNumber(e.target.value);
        setData("no_hp", validatedPhone);
        
        if (validatedPhone.length > 0 && !isValidPhoneNumber(validatedPhone)) {
            setPhoneError('Format nomor HP tidak valid');
        } else {
            setPhoneError('');
        }
    };

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setData("email", email);
        
        if (email.length > 0 && !isValidEmail(email)) {
            setEmailError('Format email tidak valid (harus ada @)');
        } else {
            setEmailError('');
        }
    };

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const submit = (e) => {
        e.preventDefault();
        
        if (!isValidNIK(data.nik)) {
            setNikError('NIK harus tepat 16 digit');
            return;
        }
        
        if (!isValidPhoneNumber(data.no_hp)) {
            setPhoneError('Format nomor HP tidak valid');
            return;
        }

        if (!isValidEmail(data.email)) {
            setEmailError('Format email tidak valid (harus ada @)');
            return;
        }
        
        post("/register");
    };

    return (
        <GuestLayout description="Silakan daftar terlebih dahulu untuk bergabung di Website Desa Karanganyar dan nikmati berbagai layanan desa">
            <Head title="Register" />
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
                            Kalau belum punya akun, Daftar Dulu yuk!
                        </h2>

                        <form onSubmit={submit}>
                            <div>
                                <InputLabel
                                    htmlFor="name"
                                    value="Nama Lengkap"
                                />
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
                                    onChange={handleNikChange}
                                    required
                                />
                                <InputError message={errors.nik || nikError} className="mt-2" />
                                {data.nik.length > 0 && (
                                    <div className="mt-1 text-xs text-gray-500">
                                        {data.nik.length}/16 digit
                                    </div>
                                )}
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
                                    placeholder="contoh@email.com"
                                    onChange={handleEmailChange}
                                    required
                                />
                                <InputError message={errors.email || emailError} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="no_hp"
                                    value="Nomor Telepon"
                                />
                                <TextInput
                                    id="no_hp"
                                    type="tel"
                                    name="no_hp"
                                    value={data.no_hp}
                                    className="mt-1 block w-full"
                                    autoComplete="tel"
                                    placeholder="Contoh: 08123456789"
                                    onChange={handlePhoneChange}
                                    required
                                />
                                <InputError message={errors.no_hp || phoneError} className="mt-2" />
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
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
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

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Konfirmasi Password"
                                />
                                <div className="relative">
                                    <TextInput
                                        id="password_confirmation"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full pr-10"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
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
                                    {processing ? "Mendaftar..." : "Daftar"}
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </Animation>
        </GuestLayout>
    );
}



