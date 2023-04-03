/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      bgColor: "hsl(223, 30%, 9%)",
      semiDarkBlue: "hsl(223, 36%, 14%)",
      greyishBlue: "hsl(223, 23%, 46%)",
      red: "hsl(0, 97%, 63%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [require("daisyui")],
};
