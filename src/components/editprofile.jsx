import NavbarClient from "./navbarclient";

export default function EditProfile() {
  return (
    <>
      {/* Navbar */}
      <NavbarClient />

      <div className="relative main-content top-24 px-10 mb-36">
        
        {/* Back button and Change Profile text */}
        <div className=" relative flex items-center mb-10 ml-40">
          <a 
          href="/clientarea"
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
          </a>
          <div className="relative text-blue-800 text-3xl font-bold leading-10 left-4">
            Change Profile
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
          <button className="text-blue-800 underline mt-2">Change image</button>
        </div>
        {/* Form */}
        <form className="space-y-5 relative max-w-4xl mx-auto p-8">
          <div className="name w-100">
            <label className="block mb-2 text-sm font-semibold text-black">
              Name
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
                placeholder="aguspalingganteng@gmail.com"
              />
            </div>
            <div className="phone-number w-full">
              <label className="block mb-2 text-sm font-semibold text-black">
                Phone Number
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
                Change Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your current password"
              />
            </div>
            <div className="phone-number w-full mt-7">
              <input
                type="password"
                id="new-password"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your new password"
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-gray-500 dark:text-gray-400 text-xs"
              >
                Password must be at least{" "}
                <span className="text-green-500">8 Characters</span> and must
                contain at least{" "}
                <span className="text-green-500">a Capital Letter</span>,{" "}
                <span className="text-green-500">a Number</span> and{" "}
                <span className="text-green-500">a Special Character</span>.
              </p>
            </div>
          </div>
        </form>

        {/* Save Button */}
        <div className="flex flex-col items-center mt-5">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={() => navigate("/home")}
          >
            Save Changes
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-xs px-1.5 py-2 me-2 mt-2"
          >
            Delete Account
          </button>
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
