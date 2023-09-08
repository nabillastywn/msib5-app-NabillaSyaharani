const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        sky: colors.lightBlue,
        stone: colors.warmGray,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
        // Other color definitions
        primary: '#D8EEFD',
        secondary: '#02233B',
      },
      padding: {
        '35': '1.95rem', // You can adjust the value as needed
      },
    },
  },
  plugins: [],
  presets: [require('@morpheme/tailwind-config/preset')]
}
