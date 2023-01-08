/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#432371',
        'orangejam': '#faae7b'
      },
      fontFamily: {
        burtons: 'burtons',
      }
    },
  },
  plugins: [],
}