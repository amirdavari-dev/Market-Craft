/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        iranSans: "iranSans",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
