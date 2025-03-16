import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mojito: {
          green: "var(--mojito-green)",
          limeYellow: "var(--mojito-lime-yellow)",
          rumWhite: "var(--mojito-rum-white)",
          freshMint: "var(--mojito-fresh-mint)",
          coolTeal: "var(--mojito-cool-teal)",
          darkRum: "var(--mojito-dark-rum)",
        },
      },
    },
  },
};

export default config;
