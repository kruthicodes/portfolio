import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-fraunces)"]
      },
      colors: {
        canvas: "hsl(var(--canvas))",
        ink: "hsl(var(--ink))",
        muted: "hsl(var(--muted))",
        line: "hsl(var(--line))",
        accent: "hsl(var(--accent))",
        card: "hsl(var(--card))"
      },
      boxShadow: {
        bloom: "0 15px 40px -20px rgba(21, 94, 117, 0.35)"
      },
      backgroundImage: {
        "mesh-light": "radial-gradient(circle at 10% 20%, rgba(14, 116, 144, 0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(2, 132, 199, 0.08), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
