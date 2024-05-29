import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}

      <div className="relative main-content top-24 px-10 mb-36">
        
        {/* Back button and Change Profile text */}
        <div className=" relative flex items-center mb-10 ml-40">
          <button 
          onClick={() => navigate('/clientarea')}
          className="text-blue-800 text-2xl mr-2">
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
          <div className="relative text-blue-800 text-3xl font-bold leading-10 left-4">
            Profil Anda
          </div>
        </div>

        {/* Change Image */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center mb-10">
          <h2 className="NamaUser font-semibold text-blue-800 text-4xl leading-10 mt-1">
            Agus Bisana
          </h2>
          <img
            className="Ellipse118 w-36 h-36 rounded-full border-4 border-blue-800 mt-5"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <button className="text-blue-800 underline mt-2">Ganti gambar</button>
        </div>
        
        {/* Form */}
        <form className="space-y-5 relative max-w-4xl mx-auto p-8">
          <div className="name w-100">
            <label className="block mb-2 text-sm font-semibold text-black">
              Nama
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
              placeholder="Agus Bisana"
            />
          </div>
          <div className="flex space-x-5">
            <div className="email w-full">
              <label className="block mb-2 text-sm font-semibold text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="jovissepuhhacker@gmail.com"
              />
            </div>
            <div className="phone-number w-full">
              <label className="block mb-2 text-sm font-semibold text-black">
                Nomor Telepon
              </label>
              <input
                type="text"
                id="phone-number"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="08129988776655"
              />
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="email w-full">
              <label className="block mb-2 text-sm font-semibold text-black">
                Ganti Kata Sandi
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Masukkan kata sandi yang sekarang"
              />
            </div>
            <div className="phone-number w-full mt-7">
              <input
                type="password"
                id="new-password"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Masukkan kata sandi yang baru"
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-gray-500 dark:text-gray-400 text-xs"
              >
                Kata sandi harus memuat setidaknya{" "}
                <span className="text-green-500">8 karakter </span> 
                harus memuat setidaknya{" "}
                <span className="text-green-500">1 huruf kapital</span>,{" "}
                <span className="text-green-500">1 angka</span> dan{" "}
                <span className="text-green-500">1 karakter spesial</span>.
              </p>
            </div>
          </div>
        </form>

        {/* Save Button */}
        <div className="flex flex-col items-center mt-5">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={() => navigate("/clientarea")}
          >
            Simpan Perubahan
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-xs px-3 py-2 me-2 mt-2"
          >
            Hapus Akun
          </button>
        </div>
      </div>

      {/* footer */}
      <Footer/>
      
    </>
  );
}
