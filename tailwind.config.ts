import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fbf8f2",
          100: "#f4ecdd",
          200: "#e6d2b2",
        },
        clay: {
          500: "#aa6245",
          600: "#8e4d35",
        },
        palm: {
          700: "#2f574c",
          800: "#24453d",
          900: "#18332d",
        },
      },
      boxShadow: {
        soft: "0 18px 55px rgba(47, 87, 76, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
