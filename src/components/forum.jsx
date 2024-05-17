import NavbarClient from "./navbarclient";

export default function Forum() {
  return (
    <>
      <NavbarClient />

      <div className="pt-24 mb-36">
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
      </div>
    </>
  );
}
