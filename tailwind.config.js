/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-black": "#272727",
        "dark-gray": "#959595",
        "light-gray": "#808080",
        "dark-blue": "#1572D3",
      },
      boxShadow: {
        "custom-dark":
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        "custom-very-dark": "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
