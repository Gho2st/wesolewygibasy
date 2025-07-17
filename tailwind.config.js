module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fa7070",
        secondary: "#6c757d",
        blueMain: "#4a71ff",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), 
  ],
};
