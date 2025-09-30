/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        imrea: { green: '#006b54', green2: '#03896c' },
      },
    },
  },
  plugins: [],
};
