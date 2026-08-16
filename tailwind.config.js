/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#050B08',
          900: '#08100C',
          850: '#0C1813',
          800: '#102019',
          750: '#152820',
          700: '#1B3228',
          600: '#234034',
        },
        charcoal: {
          DEFAULT: '#08100C',
          950: '#050B08',
          900: '#08100C',
          850: '#0C1813',
          800: '#102019',
          700: '#1B3228',
          600: '#234034'
        },
        ivory: {
          DEFAULT: '#F5EFEB',
          light: '#FAF6F0',
          muted: '#EDE6DD',
          subtle: '#D5CCC1',
          dark: '#BCB3A7',
        },
        brass: {
          DEFAULT: '#C5A059',
          light: '#D4AF37',
          dark: '#B8934A',
          deep: '#9A7836',
          muted: '#856627',
        },
        burgundy: {
          DEFAULT: '#4A1D24',
          light: '#5E252E',
          dark: '#3A141A',
          deep: '#2E1217',
          hover: '#5E252E',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'Cormorant Garamond', 'serif']
      }
    }
  },
  plugins: []
};


