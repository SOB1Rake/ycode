 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '876px',
      xl: '944px',
    },
    container: {
      center: true,
      padding: '15px',
    }
  },
  plugins: [],
}