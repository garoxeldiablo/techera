/** @type {import('tailwindcss').Config} */
/** @type {import('flowbite-react').Config} */
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
        'custom-bg': "url(./src/assets/content/consultation-hero.jpg)"
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
