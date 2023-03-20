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
      primary: '#0A0F3A',
      secondary: '#025ECE6B',
      accent:'#4AC1DA'
    },
    extend: {},
  },
  plugins: [],
}
