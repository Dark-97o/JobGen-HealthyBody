/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        healis: {
          blue: '#0068FF',
          dark: '#111111',
          grey: '#646464',
          light: '#FAF6EE',
          border: '#E8E1D3',
        },
        forest: {
          50: '#F0F7F4',
          100: '#DCEDE5',
          200: '#BCDEC9',
          300: '#91C6A6',
          400: '#5EA780',
          500: '#3D8963',
          600: '#2D6E4F',
          700: '#23573F',
          800: '#1C4533',
          900: '#143427',
          950: '#0B2017',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F4EFE9',
          200: '#EAE1D5',
          300: '#DCCEBD',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        title: ['"Exo 2"', 'DM Sans', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['"Exo 2"', 'DM Sans', 'system-ui', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
      },
      borderRadius: {
        'card': '2rem',
        'pill': '3rem',
      },
      animation: {
        'hero-float': 'heroFloat 3s ease-in-out infinite alternate',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        heroFloat: {
          '0%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
