<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
=======
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
>>>>>>> 0345a8637dbc548c9c823a3dcf008ecc6c4a24b3
  ],
  theme: {
    extend: {
      colors: {
        brand: {
<<<<<<< HEAD
          red: "#F41B3B",
          green: "#1BC999",
=======
          green: "#F41B3B",
          mint: "#1BC999",
>>>>>>> 0345a8637dbc548c9c823a3dcf008ecc6c4a24b3
          yellow: "#F9CC0D",
          blue: "#1884F0",
        },
        black: {
          dark: "#0A070B",
          mid: "#363536",
          light: "#4F4E50",
          pale: "#737174",
        },
      },
    },
  },
  plugins: [],
}
