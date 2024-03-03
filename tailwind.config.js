/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#181620",
        "kindadark": "#343a40",
        "accent": "#CCD6F6"
      }
    },
  },
  plugins: [],
}