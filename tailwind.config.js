/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      columns: {
        // Adds a 5-column layout
      },
      colors: {
        "insta-pink": "#E1306C",
        "insta-orange": "#FD1D1D",
        "insta-yellow": "#FFC107",
        "insta-purple": "#833AB4",
        "insta-blue": "#405DE6",
      },
      backgroundImage: {
        "instagram-gradient":
          "linear-gradient(45deg, #833AB4, #FD1D1D, #FFC107, #E1306C)",
      },
    },
  },
  plugins: [],
};
