/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm": "576px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1440px",
      },
      colors: {
        'cl-black': 'var(--cl-black)',
      },
      container: {
        center:true,
      },
    },
  },
  plugins: [],
}