import Footer from "../../components/footer";
import { Link } from "react-router-dom";

export default function Forum() {
  const forum = [
    {
      name : "Shaela",
      imgProfil : "https://randomuser.me/api/portraits/men/32.jpg",
      discuss : "Gimana cara memperbaiki laptop yang blue screen?",
      date : "20/03/2024",
      img : "src/assets/content/post 1.png",
      like : "15",
      sumDiscuss : "5"
    },
    {
      name : "Shaela",
      imgProfil : "https://randomuser.me/api/portraits/men/32.jpg",
      discuss : "Gimana cara memperbaiki laptop yang blue screen?",
      date : "20/03/2024",
      img : "src/assets/content/post 1.png",
      like : "15",
      sumDiscuss : "5"
    },
    {
      name : "Shaela",
      imgProfil : "https://randomuser.me/api/portraits/men/32.jpg",
      discuss : "Gimana cara memperbaiki laptop yang blue screen?",
      date : "20/03/2024",
      img : "src/assets/content/post 1.png",
      like : "15",
      sumDiscuss : "5"
    }
  ]

  return (
    <>

      <div className="pt-24 mb-20">
        {/* About Forum */}
        <div className="relative w-full h-64">
          <img
            className="h-full w-full object-cover"
            src="/assets/content/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
            alt="Random image"
          />
          <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-sky-950 opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
            <div className="relative p-4 lg:px-40">
              <h2 className="text-white text-4xl font-bold mb-4 text-justify">
                Selamat datang di <br />
                Forum Kami!
              </h2>
              <p className="desc text-white text-start text-sm lg:text-base">
              Bergabunglah dengan forum kami untuk berdiskusi tentang apapun. Ajukan pertanyaan, bagikan wawasan, dan terhubung dengan individu yang memiliki minat yang sama. Jelajahi berbagai topik, dapatkan saran, dan tetap terinformasi tentang diskusi terbaru.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:px-44 p-3">
          {/* Category */}
          <div className="relative my-10 mx-auto">
            <h2 className="text-blue-800 text-3xl font-bold">Kategori</h2>

            <div className="relative mt-10">
              <button
                type="button"
                className="text-blue-800 bg-white border border-blue-800 hover:bg-gray-100 font-normal rounded-lg w-52 h-12 mb-2 mr-6 text-xl"
              >
                Software
              </button>
              <button
                type="button"
                className="text-blue-800 bg-white border border-blue-800 hover:bg-gray-100 font-normal rounded-lg w-52 h-12 mb-2 mr-6 text-xl"
              >
                Hardware
              </button>
              <button
                type="button"
                className="text-blue-800 bg-white border border-blue-800 hover:bg-gray-100 font-normal rounded-lg w-52 h-12 mb-2 mr-6 text-xl"
              >
                Jaringan
              </button>
              <button
                type="button"
                className="text-blue-800 bg-white border border-blue-800 hover:bg-gray-100 font-normal rounded-lg w-52 h-12 mb-2 text-xl"
              >
                Perangkat
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <form className="relative flex items-center max-w-sm">
            <label htmlFor="simple-search" className="sr-only">
              Cari
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Speaker tidak berfungsi."
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-800 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Cari</span>
            </button>
          </form>

          {/* Topics */}
          <div className="my-10 flex justify-between items-center mx-auto">
            <div className="flex">
              <button className="text-blue-800 font-bold mr-5">
                Topik Populer
              </button>
              <button className="text-neutral-600 mr-5">Topik Terbaru</button>
            </div>
            <Link to="createpost" className="text-blue-800">
              Buat Topik +
            </Link>
          </div>

          {/* Card Topic */}
          <div>
            {forum.map((forums)=>(
              <div className="post1 max-w-4xl mx-auto p-4">
              <div className="border-2 border-blue-800 rounded-lg flex flex-col md:flex-row items-center p-2">
                <div className="relative md:ml-6 flex items-center gap-3 md:bottom-10">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={forums.imgProfil}
                    alt="Profile"
                  />
                  <div className="text-sm font-medium text-gray-900">{forums.name}</div>
                </div>
                <div className="relative flex-grow md:ml-3 md:mt-14 text-center md:text-left">
                  <div className="mt-2 text-sm font-medium text-gray-900">
                    {forums.discuss}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">{forums.date}</div>
                </div>

                <div className="relative flex-shrink-0 grid grid-cols-1 gap-2 md:mr-5 mt-4 md:mt-0 top-4">
                  <img
                    className="w-32 h-32 object-cover rounded-md"
                    src={forums.img}
                    alt="Post"
                  />
                  <div className="likecomment relative flex items-center justify-between text-blue-800 md:right-36 bottom-8 mx-auto md:mx-0">
                    <button className="flex items-center space-x-1">
                      <svg
                        className="w-6 h-6 hover:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
                        ></path>
                      </svg>
                      <span className="text-sm">{forums.like}</span>
                    </button>
                    <button className="flex items-center space-x-1">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 31 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.5762 18.75C26.5762 19.413 26.3128 20.0489 25.8439 20.5178C25.3751 20.9866 24.7392 21.25 24.0762 21.25H9.07617L4.07617 26.25V6.25C4.07617 5.58696 4.33956 4.95107 4.8084 4.48223C5.27725 4.01339 5.91313 3.75 6.57617 3.75H24.0762C24.7392 3.75 25.3751 4.01339 25.8439 4.48223C26.3128 4.95107 26.5762 5.58696 26.5762 6.25V18.75Z"
                          stroke="#004AAB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M21 16a2.5 2.5 0 00-2.5-2.5H5.5A2.5 2.5 0 003 16v1.5A2.5 2.5 0 005.5 20H10l4 4v-4h2.5A2.5 2.5 0 0021 17.5V16z"
                        ></path>
                      </svg>
                      <span className="text-sm">{forums.sumDiscuss}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>

        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
