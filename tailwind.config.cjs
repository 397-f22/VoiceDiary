/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        graduate: ["Graduate-Regular", "sans-serif"],
      },
      colors: {
        primary: "#652CB3",
        secondary: "#9779F2",
        accent: "#E0D7FB",
      },
    },
  },
  plugins: [],
};
