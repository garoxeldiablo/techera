import NavbarClient from "./navbarclient";

export default function Forum() {
  return (
    <>
      <NavbarClient />

      <div className="pt-24 mb-20">
        {/* About Forum */}
        <div className="relative w-full h-64">
          <img
            className="h-full w-full object-cover"
            src="src/assets/content/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
            alt="Random image"
          />
          <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-sky-950 opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
            <div className="relative">
              <h2 className="relative text-white text-4xl font-bold right-96 mb-4">
                Welcome to <br />
                Our Forum!
              </h2>
              <p className="desc text-white text-justify px-40">
                Join our community to discuss about anything that bothers you.
                Ask questions, share insights, and connect with like-minded
                individuals. Explore diverse topics, get advice, and stay
                updated on the latest discussions. It's your space to engage,
                learn, and connect.
              </p>
            </div>
          </div>
        </div>

        <div className="px-44">
          {/* Category */}
          <div className="relative my-10 mx-auto">
            <h2 className="text-blue-800 text-3xl font-bold">Category</h2>

            <div className="relative mt-10">
              <button
                type="button"
                class="text-blue-800 bg-white border border-blue-800 hover:bg-gray-100 font-normal rounded-lg w-52 h-12 mb-2 mr-6 text-xl"
              >
                Software
              </button>
              <button
                type="button"
                class="text-blue-800 bg-white border border-blue-800 hover:bg-gray-100 font-normal rounded-lg w-52 h-12 mb-2 mr-6 text-xl"
              >
                Hardware
              </button>
              <button
                type="button"
                class="text-blue-800 bg-white border border-blue-800 hover:bg-gray-100 font-normal rounded-lg w-52 h-12 mb-2 mr-6 text-xl"
              >
                Network
              </button>
              <button
                type="button"
                class="text-blue-800 bg-white border border-blue-800 hover:bg-gray-100 font-normal rounded-lg w-52 h-12 mb-2 text-xl"
              >
                Cyber Security
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <form class="relative flex items-center max-w-sm">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Speaker tidak berfungsi."
                required
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-800 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>

          {/* Topics */}
          <div className="my-10 flex justify-between items-center mx-auto">
            <div className="flex">
              <button className="text-blue-800 font-bold mr-5">
                Popular Topics
              </button>
              <button className="text-neutral-600 mr-5">Latest Topics</button>
            </div>
            <a 
            href="/createpost" 
            className="text-blue-800">
              Create Post +
            </a>
          </div>

          {/* Card Topic */}
          <div>
            <div className="post1 max-w-4xl mx-auto p-4">
              <div className="border-2 border-blue-800 rounded-lg flex items-center p-2">
                <div className="relative ml-6 flex items-center gap-3 bottom-10">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                  />
                  <div className="text-sm font-medium text-gray-900">ANTON</div>
                </div>
                <div className="relative flex-grow right-28 ml-3 mt-14">
                  <div className="mt-2 text-lg font-medium text-gray-900">
                    Gimana cara memperbaiki laptop yang blue screen?
                  </div>
                  <div className="mt-2 text-sm text-gray-500">20/03/2024</div>
                </div>

                <div className="relative flex-shrink-0 grid grid-cols-1 gap-2 mr-5 top-4">
                  <img
                    className="w-32 h-32 object-cover rounded-md"
                    src="src\assets\content\post 1.png"
                    alt="Post"
                  />
                  <div className="likecomment relative flex items-center justify-between text-blue-800 right-36 bottom-8">
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
                      <span className="text-sm">15</span>
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M21 16a2.5 2.5 0 00-2.5-2.5H5.5A2.5 2.5 0 003 16v1.5A2.5 2.5 0 005.5 20H10l4 4v-4h2.5A2.5 2.5 0 0021 17.5V16z"
                        ></path>
                      </svg>
                      <span className="text-sm">5</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="post2 max-w-4xl mx-auto p-4">
              <div className="border-2 border-blue-800 rounded-lg flex items-center p-2">
                <div className="relative ml-6 flex items-center gap-3 bottom-10">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Profile"
                  />
                  <div className="text-sm font-medium text-gray-900">
                    Andre Tahulani
                  </div>
                </div>
                <div className="relative flex-grow right-36 mt-14">
                  <div className="mt-2 text-lg font-medium text-gray-900">
                    Rekomendasi laptop gaming harga 5jtan adakahh?
                  </div>
                  <div className="mt-2 text-sm text-gray-500">07/03/2024</div>
                </div>
                <div className="relative flex-shrink-0 grid grid-cols-1 gap-2 mr-5 top-4">
                  <img
                    className="w-32 h-32 object-cover rounded-md"
                    src="src\assets\content\post 2.png"
                    alt="Post"
                  />
                  <div className="likecomment relative flex items-center justify-between text-blue-800 right-36 bottom-8">
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
                      <span className="text-sm">20</span>
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M21 16a2.5 2.5 0 00-2.5-2.5H5.5A2.5 2.5 0 003 16v1.5A2.5 2.5 0 005.5 20H10l4 4v-4h2.5A2.5 2.5 0 0021 17.5V16z"
                        ></path>
                      </svg>
                      <span className="text-sm">5</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="post3 max-w-4xl mx-auto p-4">
              <div className="border-2 border-blue-800 rounded-lg flex items-center p-2">
                <div className="relative ml-6 flex items-center gap-3 bottom-10">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://akcdn.detik.net.id/community/media/visual/2024/03/14/rigen_43.jpeg?w=700&q=90"
                    alt="Profile"
                  />
                  <div className="text-sm font-medium text-gray-900">
                    Regin sih
                  </div>
                </div>
                <div className="relative flex-grow right-28 mt-14">
                  <div className="mt-2 text-lg font-medium text-gray-900">
                    Processor mana yang lebih bagus untuk digunakan ber...
                  </div>
                  <div className="mt-2 text-sm text-gray-500">22/12/2024</div>
                </div>
                <div className="relative flex-shrink-0 grid grid-cols-1 gap-2 mr-5 top-4">
                  <img
                    className="w-32 h-32 object-cover rounded-md"
                    src="src\assets\content\post 3.png"
                    alt="Post"
                  />
                  <div className="likecomment relative flex items-center justify-between text-blue-800 right-36 bottom-8">
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
                      <span className="text-sm">20</span>
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M21 16a2.5 2.5 0 00-2.5-2.5H5.5A2.5 2.5 0 003 16v1.5A2.5 2.5 0 005.5 20H10l4 4v-4h2.5A2.5 2.5 0 0021 17.5V16z"
                        ></path>
                      </svg>
                      <span className="text-sm">5</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="post3 max-w-4xl mx-auto p-4">
              <div className="border-2 border-blue-800 rounded-lg flex items-center p-2">
                <div className="relative ml-6 flex items-center gap-3 bottom-10">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://i.pinimg.com/originals/2d/12/9f/2d129f90385f300e88a9c7c4512ab8ac.jpg"
                    alt="Profile"
                  />
                  <div className="text-sm font-medium text-gray-900">
                    Caca Marica
                  </div>
                </div>
                <div className="relative flex-grow right-32 mt-14">
                  <div className="mt-2 text-lg font-medium text-gray-900">
                    Klo buat ngedit mending macbook atau zenbook gais?
                  </div>
                  <div className="mt-2 text-sm text-gray-500">02/02/2024</div>
                </div>
                <div className="relative flex-shrink-0 grid grid-cols-1 gap-2 mr-5 top-4">
                  <img
                    className="w-32 h-32 object-cover rounded-md"
                    src="src\assets\content\post 4.png"
                    alt="Post"
                  />
                  <div className="likecomment relative flex items-center justify-between text-blue-800 right-36 bottom-8">
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
                      <span className="text-sm">20</span>
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M21 16a2.5 2.5 0 00-2.5-2.5H5.5A2.5 2.5 0 003 16v1.5A2.5 2.5 0 005.5 20H10l4 4v-4h2.5A2.5 2.5 0 0021 17.5V16z"
                        ></path>
                      </svg>
                      <span className="text-sm">5</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="max-h-svh bg-blue-800">
        <div className="md:flex justify-between p-8">
          <div>
            <img className="h-10 rounded-lg" src="ss.png" alt="" />
            <p className="text-white">segara@example.com</p>
            <div className="flex gap-4 mt-10">
              <svg
                className="w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                id="Google"
              >
                <path
                  d="M896 786h725q12 67 12 128 0 217-91 387.5T1282.5 1568 896 1664q-157 0-299-60.5T352 1440t-163.5-245T128 896t60.5-299T352 352t245-163.5T896 128q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65T484 652.5 420 896t64 243.5T657.5 1316t238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78H896V786z"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></path>
              </svg>
              <svg
                className="w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                id="Facebook"
              >
                <path
                  d="M1376 128q119 0 203.5 84.5T1664 416v960q0 119-84.5 203.5T1376 1664h-188v-595h199l30-232h-229V689q0-56 23.5-84t91.5-28l122-1V369q-63-9-178-9-136 0-217.5 80T948 666v171H748v232h200v595H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960z"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <img
              className="h-10 m-6"
              src="../src/assets/logo/techera2.png"
              alt=""
            />
            <h1 className="text-white font-semibold text-center">
              A product of techera
            </h1>
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg">Quick links</h1>
            <a href="#">
              <p className="text-white">Consultation</p>
            </a>
            <a href="#">
              <p className="text-white">Remote</p>
            </a>
            <a href="#">
              <p className="text-white">Blog</p>
            </a>
            <p className="text-white mt-10">2024 techera. All right reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
