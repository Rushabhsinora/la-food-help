/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,jsx}',
      './src/components/**/*.{js,jsx}',
      './src/app/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          'titillium': ['var(--font-titillium)', 'sans-serif'],
          'inter': ['var(--font-inter)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  