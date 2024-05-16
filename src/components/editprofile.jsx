import NavbarClient from "./navbarclient";

export default function EditProfile() {
  return (
    <>
      {/* Navbar */}
      <NavbarClient />

      {/* Back button */}
      <div class="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl py-28 left-48">
        <div className="ChangeProfile text-blue-800 text-3xl font-bold leading-10">Change Profile</div>
      </div>
      

      {/* Change Image */}
      <div class="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl bottom-14 left-48">
      <img
        className="Ellipse118 w-36 h-36 rounded-full border-4 border-blue-800"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <div className="ml-48 relative bottom-24">
        <h2 className="NamaUser font-semibold text-blue-800 text-4xl leading-10">
        Agus Bisana
        </h2>
      </div>
      <div className="relative bottom-8 left-5">
        <p className="text-blue-800 underline">Change image</p>
      </div>
      </div>

      {/* Form */}
      <div class="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl py-40">
        <form class="max-w-sm mx-auto">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />

          <p
            id="helper-text-explanation"
            class="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            We’ll never share your details. Read our{" "}
            <a
              href="#"
              class="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </>
  );
}
