module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./core/components/**/*.{js,ts,jsx,tsx}",
    "./core/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF5D8F",
          dark: "#E85D9C",
        },
        secondary: {
          DEFAULT: "#EDF2F7",

        },
        green: {
          DEFAULT: "#57D1DC",
        },

        muted: {
          DEFAULT: "#636368",
        },
        whatsapp: {
          DEFAULT: "#25D366",
        },
        instagram: {
          DEFAULT: "#C0007A",
        },
        facebook: {
          DEFAULT: "#3B5998",
        },
        alert: {
          DEFAULT: "#F65580",
        },
        purple: {
          DEFAULT: "#9191FF",
        },
        violet: {
          DEFAULT: "#CDA1F1",
        },
        grey: {
          DEFAULT: "#747474"
        }
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn .3s ease-in-out",
      },
      fontSize: {
        xxs: ".5rem",
      },
      spacing: {
        160: "40rem",
        header: "7rem",
        headerMobile: "10rem",
      },
    }
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-debug-screens"),
    require("tailwind-scrollbar-hide"),
  ],
};
