/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ['var(--font-open)'],
      },
      colors: {
        'blue': '#004e98',
        'blue-light': '#3a6ea5',
        'gray': '#c0c0c0',
        'gray-light': '#ebebeb',
        'orange': '#ff6700',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}