module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        texto: {
          100: "#dadada",
          200: "#b4b4b4",
          300: "#8f8f8f",
          400: "#696969",
          500: "#444444",
          600: "#363636",
          700: "#292929",
          800: "#1b1b1b",
          900: "#0e0e0e"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}