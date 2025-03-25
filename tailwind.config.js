/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif"],
      },
      width: {
        130: "35rem",
      },
      screens: {
        vsm: "450px",
      },
    },
  },
  plugins: [],
};
