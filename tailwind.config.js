/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B21A8",
        secondary: "#FACC15",
        accent: "#0EA5E9",
      },
    },
  },
  plugins: [],
};
