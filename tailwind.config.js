/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { accent: "#7B66FF", black: { smooth: "#06071A" } },

      fontFamily: {
        Montserrat: ["Montserrat", " sans-serif"],
      },
    },
  },
  plugins: [],
};

