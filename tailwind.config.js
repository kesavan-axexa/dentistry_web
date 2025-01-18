/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        khand: ["Khand", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        kanit:["Kanit", "sans-serif"]
      },
      fontSize: {
        "46px": "46px",
        "10px": "10px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "26px": "26px",
        "30px": "30px",
        "36px": "36px",
      },
      colors: {
        customGrey: "#5A5A5A",
        customBlack: "#2B323A",
        customGolden: "#C5975B",
        customGrey1: "#F8F8F8",
        customGrey2: "#F5F5F5"
      },
    },
  },
  plugins: [],
};