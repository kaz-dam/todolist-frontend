/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto Flex', 'sans-serif']
      },
      backgroundColor: {
        'todo-green': '#719191',
        'todo-light-green': '#EAF1F1',
        'todo-light-grey': '#FAFAFA',
        'todo-alert': '#EB9A78'
      },
      borderRadius: {
        'todo': '32px'
      }
    },
  },
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
};
