module.exports = {
  purge: {
    content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-white': '#fafafa',
        'primary-blue': '#0095f6',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}