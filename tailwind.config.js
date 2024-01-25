// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBackground: "url(/images/heroBg.svg)",
      },
      colors: {
        primary: "#26282C",
        border: "#DADDDD",
      },
      fontFamily: {
        plus: ["Plus Jakarta Sans, sans-serif"],
        inter: ["Inter', sans-serif"],
      },
      keyframes: {
        swing: {
          "0%,100%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(-15deg)" },
        },
      },
      animation: {
        swing: "swing 0.8s",
      },
    },
  },
  plugins: [],
};
