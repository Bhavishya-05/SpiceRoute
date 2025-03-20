/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      height: {
        '34vw' : '34vw',
      }
    },
  },
  plugins: [],
}

