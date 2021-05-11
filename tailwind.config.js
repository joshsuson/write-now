const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors,
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
