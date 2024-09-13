/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      screens: {
        'sm-md': '888px', // Tambahkan breakpoint kustom di sini
      },
    },
  },
};
