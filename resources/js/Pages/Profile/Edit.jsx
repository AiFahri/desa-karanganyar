import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';

const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <div>
            <Navbar />
            <header className="w-full bg-gradient-to-b from-blue-500 to-cyan-400 py-11 px-8 shadow-md sticky top-0 z-10 max-h-28 mt-[76px]">
                <div className="max-w-[100vw] mx-auto">
                <Link href="/portal" className="flex items-center space-x-2 text-white font-bold text-lg hover:opacity-80 transition-opacity">
                    <ArrowLeftIcon className="w-8 h-8" />
                    <span className='text-3xl font-sans'>Kembali</span>
                </Link>
                </div>
            </header>
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-full lg:mx-[200px]"
                        />
                        
                    {/* <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
                </div>
            </div>
        </div>
        </div>
    );
}
