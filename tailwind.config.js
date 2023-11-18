module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        pink: { 50: "#ffdcf7" },
        gray: {
          100: "#f6f6f6",
          300: "#e0ddec",
          900: "#252525",
          "900_01": "#242424",
          "300_01": "#dedede",
        },
        light_green: { 100: "#d7f6cb", 400: "#9dc05a" },
        indigo: { A200: "#5f70f5" },
        amber: { 300: "#f8d467" },
        orange: { 300: "#f8be67" },
        lime: { 100: "#f2f6cb" },
        black: { 900: "#000000" },
        light_blue: { A700: "#0093ff" },
        cyan: { 50: "#caf2ff" },
        blue: { 100: "#ccd2ff" },
        white: { A700: "#ffffff" },
        yellow: { 100: "#fffad0" },
      },
      boxShadow: {
        bs: "0px 4px  1px 0px #000000",
        bs2: "0px 5px  1px 0px #000000",
        bs3: "0px 7px  1px 0px #000000",
        bs1: "4px 4px  1px 0px #000000",
      },
      fontFamily: {
        matter: "Matter",
        bebasneue: "Bebas Neue",
        rubik: "Rubik",
        barricadawregular: "BarricadaW01-Regular",
      },
      textShadow: { ts: "10px 4px  1px #f8d467" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
