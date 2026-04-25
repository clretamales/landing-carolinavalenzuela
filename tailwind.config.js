/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Libre Baskerville"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        teal: {
          950: '#053F3E',
        },
      },
    },
  },
  plugins: [],
}
