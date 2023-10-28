/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: { 100: "100px" },
      width: { 700: "700px" },
    },
  },
  plugins: [],
};
