/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px"
    },
    extend: {
      fontFamily: {
        'mon': ['Montserrat','serif'],
        'ant': ['Anton','sans-serif']
      },
      colors:{
        "mainColor":"#ff573d",
        "secondaryColor":"#ececec",
        "white1":"#ffffff",
        "black1":"#15181d"
      },
      backgroundImage: {
        'back': "url('./src/assets/b1.jpg')"
      }
    },
  },
  plugins: [],
}







