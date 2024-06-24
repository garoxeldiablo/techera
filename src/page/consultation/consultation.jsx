import ConsultationCardSlider from "../../components/consultationslider";
import Footer from "../../components/footer";
import { Rating,RatingStar } from "flowbite-react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Consultation () {
    useEffect(()=>{
        Aos.init({
            duration: 1000,
            once: true
        })
    })

    // teknisi aktif dengan user
    const teknisiAktif = [
        {
            id: 1,
            name: "Jovis Jocunda",
            category: "Software",
        }
    ]

    
    return (
    <>
        
        <div className="pt-24 md:mb-20">
            <div className="relative w-full md:h-64">
            <img
                className="h-full w-full object-cover"
                src="/assets/content/consultation-hero.jpg"
                alt="Random image"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-sky-950 opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                <div data-aos='fade-right' className="relative md:px-40 p-3">
                <h2 className="text-white text-4xl font-bold mb-4 text-justify">
                    Konsultasikan <br />
                    Masalahmu!
                </h2>
                <p className="desc text-white text-start text-sm md:text-lg">
                Selamat datang di konsultasi, di mana para ahli akan memberikan solusi dari tantangan teknis Anda dan mengoptimalkan pengalaman komputasi Anda baik itu pemecahan masalah perangkat keras, mengatasi gangguan perangkat lunak, atau mengoptimalkan kinerja sistem. Tim ahli kami yang berdedikasi siap membantu Anda di setiap langkah.</p>
                </div>
            </div>
            </div>
        </div>

        <div className="mt-6 w-full flex justify-center p-3">
            <form className="flex items-center w-full max-w-lg">
                <input 
                    type="text" 
                    className="flex-grow p-3 border border-blue-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-800 md:text-xl text-sm" 
                    placeholder="Apa yang Anda butuhkan?">
                </input>
                <button 
                    type="submit" 
                    className="p-3 bg-blue-800 border border-blue-800 text-white rounded-r-lg hover:bg-blue-600 transition ease-in focus:outline-none focus:ring-2 focus:ring-blue-800 text-sm md:text-xl">
                    Cari
                </button>
            </form>
        </div>

        {/* teknisi aktif */}

        <div className="mt-5 mx-auto max-w-4xl rounded-md ">
            <h2 className="pt-2 pl-3 pb-1 font-semibold text-blue-800 text-lg">Jadwal Anda</h2>
            <div className="">
                {teknisiAktif.map((teknisi)=>(
                    <div className="flex gap-2 rounded-md border mt-2 mb-3 mx-3 shadow-md">
                        <img src="/assets/technician/me1.jpg" alt="" className="object-fit w-28 h-28 rounded-t-lg md:rounded-none m-2"/>
                        <div className="flex flex-col justify-between pr-4 py-3">
                            <div>
                                <h2 className="font-bold text-lg">{teknisi.name}</h2>
                                <p className="text-xs font-medium -mt-1 mb-2">{teknisi.category}</p>
                                <Rating>
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar filled={false} />
                                </Rating>
                            </div>
                            <button className="text-xs bg-blue-800 text-white px-4 py-1 rounded-md shadow-md mt-2 lg:mt-0">
                                Chat
                            </button>
                        </div>
                        <div className="flex flex-col justify-center items-center lg:items-center mt-2 mr-5 mb-10 lg:mb-0">
                            <button className="text-sm text-blue-800 px-5 py-2 border-b hover:border-b-blue-800 transition ease-in">
                                Solved
                            </button>
                            <button className="text-sm text-gray-800 px-5 py-2 border-b hover:border-gray-800 transition ease-in">
                                Unsolved
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* kategori */}

        <div className="mx-4 md:mx-20 lg:mx-56 mt-6 mb-6">
            <h1 className="text-xl md:text-2xl text-blue-800 font-bold mb-4">Kategori</h1>
            <div className="flex flex-wrap gap-4">
                <button className="border border-blue-800 shadow-md text-blue-800 px-10 md:px-16 lg:px-20 rounded-md py-1.5 font-semibold hover:text-white hover:bg-blue-800 text-md md:text-lg">
                    Software
                </button>
                <button className="border border-blue-800 shadow-md text-blue-800 px-10 md:px-16 lg:px-20 rounded-md py-1.5 font-semibold hover:text-white hover:bg-blue-800 text-md md:text-lg">
                    Hardware
                </button>
                <button className="border border-blue-800 shadow-md text-blue-800 px-10 md:px-16 lg:px-20 rounded-md py-1.5 font-semibold hover:text-white hover:bg-blue-800 text-md md:text-lg">
                    Network
                </button>
                <button className="border border-blue-800 shadow-md text-blue-800 px-8 md:px-12 lg:px-16 rounded-md py-1.5 font-semibold hover:text-white hover:bg-blue-800 text-md md:text-lg">
                    Cyber Security
                </button>
            </div>
        </div>

        <div className="mx-4 md:mx-20 lg:mx-56 mt-6 mb-6">
            <h1 className="font-bold text-blue-800 text-2xl">Teknisi Kami</h1>
        </div>

        <ConsultationCardSlider/>

        <div className="lg:mx-56 mt-10 mb-2 p-2">
            <h1 className="font-bold text-blue-800 text-2xl mb-6">Riwayat Pemesanan</h1>

            <div className="border-b border-black mb-4">
                <div className="flex justify-between mb-6">
                    <div>
                        <h2 className="font-bold text-xl">Jovis Jocunda</h2>
                        <p>30 Januari 2024</p>
                        <p>12.00</p>
                    </div>

                    <div>
                        <h3>Rp. 999.999</h3>
                        <button className="bg-blue-800 text-white text-xs rounded-md px-3 py-1 shadow-md">
                            Pesan Lagi
                        </button>
                    </div>
                </div>

                <div className="mb-2">
                    <h3 className="font-bold">Ulasan Anda:</h3>
                    <Rating>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    </Rating>
                    <p>Pelayanan sangat bagus dan teknisinya sangat profesional dan ramah. Semua tahap ditunjukkan dan transparan. Keren memang techera, sukses selalu!!</p>
                </div>
            </div>

            <div className="border-b border-black mb-4">
                <div className="flex justify-between mb-6">
                    <div>
                        <h2 className="font-bold text-xl">Agus Bisana Putra</h2>
                        <p>30 Februari 2024</p>
                        <p>12.00</p>
                    </div>

                    <div>
                        <h3>Rp. 900.999</h3>
                        <button className="bg-blue-800 text-white text-xs rounded-md px-3 py-1 shadow-md">
                            Pesan Lagi
                        </button>
                    </div>
                </div>

                <div className="mb-2">
                    <h3 className="font-bold">Ulasan Anda:</h3>
                    <Rating>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    </Rating>
                    <p>MANTEP EMG BANG AGUS!! AMPUN PUHH</p>
                </div>
            </div>
        </div>

        <Footer/>
    </>
    )
}