import { responsiveFontSizes, createTheme as createMuiTheme } from "@mui/material";

import { pipe } from "ramda";

import palette from "./palette";
import defaultProps from "./default-props";
import overrides from "./overrides";
import typography from "./typography";

const createResponsiveTheme = pipe(createMuiTheme, responsiveFontSizes);

const createTheme = () => {
  const theme = createResponsiveTheme({
    palette,
    typography,
    props: {},
    components:{}
  });

  theme.props = defaultProps(theme);
  theme.components = overrides(theme);

  return theme;
};

export default createTheme;
