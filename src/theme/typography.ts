import { DeprecatedThemeOptions } from '@mui/material'
import { BaseCSSProperties } from '@mui/styles/withStyles'

const Base = [
  '"Source Sans Pro"',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',')

type FontFamilyProperty = BaseCSSProperties['fontFamily']

const Display: FontFamilyProperty = '"Roboto Slab", sans-serif'
// const Monospace: FontFamilyProperty = '"Source Code Pro", monospace'

const fontWeightLight = 300
const fontWeightRegular = 400
const fontWeightMedium = 600
const fontWeightBold = 700

const baseHeadingStyle = {
  fontWeight: fontWeightRegular,
}

const displayHeadingStyle = {
  fontFamily: Display,
  fontWeight: fontWeightBold,
}

export const typography: DeprecatedThemeOptions['typography'] = {
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,
  fontFamily: Base,

  h1: {
    ...displayHeadingStyle,
    fontSize: '2.4rem',
  },
  h2: {
    ...displayHeadingStyle,
    fontSize: '1.8rem',
  },
  h3: {
    ...displayHeadingStyle,
    fontSize: '1.5rem',
  },
  h4: {
    ...baseHeadingStyle,
    fontSize: '1.2rem',
  },
  h5: {
    ...baseHeadingStyle,
    fontSize: '1.1rem',
  },
  h6: baseHeadingStyle,
  body2: {
    fontSize: '0.833rem',
  },
  button: {
    textTransform: 'none',
    fontWeight: fontWeightBold,
    letterSpacing: '0.025em',
  },
  overline: {
    letterSpacing: '0.125em',
  },
}
