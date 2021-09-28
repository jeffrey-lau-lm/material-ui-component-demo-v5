import { StyledEngineProvider, Theme, ThemeProvider } from '@mui/material'
import React from 'react'
import { portalTheme } from './portal-theme'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const PortalThemeProvider: React.FC = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={portalTheme}>{children}</ThemeProvider>
  </StyledEngineProvider>
)
