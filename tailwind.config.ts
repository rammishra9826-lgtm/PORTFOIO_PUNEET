import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { cream: "#f4f2ee", ink: "#111113", violet: "#5b3df5", lavender: "#d9d2fb", flame: "#ff5a36" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], body: ["var(--font-body)", "sans-serif"] },
      keyframes: { marquee: { to: { transform: "translateX(-50%)" } } },
      animation: { marquee: "marquee 35s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
