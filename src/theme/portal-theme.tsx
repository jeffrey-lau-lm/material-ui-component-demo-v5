import { adaptV4Theme, createTheme, Theme } from '@mui/material'
import { createDefaultThemeComponents } from './default-theme-components'
import { createMixins } from './mixins'
import { lightPalette } from './palette'
import { typography } from './typography'

const baseTheme = createTheme(
  adaptV4Theme({
    typography: typography,
    palette: lightPalette,
    props: {},
    overrides: {},
  }),
)


export const portalTheme: Theme = {
  ...baseTheme,
  mixins: createMixins(baseTheme),
  components: createDefaultThemeComponents(baseTheme),
}



