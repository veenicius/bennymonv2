/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      body: ['"Rubik"', "Arial"],
      sans: ['"Rubik"', "Arial"],
    },
    extend: {
      colors: {
        primaryText: "#4C566A",
      },
    },
  },
  plugins: [require("tailwind-bootstrap-grid")()],
};
