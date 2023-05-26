/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    flexGrow: {
      '0': 0,
       default: 1,
       '1': 1,
       '0.15': 0.15,
       '0.5': 0.5,
      },
    colors: {
      lightblue: "#3562f9",
      myblue: "rgb(7,12,31)",
    },
    extend: {},
  },
  plugins: [],
}
