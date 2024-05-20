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
      width: {
        '50': '12rem',
        '100': '25.5rem',  // Custom width value (448px)
        '104': '30rem',  // Custom width value (480px)
        '128': '32rem', // Custom width value (512px)
        '160': '40rem', // Custom width value (640px)
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

