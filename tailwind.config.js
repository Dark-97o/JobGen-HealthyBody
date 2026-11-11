/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        sage: {
          50: '#F5F7F5',
          100: '#E6EAE5',
          200: '#CDD7CC',
          300: '#ABBEAA',
          400: '#869F85',
          500: '#688267',
          600: '#516750',
          700: '#415240',
          800: '#354234',
          900: '#2D372D',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F4EFE9',
          200: '#EAE1D5',
          300: '#DCCEBD',
          400: '#CBB69E',
          500: '#B89B7E',
          600: '#A48265',
          700: '#866850',
          800: '#6E5544',
          900: '#5A4639',
        },
        athletic: {
          blue: '#0284C7',
          cyan: '#06B6D4',
          teal: '#0D9488',
          mint: '#10B981',
          lime: '#84CC16',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'elevated': '0 20px 40px -15px rgba(11, 32, 23, 0.08), 0 0 1px 1px rgba(11, 32, 23, 0.04)',
        'glow': '0 0 40px -10px rgba(45, 110, 79, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
