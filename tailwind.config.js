/** @type {import('tailwindcss').Config} */
module.exports = {
   purge: [],
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    },
    colors: {
      primary: '#025ECE',
      secondary: '#4AC1DA40',
      accent:'#FFFFEE'
    },
    extend: {},
  },
  plugins: [],
}
