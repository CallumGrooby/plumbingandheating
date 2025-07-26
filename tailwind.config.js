/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      fontFamily: {
        Exo: ["Exo", "sans-serif"],
        Nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
