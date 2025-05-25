import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#CB3CFF",
        secondary: {
          1: "#0B1739",
          2: "#8951FF",
          3: "#21C3FC",
          4: "#0E43FB",
          5: "#FDB52A",
        },
        neutral: {
          800: "#080F25",
          700: "#212C4D",
          600: "#37446B",
          500: "#7E89AC",
          400: "#AEB9E1",
          300: "#D1DBF9",
          200: "#D9E1FA",
          100: "#FFFFFF",
        },
        border: "#343B4F",
        "dark-blue": "#081028",
      },
    },
  },
  plugins: [],
} satisfies Config;
