import NavbarClient from "./navbarclient";

export default function CreatePost() {
  return (
    <>
      <NavbarClient />

      <div className="relative main-content top-24 px-10 mb-36">
        {/* Back button and Create Post text */}
        <div className=" relative flex items-center mb-10 ml-40">
          <a href="/forum" className="text-blue-800 text-2xl mr-2">
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
            Create Post
          </div>
        </div>

        {/* Create Post */}
        <div className="flex justify-center mt-24">
          <div className="w-full max-w-3xl border-2 border-blue-800 rounded-lg p-4">
            <label
              htmlFor="comment"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              COMMENT
            </label>
            <textarea
              id="comment"
              rows="6"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="What's in your thought?"
            ></textarea>
            <div className="flex mt-2 space-x-2">
              <button type="button" className="text-blue-800 font-bold text-xl">
                B
              </button>
              <button
                type="button"
                className="text-blue-800 font-bold text-xl italic"
              >
                I
              </button>
              <button type="button" className="text-blue-800 font-bold text-xl">
                <svg
                  width="38"
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
      </div>
    </>
  );
}
