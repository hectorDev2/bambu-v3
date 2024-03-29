'use client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'

import { theme } from './theme'

export function MuiThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  )
}
