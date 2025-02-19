const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Flavors", ...defaultTheme.fontFamily.sans],
        body: ["Patrick Hand", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "ww-treat-brown": "#D79C90",
        "ww-water-blue": "#8fd9fb",
        "ww-swim-blue": "#B3CEE5",
        "ww-adventure-green": "#84b067",
      },
      zIndex: {
        810: "810",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
    themes: [
      {
        wagWonders: {
          fontFamily: "Patrick Hand,comic sans ms,'sans-serif'",
          primary: "#DE9400",
          "primary-content": "#120800",
          secondary: "#5f2f1d",
          "secondary-content": "#f3f4f6",
          accent: "#a3e1c9",
          "accent-content": "#010a07",
          neutral: "#CFCB7A",
          "neutral-content": "#100f05",
          "base-100": "#ECE2D8",
          "base-200": "#cdc4bc",
          "base-300": "#afa8a0",
          "base-content": "#131211",
          info: "#277ca0",
          "info-content": "#d5e4ec",
          success: "#4cae4f",
          "success-content": "#070d04",
          warning: "#ffc105",
          "warning-content": "#150e02",
          error: "#f44034",
          "error-content": "#f3f4f6",
        },
      },
    ],
  },
};
