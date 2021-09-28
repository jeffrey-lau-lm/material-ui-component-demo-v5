// src/theme/palette.js
const grey = {
  light: {
    50: "#F4F5F7",
    100: "#d7dae2",
    200: "#b9bfcc",
    300: "#9ca5b7",
    400: "#9ca5b7",
    500: "#7e8aa1",
    600: "#637089",
    700: "#4e586b",
    800: "#39404e",
    900: "#232830",
  },
  dark: {
    900: "#F4F5F7",
    800: "#d7dae2",
    700: "#b9bfcc",
    600: "#9ca5b7",
    500: "#9ca5b7",
    400: "#7e8aa1",
    300: "#637089",
    200: "#4e586b",
    100: "#39404e",
    50: "#232830",
  },
};

const light = {
  type: "light",
  tonalOffset: 0.3,
  primary: {
    main: "#1128b3",
  },
  secondary: {
    main: "#D0D4F1",
    contrastText: "#1128b3",
    dark: "#939dd2",
  },
  grey: grey.light,
  background: {
    default: grey.light[50],
  },
  text: {
    primary: "rgba(3, 8, 37, 0.87)",
    secondary: "rgba(3, 8, 37, 0.38)",
  },
  success: {
    main: "#4CB08A",
    dark: "#367D63",
  },

  // OPTIONAL:
  // - action: Object
  // - background: Object
  // - info: Object
  // - warning: Object
  // - error: Object
  // - success: Object
  // - text: Object
  // - divider: Color
  // - contrastThreshold: Number
  // - tonalOffset: Number

  // PLUS any other color palettes you want to attach to the theme
};


export default light