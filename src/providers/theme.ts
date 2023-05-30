import { createTheme, ThemeOptions } from '@mui/material/styles'

interface CustomThemeOptions extends ThemeOptions {
  palette: {
    typography?: {
      fontFamily?: string
    }
    primary: {
      main: string
    }
    secondary: {
      main: string
    }
    background: {
      default: string
    }
  }
}

export const theme: CustomThemeOptions = createTheme({
  typography: {
    fontFamily: 'Outfit, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#193A4A',
    },
    secondary: {
      main: '#DD5470',
    },
    background: {
      default: '#eeeeee',
    },
  },
})
