module.exports = {
  theme: {
    fontFamily: {
      // This one is very specific
      apple: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    boxShadow: {
      DEFAULT: "0px 0px 15px #929293",
      xs: "0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 0px 6px 1px rgba(0, 0, 0, 0.2), 0 0px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 2px 20px -3px rgba(0, 0, 0, 0.2), 0 2px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    // we preserve the Tailwind values and add new ones
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1560px",
        "4xl": "1920px",
      },
      colors: {
        blue: {
          DEFAULT: "#197ACF",
          light: "#E8F0FE",
          dark: "#1F3044",
          darkest: "#1D2228",
        },
        gray: {
          darkest: "hsla(0,0%,0%,0.8)",
          dark: "#51596D",
          DEFAULT: "#606060",
          medium: "#CCCCCC",
          light: "#F2F2F2",
        },
        red: {
          DEFAULT: "#EA4444",
          light: "#F95050",
        },
        green: {
          DEFAULT: "#4BBC56",
          light: "#4AB270",
        },
        yellow: {
          DEFAULT: "#FFBC00",
        },
        orange: {
          DEFAULT: "#EA7D24",
        },
      },
      fontSize: {
        xxxs: ["8px"],
        xxs: ["10px"],
      },
      padding: {
        sm: "35px",
      },
      height: {
        xxs: "8px",
        xs: "10px",
        sm: "35px",
      },
      width: {
        xxs: "8px",
        xs: "10px",
        sm: "35px",
      },
    },
  },
  plugins: [
    // Uncomment this to use, remember to install them
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio"),
    // require("'@tailwindcss/forms"),
  ],
};
