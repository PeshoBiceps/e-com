module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-900': '#1c1c1c',
        'black-trans': '#000000b3'
      },
      backgroundImage: {
        'login-bg': "url('https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
