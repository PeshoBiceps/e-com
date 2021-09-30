module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'black-trans': '#000000b3'
      },
      backgroundImage: {
        'login-bg': "url('https://images.unsplash.com/photo-1509631179647-0177331693ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1888&q=80')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
