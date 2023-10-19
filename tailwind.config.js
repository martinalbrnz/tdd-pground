/* eslint-disable semi */
/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        beat: "beat 1.2s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        coin: "coin 6s ease-in-out infinite",
      },
      keyframes: {
        beat: {
          "0%, 100%": {},
          "20%": { transform: "scale(1.1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        coin: {
          "0%, 100%": { transform: "rotateY(-180deg)" },
          "50%": { transform: "rotateY(0deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colors.violet,
        secondary: colors.slate,
      },
    },
  },
  plugins: [],
};
