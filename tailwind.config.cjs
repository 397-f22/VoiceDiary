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
        "analog-blue": "#7998f2",
        "analog-purple": "#d479f2",
      },
      gridTemplateRows: {
        recording: "5fr 1fr",
      },
    },
  },
  plugins: [],
};
