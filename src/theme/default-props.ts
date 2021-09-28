const defaultProps = (theme: object) => {
  const { palette } = theme;

  const isLightTheme = palette.mode === "light";

  return {
    MuiAlert: {
      variant: isLightTheme ? "standard" : "filled",
    },
    MuiButton: {
      disableElevation: true,
      variant: "contained",
    },
    MuiTextField: {
      variant: "filled",
    },
    MuiUseMediaQuery: {
      noSsr: true,
    },
  };
};
export default defaultProps;
