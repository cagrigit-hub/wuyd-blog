/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'climb' : 'climbing_bg .25s ease-in-out forwards',
        'blink' : 'blinking_text 1s ease-in-out infinite',
      },
      keyframes: {
        climbing_bg: {
         
          '100%': { height: '26px' },
        },
        blinking_text : {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
