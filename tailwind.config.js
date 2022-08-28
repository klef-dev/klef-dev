/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        white: "#F9FAFB",
        black: "#111111"
      }
    },
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '8rem',
        xl: '10rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
