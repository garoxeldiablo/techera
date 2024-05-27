import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function CardFeature(){
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        })
      })
    return (
        <>
        <div className='my-32'>
            <div className='text-center'>
                <h1 className='text-4xl text-blue-800 font-semibold my-2'>Mengapa Techera?</h1>
                <p className='text-gray-500'>Techera adalah mitra teknologi yang andal yang dapat secara efisien menyelesaikan semua masalah terkait komputer Anda.
                </p>
            </div>
            <div className='gap-x-4 justify-center my-14 mx-9 md:flex'>
                <div data-aos='fade-up' class="md:w-1/5 mb-2 bg-white border border-gray-200 rounded-lg shadow">
                    <div class="px-5 pb-5 text-center">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 text-blue-800">
                                <path fillRule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <h5 className="text-xl font-bold tracking-tight text-gray-700 ">
                            Live Chat
                        </h5>
                        <p className="font-normal text-gray-500 ">
                            Berkomunikasi dengan mudah dengan teknisi kami
                        </p>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='100' class="md:w-1/5 mb-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <div class="px-5 pb-5 text-center">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 text-blue-800">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>   
                        </div>

                        <h5 className="text-xl font-bold tracking-tight text-gray-700 ">
                        Ratings
                        </h5>
                        <p className="font-normal text-gray-500">
                        Teknisi profesional dengan kualifikasi dan peringkat yang hebat
                        </p>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='300' class="md:w-1/5 mb-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <div class="px-5 pb-5 text-center">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 text-blue-800">
                            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <h5 className="text-xl font-bold tracking-tight text-gray-700">
                        Reference
                        </h5>
                        <p className="font-normal text-gray-500">
                        Temukan banyak referensi bacaan yang kredibel
                        </p>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='500' class="md:w-1/5 mb-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <div class="px-5 pb-5 text-center">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 text-blue-800">
                            <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <h5 className="text-xl font-bold tracking-tight text-gray-700">
                        Remote
                        </h5>
                        <p className="font-normal text-gray-500">
                        Memperbaiki komputer Anda dari jarak jauh
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}