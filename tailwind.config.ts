import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgba(9, 46, 89, 1)",
          light: "rgba(9, 46, 89, 0.8)",
          dark: "rgba(9, 46, 89, 1)",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          gray: "#F5F5F5",
        },
        accent: {
          purple: "#2d1597",
          blue: "#0d4382",
        },
      },
      borderRadius: {
        "4xl": "30px",
      },
    },
  },
  plugins: [],
};

export default config;