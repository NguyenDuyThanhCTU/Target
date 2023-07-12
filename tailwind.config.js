/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      LexendDeca: ["Lexend Deca", "sans-serif"],
    },
    screens: {
      p: "375px",
      d: "1024px",
    },
  },
  plugins: [],
};
