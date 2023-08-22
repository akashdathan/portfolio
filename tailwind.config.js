/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily :{
      'display': ['inter-var', 'sans-serif'],
      'body': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'font-grey': '#050505',
        'font-black': '#121212',
      },
      fontSize: {
        // '5xl': '2.5rem',
        // '6xl': '2.75rem',
        // '7xl': '4.5rem',
        // '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
    }
  },
  plugins: [],
}
