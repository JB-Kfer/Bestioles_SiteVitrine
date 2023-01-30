/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class-dark',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bestiolegreen':'#00C49A',
        'bestioledark':'#156064',
        'bestiolepink':'#F797C7',
        'bestioleorange':'#FB8F67',
        'bestioleback':'#FCF7E4',
      }
    },
  },
  plugins: [
    require('tailwindcss-font-inter'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
