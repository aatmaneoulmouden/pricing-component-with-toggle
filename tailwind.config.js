/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
      }
    },
    screens: {
      "mobile": "375px",
      "desktop": "1440px",
    },
    fontFamily: {
      base: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          'light-purple': 'hsl(236, 72%, 79%)',
          'dark-purple': 'hsl(237, 63%, 64%)',
        },
        neutral: {
          'very-light-grayish-blue': 'hsl(240, 78%, 98%)',
          'light-grayish-blue': 'hsl(234, 14%, 74%)',
          'grayish-blue': 'hsl(233, 13%, 49%)',
          'dark-grayish-blue': 'hsl(232, 13%, 33%)',
        },
      }
    },
  },
  plugins: [],
}

