import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./projects/*/src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./projects/*/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./projects/*/src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
