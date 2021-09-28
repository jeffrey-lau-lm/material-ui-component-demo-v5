const Base = [
  '"Source Sans Pro"',
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

const Display = '"Roboto Slab", sans-serif';

const Monospace = '"Source Code Pro", monospace';

const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 600;
const fontWeightBold = 700;

const baseHeadingStyle = {
  fontWeight: fontWeightRegular,
};

const displayHeadingStyle = {
  fontFamily: Display,
  fontWeight: fontWeightBold,
};

export default (theme) => ({
  Base,
  Display,
  Monospace,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,

  fontFamily: Base,
  h1: displayHeadingStyle,
  h2: displayHeadingStyle,
  h3: displayHeadingStyle,
  h4: baseHeadingStyle,
  h5: baseHeadingStyle,
  h6: baseHeadingStyle,
  button: {
    textTransform: "none",
    fontWeight: fontWeightBold,
    letterSpacing: "0.025em",
  },
  // subtitle1: Object,
  // subtitle2: Object,
  overline: {
    letterSpacing: "0.125em",
  },
  // caption: Object,
});
