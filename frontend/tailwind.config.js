/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#F41B3B",
          green: "#1BC999",
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
