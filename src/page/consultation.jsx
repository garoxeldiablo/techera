import ConsultationCardSlider from "../components/consultationslider";
import Footer from "../components/footer";
import NavbarClient from "../components/navbarclient";
import { Rating,RatingStar } from "flowbite-react";

export default function Consultation () {
    return (
    <>
        <div className="relative z-50">
            <NavbarClient/>
        </div>
        
        <div className="w-full pt-24 px-56 bg-custom-bg bg-cover bg-center">
            <div className="absolute inset-0 bg-blue-800 bg-opacity-50 h-72 z-0 mt-3"></div>

            <div className="relative z-10">
                <h1 className="block font-bold text-4xl pb-2 text-white">Consult Your</h1>
                <h1 className="block font-bold text-4xl pb-4 text-white">Computer Problem</h1>
                <p className="pb-7 text-white">Welcome to the consultation page, where our experts are dedicated to providing tailored solutions to address your technical challenges and optimize your computing experience. Whether it is troubleshooting hardware issues, resolving software glitches, or optimizing system performance, our dedicated team of experts is here to assist you every step of the way.</p>
            </div>
        </div>

        <div className="mt-6 w-full flex justify-center">
            <form className="flex items-center w-full max-w-lg">
                <input 
                    type="text" 
                    className="flex-grow p-3 border border-blue-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-800 text-xl" 
                    placeholder="What do you need?">
                </input>
                <button 
                    type="submit" 
                    className="p-3 bg-blue-800 border border-blue-800 text-white rounded-r-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 text-xl">
                    Search
                </button>
            </form>
        </div>

        <div className="mt-5 mx-56 border-2 border-blue-800 rounded-md shadow-md">
            <h2 className="border-b-2 border-blue-800 pt-2 pl-3 pb-1 font-semibold text-blue-800 text-lg">Active Feature</h2>

            <div className="flex justify-between">
                <div className="flex gap-2 bg-gray-200 rounded-md border border-blue-800 mt-2 mb-3 ml-3 shadow-md">
                    <img src="../src/assets/technician/me1.jpg" alt="" className="max-w-32 px-3 py-3 object-cover"/>
                    <div className="pr-20 py-3">
                        <h2 className="font-bold text-lg">Jovis Jocunda</h2>
                        <p className="text-xs font-medium -mt-1 mb-2">Software</p>
                        <Rating>
                        <RatingStar />
                        <RatingStar />
                        <RatingStar />
                        <RatingStar />
                        <RatingStar filled={false} />
                        </Rating>
                        <button className="text-xs bg-blue-800 text-white px-4 py-0.5 rounded-md shadow-md mt-2">
                            Live Chat
                        </button>
                    </div>
                </div>

                <div className="mt-10 mr-5 mb-10">
                    <button className="text-md bg-blue-800 text-white px-5 py-2 rounded-md shadow-md">
                        Solved
                    </button>

                    <br />

                    <button className="text-md bg-gray-400 text-white pl-3 pr-2.5 py-2 rounded-md shadow-md mt-2">
                        Unsolved
                    </button>
                </div>
            </div>
        </div>

        <div className="mx-56 mt-6 mb-6">
            <h1 className="text-2xl text-blue-800 font-bold mb-4">Category</h1>

            <div className="flex justify-between gap-6">
                <button className="border border-blue-800 shadow-md text-blue-800 px-20 rounded-md py-1.5 font-semibold hover:text-white hover:bg-blue-800 text-lg">
                    Software
                </button>

                <button className="border border-blue-800 shadow-md text-blue-800 px-20 rounded-md py-1.5 font-semibold hover:text-white hover:bg-blue-800 text-lg">
                    Hardware
                </button>

                <button className="border border-blue-800 shadow-md text-blue-800 px-20 rounded-md py-1.5 font-semibold hover:text-white hover:bg-blue-800 text-lg">
                    Network
                </button>

                <button className="border border-blue-800 shadow-md text-blue-800 px-16 rounded-md py-1.5 font-semibold hover:text-white hover:bg-blue-800 text-lg">
                    Cyber Security
                </button>
            </div>
        </div>

        <div className="mx-56 mt-10 mb-2">
            <h1 className="font-bold text-blue-800 text-2xl">Our Technician</h1>
        </div>

        <ConsultationCardSlider/>

        <div className="mx-56 mt-10 mb-2">
            <h1 className="font-bold text-blue-800 text-2xl mb-6">Order History</h1>

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
                            Order Again
                        </button>
                    </div>
                </div>

                <div className="mb-2">
                    <h3 className="font-bold">Your Review:</h3>
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
                            Order Again
                        </button>
                    </div>
                </div>

                <div className="mb-2">
                    <h3 className="font-bold">Your Review:</h3>
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