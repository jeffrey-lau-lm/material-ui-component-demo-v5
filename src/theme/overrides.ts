import { rgba } from "polished";

const overrides = (theme: object) => {
  const {
    palette,
    shape: { borderRadius },
  } = theme;

  return {
    // Global Styles
    MuiCssBaseline: {
        styleOverrides: {
          "@global": {
            svg: {
              display: "block",
            },
          },
      }
    },

    // Sorted alphabetically (A -> Z) from this point forward
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: palette.background.paper,
          color: palette.text.primary,
        },
        // display:'none !important',
        root:{
          '&.MuiAppBar-colorPrimary':{
            '& .MuiTabs-indicator':{
              backgroundColor: palette.secondary.main
            },
            '& .MuiTab-textColorPrimary': {
              color:'white !important',
              opacity:'0.7',
             
              '&.Mui-selected':{
                opacity:'1'
              }
            }
                
          }
        }
     
    
      }
    },
    MuiButton: {
      styleOverrides: {
        textSecondary: {
          color: palette.secondary.dark,
        },
        contained: {
          backgroundColor: palette.grey[200],

          "&:hover": {
            backgroundColor: palette.grey[300],
          },
        },
        containedSecondary: {
          // TODO: Pressed style needs work
        },
        outlinedSecondary: {
          color: palette.secondary.dark,
          borderColor: palette.secondary.dark,
        },
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        colorSecondary: {
          "&.Mui-checked": {
            color: palette.secondary.dark,
          },
        },
        checked: {},
      }
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: palette.grey[200],
          borderRadius: "25%",

          "&:hover": {
            backgroundColor: palette.grey[300],
          },
        },
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius,
          backgroundColor: rgba(palette.grey[900], 0.04),
          border: `1px solid ${palette.grey[100]}`,

          "&:hover": {
            backgroundColor: rgba(palette.grey[900], 0.08),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              backgroundColor: rgba(palette.grey[900], 0.04),
            },
          },
          "&.Mui-focused": {
            borderColor: palette.primary.main,
            borderWidth: 1,
            boxShadow: `inset 0 0 0 1px ${palette.primary.main}`,
          },
        },
        underline: {
          "&:before": {
            content: "none",
          },
          "&:after": {
            content: "none",
          },
          // TODO: use theme.palette.secondary for underline
        },
        colorSecondary: {
          "&:hover": {
            backgroundColor: rgba(palette.grey[900], 0.08),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              backgroundColor: rgba(palette.grey[900], 0.04),
            },
          },
          "&.Mui-focused": {
            borderColor: palette.secondary.dark,
            boxShadow: `inset 0 0 0 1px ${palette.secondary.dark}`,
          },
        },
        focused: {},
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        colorSecondary: {
          "&.Mui-focused": {
            color: palette.secondary.dark,
          },
        },
        filled: {
          mixBlendMode: "multiply",
        },
        focused: {},
      }
    },
    MuiInput: {
      styleOverrides: {
        colorSecondary: {
          "&$underline:after": {
            borderBottomColor: palette.secondary.dark,
          },
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        colorSecondary: {
          color: palette.secondary.dark,
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        colorSecondary: {
          // .css-z0xjgo-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.secondary.dark,
          },
        },
        focused: {},
        notchedOutline: {
          borderColor: palette.text.secondary,
        },
      }
    },
    MuiRadio: {
      styleOverrides: {
        colorSecondary: {
          "&.Mui-checked": {
            color: palette.secondary.dark,
          },
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        textColorSecondary: {
          "&.Mui-selected": {
         
            color: palette.secondary.dark,
          },
        },
      }
    },
    MuiToggleButton:{
      styleOverrides: {
        root:{
          color:  palette.text.secondary,
          "&.Mui-selected":{
            color: 'rgba(0, 0, 0, 0.54)',
            backgroundColor: 'rgba(0, 0, 0, 0.12)'
          }          
        }
      }
    },
    MuiTabs:{
      defaultProps:{
        textColor:"inherit" 
      }
    },
    MuiImageList:{
      styleOverrides: {
        root:{
          // display:"none",
          marginBlock:0,
          "& li.MuiImageListItem-root":{
            height:'224px !important',
            "& img":{
                left: '50%',
                height: '100%',
                position: 'relative',
                transform: 'translateX(-50%)'
            }
          }
        }
      }
    }
  };
};

export default overrides;
