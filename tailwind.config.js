const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      one: {
        DEFAULT: 'hsl(24, 98%, 50%)'
      },
      two: {
        DEFAULT:'hsl(44, 98%, 50%)'
      },
      three: {
        DEFAULT: 'hsl(199, 98%, 50%)'
      },
      four: {
        DEFAULT: 'hsl(286, 98%, 70%)'
      },
      five: {
        DEFAULT: 'hsl(152, 98%, 50%)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
