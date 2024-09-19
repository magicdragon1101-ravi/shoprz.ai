/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        lg: "1440px",
      },
      colors: {
        blue: {
          DEFAULT: "#4971BD",
          0: "#4971BD",
          50: "#E0F2F7",
          100: "#B3E5F1",
          200: "#80D3E8",
          300: "#4DB8E0",
          400: "#26A6D9",
          500: "#1D94C7",
          600: "#1A7B9D",
          700: "#156A88",
          800: "#0F4F64",
          900: "#0A3A4D",
          950: "#042A35",
        },
        red: {
          DEFAULT: "#FF7477",
        },
        green: {
          DEFAULT: "#599A83",
          50: "#D6EADF",
        },
        orange: {
          DEFAULT: "#F2994A",
        },
      },
    },
  },
  plugins: [],
};
