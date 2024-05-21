import NavbarClient from "../components/navbarclient";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();

  return (
    <>
      <NavbarClient />
      <div className="relative main-content top-24 px-10 mb-40">
        
        {/* Back button and Create Post text */}
        <div className=" relative flex items-center mb-15 ml-40">
          <button onClick={() => navigate('/forum')} className="text-blue-800 text-2xl mr-2">
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
            Buat Topik
          </div>
        </div>

        {/* Create Post */}
        <div className="flex justify-center mt-16">
          <div className="w-full max-w-3xl border-2 border-blue-800 rounded-lg p-4">
            <label
              htmlFor="comment"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              KOMEN
            </label>
            <textarea
              id="comment"
              rows="6"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Apa yang ingin anda bagikan?"
            ></textarea>
            <div className="flex mt-2 space-x-4 relative left-1">
              <button type="button" className="text-blue-800 font-bold text-xl">
                <svg
                  width="15"
                  height="23"
                  viewBox="0 0 20 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.41469 0.101212C12.021 0.101212 14.7257 0.551998 16.5289 1.60383C18.4823 2.65567 19.3838 4.45882 19.3838 7.01328C19.3838 8.5159 18.9331 9.86826 18.332 10.9201C17.9913 11.4339 17.5488 11.8723 17.0319 12.2083C16.515 12.5443 15.9346 12.7707 15.3268 12.8735C16.1857 13.0742 17.0006 13.4307 17.731 13.9253C18.332 14.3761 18.9331 15.1274 19.3838 15.8788C19.8541 16.9672 20.0601 18.1515 19.9849 19.3348C20.038 20.4204 19.8344 21.5032 19.3905 22.4953C18.9467 23.4874 18.2752 24.3609 17.4304 25.0448C15.2914 26.5724 12.6908 27.3155 10.0676 27.1484H0V0.101212H8.41469ZM9.01574 10.7698C10.6686 10.7698 11.8707 10.6196 12.4718 10.0185C13.2231 9.56774 13.5236 8.66616 13.5236 7.76459C13.5236 6.71275 13.0728 5.96144 12.3215 5.51065C11.5702 5.05987 10.3681 4.75934 8.71521 4.75934H5.70997V10.7698H9.01574ZM5.70997 15.2777V22.6406H9.46653C11.1194 22.6406 12.4718 22.1898 13.0728 21.5887C13.8241 20.8374 14.1247 20.0861 14.1247 18.884C14.1426 18.4298 14.0572 17.9775 13.875 17.561C13.6928 17.1446 13.4185 16.7749 13.0728 16.4798C12.3215 15.8788 11.1194 15.5782 9.31626 15.5782H5.55971L5.70997 15.2777Z"
                    fill="#004AAB"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="text-blue-800 font-bold text-xl italic"
              >
                <svg
                  width="15"
                  height="23"
                  viewBox="0 0 20 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L6.36364 3.63636H10L3.50364 23.6364H0.776364L0 27.2727H11.5L12.5 23.6364H9.18909L15.4545 3.63636H19.0909L20 0H7.5Z"
                    fill="#004AAB"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="text-blue-800 font-bold text-xl relative"
              >
                <svg
                  width="30"
                  height="21"
                  viewBox="0 0 38 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.82184 4.23332V0.122208H37.5996V4.23332H8.82184ZM8.82184 12.4555V8.34443H37.5996V12.4555H8.82184ZM8.82184 20.6778V16.5666H37.5996V20.6778H8.82184ZM2.65517 4.23332C2.07276 4.23332 1.58491 4.03598 1.19162 3.64132C0.79832 3.24665 0.600987 2.7588 0.599616 2.17776C0.598246 1.59673 0.79558 1.10887 1.19162 0.714208C1.58765 0.319541 2.07551 0.122208 2.65517 0.122208C3.23484 0.122208 3.72337 0.319541 4.12078 0.714208C4.51819 1.10887 4.71484 1.59673 4.71073 2.17776C4.70662 2.7588 4.50928 3.24734 4.11873 3.64337C3.72817 4.03941 3.24032 4.23606 2.65517 4.23332ZM2.65517 12.4555C2.07276 12.4555 1.58491 12.2582 1.19162 11.8635C0.79832 11.4689 0.600987 10.981 0.599616 10.4C0.598246 9.81894 0.79558 9.33109 1.19162 8.93643C1.58765 8.54176 2.07551 8.34443 2.65517 8.34443C3.23484 8.34443 3.72337 8.54176 4.12078 8.93643C4.51819 9.33109 4.71484 9.81894 4.71073 10.4C4.70662 10.981 4.50928 11.4696 4.11873 11.8656C3.72817 12.2616 3.24032 12.4583 2.65517 12.4555ZM2.65517 20.6778C2.07276 20.6778 1.58491 20.4804 1.19162 20.0858C0.79832 19.6911 0.600987 19.2032 0.599616 18.6222C0.598246 18.0412 0.79558 17.5533 1.19162 17.1586C1.58765 16.764 2.07551 16.5666 2.65517 16.5666C3.23484 16.5666 3.72337 16.764 4.12078 17.1586C4.51819 17.5533 4.71484 18.0412 4.71073 18.6222C4.70662 19.2032 4.50928 19.6918 4.11873 20.0878C3.72817 20.4838 3.24032 20.6805 2.65517 20.6778Z"
                    fill="#004AAB"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Add images */}
        <div className="flex justify-center mt-10">
          <div className="w-full max-w-3xl border-2 border-blue-800 rounded-lg p-4">
            <label className="block mb-2 text-sm font-medium text-black">
              TAMBAHKAN GAMBAR
            </label>
            <div className="flex space-x-4">
              <img
                className="w-32 h-32 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1642783327704-2500e96fe3d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsd2FyZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Random image 1"
              />
              <img
                className="w-32 h-32 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1589523322065-40163a8dd001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZSUyMHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Random image 2"
              />
              <button
                type="button"
                className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300"
              >
                <svg
                  className="w-10 h-10 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Post Button */}
        <div className="flex justify-end relative top-10 mr-52 mb-10">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-4" // Add ml-4 for left margin
            onClick={() => navigate("/forum")}
          >
            Unggah
          </button>
        </div>
      </div>

      {/* footer */}
      <Footer />
      {/* Footer */}
      
    </>
  );
}
