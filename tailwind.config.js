/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: '#0A0F3A',
        secondary: '#025ECE',
        accent:'#4AC1DA',

        whiteBg: '#FFFFEE'
  
      },
    },
  },
  plugins: [],
}
