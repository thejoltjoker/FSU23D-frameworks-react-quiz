/** @type {import(tailwindcss).Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  safelist: ["bg-primary"],

  plugins: [
    //require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["cupcake"],
  },
};
