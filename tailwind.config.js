/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0',
        lg: '0',
      },
    },
    screens: {
      custom: { min: '200px', max: '380px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px', 
    },
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        pinky: {
          50:  '#fff5fa',
          100: '#ffe5f2',
          200: '#ffb8d9',
          300: '#ff8cc1',
          400: '#ff5fa8',
          500: '#ff3390',
          600: '#e0207d',
          700: '#b81566',
          800: '#800b47',
          900: '#4b042a',
        },
        blush: '#ffc1e3',
        bubblegum: '#ffb3da',
        rose: '#ff66b2',
        cotton: '#ffe6f3',
        candy: '#ff99cc',
        hotpink: '#ff1493',
      },
    },
  },
  plugins: [],
};
