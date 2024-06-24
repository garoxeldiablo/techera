import { Rating, RatingStar } from "flowbite-react";
import DateTimeInput from "../../components/datetime";
import Footer from "../../components/footer";
import Modal from "../../components/bookmodal";
import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

export default function Booking() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [teknisiId, setTeknisi] = useState([]);
  const {id} = useParams();
      
  useEffect(() => {
    const fetchTeknisiId = async () => {
    try {
        const response = await axios.get(`https://tchapi.jovis.medanhosting.co.id/teknisi/${id}`, {
        withCredentials: true,
        });
        setTeknisi(response.data);
    } catch (e) {
        console.error('Server error', e);
    }
  };
  fetchTeknisiId();
  }, [id]);
    const mimeType = 'image/jpeg';


  return (
    <>

      <div className="relative main-content top-24 px-8 mb-36">
        {/* Back button and Informasi Teknsii text */}
        <div className=" relative flex mb-15 md:ml-40">
          <button
            onClick={() => navigate("/consultation")}
            className="text-blue-800 text-2xl mr-2"
          >
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
          </button>
          <div className="relative text-blue-800 text-xl font-bold leading-10 md:left-4">
            Informasi Teknisi
          </div>
        </div>

        {/* Ratings */}
          <div key={teknisiId.Id_teknisi} className="relative w-full max-w-7xl mx-auto flex flex-col items-center mb-10 mt-16">
          <img
            className="Ellipse118 w-36 h-36 rounded-full border-4 border-blue-800 mt-5"
            src={`data:${mimeType};base64,${teknisiId.imgteknisi}`}
          />
          <h2 className="NamaUser font-semibold text-blue-800 text-4xl leading-10 mt-1">
            {teknisiId.nama_teknisi}
          </h2>
          <p className="text-gray-500 mt-2">{teknisiId.kategori}</p>
          <div className=" py-12 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">Penilaian</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    <Rating size="lg">
                      <RatingStar />
                      <p className="ml-2 text-gray-700">{teknisiId.rating}</p>
                      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                    </Rating>
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">
                    Penyelesaian
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-700 sm:text-5xl">
                    {teknisiId.sumpenyelesaian}
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">Pengalaman</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-700 sm:text-5xl">
                    {teknisiId.pengalaman}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* tentang */}
          <h3 className="text-2xl text-blue-800 mb-2">Tentang teknisi</h3>
          <p className="text-gray-700">
            {teknisiId.about}
          </p>
        </div>

        <div className="px-8">
        {/* jadwal */}
        <div className="mt-4 gap-x-4">
          <div>
            <h3 className="text-2xl text-blue-800 mb-2">Atur jadwal</h3>
            <DateTimeInput />
            <button
              onClick={openModal}
              className="md:ml-2 md:mt-8 px-3 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Pilih Rencana
            </button>
          </div>
        </div>

        {/* modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />

        {/* review */}
        <div className="mt-4">
          <div className="my-3">
            <h3 className="text-2xl text-blue-800 mb-2">Penilaian</h3>
            <div className="flex gap-x-2 items-center">
              <Rating size="lg">
                <RatingStar />
                <p className="ml-2 font-semibold text-gray-900 text-3xl">
                  {teknisiId.rating}
                </p>
              </Rating>
              <p className="ml-2 text-gray-500 text-xl">
                / 5.0
              </p>
            </div>
          </div>
          <div className="container-review">
            {/* user review */}
            <div className="my-5" id="reviewuser">
              <div className="flex gap-x-2 items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <p className="text-base text-blue-900 font-semibold">
                  Agus Bisana
                </p>
                <span className="h-1 w-1 rounded-full bg-gray-500" />
                <p className=" text-gray-500 text-sm">
                  5bln lalu
                </p>
              </div>
              <div className="gap-x-2">
                <div className="flex items-center gap-x-2">
                  <Rating>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar fill="false" />
                  </Rating>
                  <p className=" text-gray-500 text-sm">4.0</p>
                </div>
                <p className=" text-gray-500 text-sm">
                  Mantap laptop dah ga ngelek lagi
                </p>
              </div>
            </div>
            {/* user review */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
