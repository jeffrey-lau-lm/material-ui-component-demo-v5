import { Theme } from '@mui/material'

// Extend the existing Mixin type

export const createMixins: (theme: Theme) => Theme['mixins'] = (theme) => ({
  ...theme.mixins,
  toolbar: {
    minHeight: theme.spacing(9),

    '@media (min-width:0px) and (orientation: landscape)': {
      minHeight: theme.spacing(11),
    },
    '@media (min-width:600px)': {
      minHeight: theme.spacing(12),
    },
  },
  drawerOpen: {
    width: theme.spacing(36),
  },
  drawerClose: {
    width: theme.spacing(9),
  },
})
