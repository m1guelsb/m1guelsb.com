import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      accent: "#936DFF",
      accent2: "#8459FF",
      accent3: "#7140FF",
      text1: "#FFFFFF",
      text2: "#99A2FF",
      background1: "#080313",
      background2: "#140B27",
      background3: "#251448",
      danger: "#e7253d",
    },
    fontSize: {
      "3xl": "2.5rem",
      "2xl": "1.75rem",
      xl: "1.5rem",
      lg: "1.25rem",
      md: "1rem",
      sm: "0.875rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn .3s ease-in-out",
      },
    },
  },
};
export default config;
