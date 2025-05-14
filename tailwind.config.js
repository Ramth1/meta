/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
   theme: {
    extend: {
      animation: {
        'shooting-star': 'shooting-star 2s linear infinite',
      },
      keyframes: {
        'shooting-star': {
          '0%': {
            transform: 'translateY(-100vh) translateX(0) rotate(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) translateX(100vw) rotate(360deg)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
