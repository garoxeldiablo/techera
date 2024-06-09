import { useEffect, useState } from 'react'
import { Carousel } from 'flowbite-react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/footer';
import CardTechnician from '../components/cardtechnician';
import CardFeature from '../components/cardfeature';
import Accordionn from '../components/accordion';
import Modal from '../components/bookmodal';

export default function Home() {
  useEffect(() => {
    Aos.init({
        duration: 1000,
        once: true
    })
  })
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <>

    {/* hero */}
    <section>
      <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl py-40">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div data-aos='fade-up' className="text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-blue-800 md:text-5xl lg:text-6xl lg:max-w-7xl">
              Sambungkan ke internet, kami akan menyelesaikan masalah komputer Anda.
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">Techera menawarkan solusi terbaik untuk menyelesaikan semua masalah komputer Anda dengan lancar
              </p>
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button onClick={openModal} className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Mulai
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* hero */}

    {/* carousel */}
    <div className='flex justify-center'>
      <div className="w-5/6 h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="../src/assets/content/3.png" alt="..." />
          <img src="../src/assets/content/order.png" alt="..." />
          <img src="../src/assets/content/website carousel 1.png" alt="..." />
          <img src="../src/assets/content/website carousel 2.png" alt="..." />
        </Carousel>
      </div>
    </div>
    {/* carousel */}

    {/* about */}
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 md:mt-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-aos='fade-right' className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Tentang Kami</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Techera adalah platform layanan online dan layanan konsultasi yang memudahkan Anda yang memiliki masalah komputer, terutama perangkat lunak dan manajemen data. Kami menyelesaikan kasus-kasus yang sering terjadi pada perangkat komputer seperti pengaturan aplikasi, manajemen disk, instalasi driver, dan masalah pembaruan Windows.
          </p>
        </div>
      </div>
    </div>
    {/* about */}

    {/* modal */}
    <Modal isOpen={isModalOpen} onClose={closeModal} />

    {/* card */}
    <CardFeature/>
    {/* card */}

    {/* technician */}
    <div className='text-center mb-6'>
          <h1 className='text-4xl text-blue-800 font-semibold my-2'>Teknisi dengan record terbaik</h1>
          <p className='text-gray-500'>Temukan teknisi berpengalaman dengan riwayat penyelesaian terbaik dan siap untuk menyelesaikan masalah komputer anda.
        </p>
    </div>
    <div className='flex justify-center m-2'>
      <div className='grid grid-cols-2 gap-4'>
      <CardTechnician/>
      </div>
    </div>


    {/* qna */}
    <div className='my-32 py-8'>
      <div className='md:flex justify-center p-6 gap-x-6'>
        <div data-aos='fade-right' className='max-w-md mb-4'>
          <h1 className='text-4xl text-blue-800 font-semibold my-2'>Butuh Pertanyaan Relevan?</h1>
          <p className='text-gray-500 mb-7'>Berikut adalah pertanyaan yang sering diajukan untuk solusi cepat terhadap pertanyaan umum.</p>
          <p className="mb-2 text-gray-700 dark:text-gray-400 font-bold">
          Punya pertanyaan lain?
          </p>
          <button className='p-2 bg-blue-800 text-white w-36 rounded-md'>Tanyakan</button>
        </div>
        <div data-aos='fade-left' className='max-w-sm'>
        <div className="p-4 bg-gray-100 rounded-lg">
          <Accordionn
            title="Apa itu techera?"
            answer="Techera adalah platform konsultasi dan layanan online"
          />
          <Accordionn
            title="Bagaimana cara menemukan teknisi dengan rating bagus?"
            answer="Techera menyediakan teknisi dengan record penyelesaian yang baik"
          />
          <Accordionn title="Bagaimana sistem pembayarannya?" answer="Di techera menggunakan metode selesaikan baru bayar" />
        </div>
        </div>
      </div>
    </div>

    {/* footer */}
    <Footer/>
    {/* footer */}
  </>
  )
}
