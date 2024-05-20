import { Datepicker, Rating, RatingStar } from "flowbite-react"
import NavbarClient from "../components/navbarclient"

export default function Booking(){

    const today = new Date();
    return (
        <>
        <NavbarClient />

        <div className="relative main-content top-24 px-14 mb-36">
            {/* Back button and Create Post text */}
            <div className=" flex justify-start items-center mb-10">
                <a href="/consultation" className="text-blue-800 text-2xl mr-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                    </svg>
                </a>
                <div className="relative text-blue-800 text-3xl font-bold leading-10 left-4">
                    Informasi Teknisi
                </div>
            </div>

            {/* Ratings */}
            <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center mb-10">
                <img
                    className="Ellipse118 w-36 h-36 rounded-full border-4 border-blue-800 mt-5"
                    src="../src/assets/technician/me1.jpg"
                />
                <h2 className="NamaUser font-semibold text-blue-800 text-4xl leading-10 mt-1">
                    Jovis Jocunda
                </h2>
                <p className="text-gray-500 mt-2">Software</p>
                <div class=" py-12 sm:py-12">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-600">
                                Penilaian
                            </dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <Rating size='lg'>
                                    <RatingStar/>
                                    <p className="ml-2 text-gray-900 dark:text-white">4.95</p>
                                <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                                </Rating>
                            </dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-600">Penyelesaian</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">103+</dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-600">Pengalaman</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">2 Years</dd>
                        </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* tentang */}
            <div>
                <h3 className="text-2xl text-blue-800 mb-2">Tentang teknisi</h3>
                <p className="text-gray-700">Halo! Saya Jovis Jocunda, seorang teknisi perangkat lunak yang berdedikasi dengan semangat untuk menyelesaikan tantangan teknis yang kompleks. Dengan pengalaman bertahun-tahun di industri ini, saya telah mengasah keterampilan saya dalam mendiagnosis dan menyelesaikan masalah perangkat lunak dengan presisi dan efisiensi. Komitmen saya untuk tetap terupdate dengan perkembangan teknologi terbaru memastikan bahwa saya memberikan solusi terkini kepada klien-klien saya. Baik itu memecahkan masalah bug perangkat lunak, mengoptimalkan kinerja sistem, atau memberikan panduan ahli, saya di sini untuk memberikan dukungan teknis terbaik yang disesuaikan dengan kebutuhan Anda.</p>
            </div>

            {/* jadwal */}
            <div className="flex mt-4 gap-x-4">
                <div>
                    <h3 className="text-2xl text-blue-800 mb-2">Atur jadwal</h3>
                    <Datepicker defaultDate={today} minDate={today} maxDate={new Date(2024, 12, 30)} />
                </div>
                <div>
                    <h3 className="text-2xl text-blue-800 mb-2">Atur jadwal</h3>
                    <Datepicker defaultDate={today} minDate={today} maxDate={new Date(2024, 12, 30)} />
                </div>
            </div>
        </div>
        </>
    )
}