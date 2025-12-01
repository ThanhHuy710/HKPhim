export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#F41B3B",
          mint: "#1BC999",
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
