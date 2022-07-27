/** @type {import('tailwindcss').Config} */

const defaultFonts = [
  "ui-sans-serif",
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "Noto Sans",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Color Emoji",
];

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["DM Serif Display", ...defaultFonts],
        body: ["Karla", ...defaultFonts],
      },
      backgroundImage: {},
      backgroundColor: {
        ["primary-dark-violet"]: "hsl(256, 26%, 20%)",
        ["primary-grayish-blue"]: "hsl(216, 30%, 68%)",
        ["neutral-dark-violet"]: " hsl(270, 9%, 17%)",
        ["neutral-dark-grayish-violet"]: "hsl(273, 4%, 51%)",
        ["neutral-very-light-gray"]: "#FAFAFA",
      },
      screens: {
        sm: "500px",
        "2xl": "1440px",
      },
      colors: {
        ["primary-dark-violet"]: "hsl(256, 26%, 20%)",
        ["primary-grayish-blue"]: "hsl(216, 30%, 68%)",
        ["neutral-dark-violet"]: " hsl(270, 9%, 17%)",
        ["neutral-dark-grayish-violet"]: "hsl(273, 4%, 51%)",
        ["neutral-very-light-gray"]: "#FAFAFA",
      }
    },
  },
  plugins: [],
};
