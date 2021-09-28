import { Theme } from '@mui/material'
import { rgba } from 'polished'

export const createDefaultThemeComponents: (
  theme: Theme,
) => Theme['components'] = (theme) => {
  const {
    palette,
    shape: { borderRadius },
    components,
  } = theme

  const isLightTheme = palette.mode === 'light'

  return {
    ...components,
    // Global Styles
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          svg: {
            display: 'block',
          },
        },
      },
    },

    // Sorted alphabetically (A -> Z) from this point forward
    MuiAlert: {
      defaultProps: {
        variant: isLightTheme ? 'standard' : 'filled',
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: palette.background.paper,
          color: palette.text.primary,
        },
        root: {
          '&.MuiAppBar-colorPrimary': {
            '& .MuiTabs-indicator': {
              backgroundColor: palette.secondary.main,
            },
            '& .MuiTab-textColorPrimary': {
              color: 'white !important',
              opacity: '0.7',

              '&.Mui-selected': {
                opacity: '1',
              },
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      variants: [
        'primary',
        'secondary',
        'success',
        'error',
        'info',
        'warning',
      ].map((c: String) => ({
        props: { variant: 'contained', color: c },
        style: {
          color: 'white',
          backgroundColor: palette[c].main,
        },
      })),
      styleOverrides: {
        textSecondary: {
          color: palette.secondary.dark,
        },
        contained: {
          backgroundColor: palette.grey[200],
          '&:hover': {
            backgroundColor: palette.grey[300],
          },
        },
        containedPrimary: {
          color: 'white',
          backgroundColor: palette.primary.main,
        },
        containedSecondary: {
          // TODO: Pressed style needs work
          color: `${palette.primary.main} !important`,
        },
        outlinedSecondary: {
          color: palette.secondary.dark,
          borderColor: palette.secondary.dark,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.5),
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        colorSecondary: {
          '&$checked': {
            color: palette.secondary.dark,
          },
        },
        checked: {},
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius,
          backgroundColor: rgba(palette.grey[900], 0.04),
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: palette.grey[100],

          '&:hover': {
            backgroundColor: rgba(palette.grey[900], 0.08),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: rgba(palette.grey[900], 0.04),
            },
          },
          '&.Mui-focused': {
            borderColor: palette.primary.main,
            borderWidth: 1,
            boxShadow: `inset 0 0 0 1px ${palette.primary.main}`,
          },
        },
        underline: {
          '&:before': {
            content: 'none',
          },
          '&:after': {
            content: 'none',
          },
          // TODO: use theme.palette.secondary for underline
        },
        colorSecondary: {
          '&:hover': {
            backgroundColor: rgba(palette.grey[900], 0.08),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: rgba(palette.grey[900], 0.04),
            },
          },
          '&.Mui-focused': {
            borderColor: palette.secondary.dark,
            boxShadow: `inset 0 0 0 1px ${palette.secondary.dark}`,
          },
        },
        focused: {},
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        colorSecondary: {
          '&.Mui-focused': {
            color: palette.secondary.dark,
          },
        },
        filled: {
          mixBlendMode: 'multiply',
        },
        focused: {},
      },
    },
    MuiInput: {
      styleOverrides: {
        colorSecondary: {
          '&$underline:after': {
            borderBottomColor: palette.secondary.dark,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorSecondary: {
          color: palette.secondary.dark,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        colorSecondary: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.secondary.dark,
          },
        },
        focused: {},
        notchedOutline: {
          borderColor: palette.text.secondary,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        colorSecondary: {
          '&.Mui-checked': {
            color: palette.secondary.dark,
          },
        },
        checked: {},
      },
    },
    MuiTab: {
      styleOverrides: {
        textColorSecondary: {
          '&.Mui-selected': {
            color: palette.secondary.dark,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: palette.grey[200],
          borderRadius: '25%',

          '&:hover': {
            backgroundColor: palette.grey[300],
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: palette.text.secondary,
          '&.Mui-selected': {
            color: 'rgba(0, 0, 0, 0.54)',
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        textColor: 'inherit',
      },
    },
    MuiImageList: {
      styleOverrides: {
        root: {
          // display:"none",
          marginBlock: 0,
          '& li.MuiImageListItem-root': {
            height: '224px !important',
            '& img': {
              left: '50%',
              height: '100%',
              position: 'relative',
              transform: 'translateX(-50%)',
            },
          },
        },
      },
    },
  }
}
