/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url(https://img.freepik.com/free-photo/cyber-security-company-employee-developing-blockchain-based-database-processing-system-cybernetic-officer-coding-machine-learning-software-protect-mainframe-encrypted-files_482257-40524.jpg?t=st=1716262263~exp=1716265863~hmac=778e24d1c3278917e4948902069cd039a00063aa7966a7d8bf658a3225c9027a&w=996)"
      },
      width: {
        100: "25.5rem", // Custom width value (448px)
        104: "30rem", // Custom width value (480px)
        128: "32rem", // Custom width value (512px)
        160: "40rem", // Custom width value (640px)
      },
      spacing: {
        50: "12rem",
        94: "23.5rem",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
