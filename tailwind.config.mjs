const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          200: "#D0DFB7",
          300: "#B1CA8C",
          400: "#96B569",
          500: "#7A9F4B",
          600: "#5C7937",
          700: "#4A6B2F",
        },
        base_black: "#292929",
        base_white: "#FAFFFA",
      },
    },
  },
  plugins: [],
};

export default config;
