/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    },
    colors: {
      primary: '#0A0F3A',
      secondary: '#025ECE6B',
      accent:'#4AC1DA',
      beige : '#FFFFEE'
    },
    extend: {},
  },
  plugins: [],
}
