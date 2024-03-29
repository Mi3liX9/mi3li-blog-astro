const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      'sans': ["Rubik", ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography'),],
}