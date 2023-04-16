/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        repeat: 'repeat(auto-fit, minmax(min(28rem, 100%), 1fr))',
      },
    },
  },
  plugins: [],
}
