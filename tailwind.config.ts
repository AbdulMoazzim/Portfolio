import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#faf8ff",
          dim: "#d2d9f4",
          bright: "#faf8ff",
          "container-lowest": "#ffffff",
          "container-low": "#f2f3ff",
          container: "#eaedff",
          "container-high": "#e2e7ff",
          "container-highest": "#dae2fd",
          variant: "#dae2fd",
        },
        onsurface: {
          DEFAULT: "#131b2e",
          variant: "#434656",
        },
        inverse: {
          surface: "#283044",
          onsurface: "#eef0ff",
        },
        outline: {
          DEFAULT: "#737688",
          variant: "#c3c5d9",
        },
        primary: {
          DEFAULT: "#003ec7",
          container: "#0052ff",
          on: "#ffffff",
          "on-container": "#dfe3ff",
          fixed: "#dde1ff",
          "fixed-dim": "#b7c4ff",
          "on-fixed": "#001452",
          "on-fixed-variant": "#0038b6",
        },
        secondary: {
          DEFAULT: "#505f76",
          container: "#d0e1fb",
          on: "#ffffff",
          "on-container": "#54647a",
          fixed: "#d3e4fe",
          "fixed-dim": "#b7c8e1",
          "on-fixed": "#0b1c30",
          "on-fixed-variant": "#38485d",
        },
        tertiary: {
          DEFAULT: "#4b4e50",
          container: "#636668",
          on: "#ffffff",
          "on-container": "#e2e4e6",
        },
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
          on: "#ffffff",
          "on-container": "#93000a",
        },
        background: "#faf8ff",
        onbackground: "#131b2e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-lg-mobile": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-md": ["32px", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "code-md": ["14px", { lineHeight: "1.5", fontWeight: "500" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "700" }],
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        "gutter": "24px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "section-gap": "120px",
        "section-gap-mobile": "72px",
      },
      boxShadow: {
        elevated: "0px 12px 32px rgba(15, 23, 42, 0.04)",
        "elevated-hover": "0px 20px 40px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
