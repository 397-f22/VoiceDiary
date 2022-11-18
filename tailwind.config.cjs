/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        graduate: ["Graduate-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
