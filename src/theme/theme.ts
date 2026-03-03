import { createTheme } from '@mui/material/styles'

export const themeColors = {
  primary: '#7A5C3E',
  secondary: '#C9A66B',
  accent: '#A67B5B',
  background: '#F7F3EC',
  surface: '#EDE6D6',
  textPrimary: '#3E2F1C',
  textSecondary: '#6D5A44',
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: themeColors.primary,
    },
    secondary: {
      main: themeColors.secondary,
    },
    background: {
      default: themeColors.background,
      paper: themeColors.surface,
    },
    text: {
      primary: themeColors.textPrimary,
      secondary: themeColors.textSecondary,
    },
  },
  typography: {
    fontFamily: `'Playfair Display', serif`,
    h1: { fontWeight: 600 },
    h2: { fontWeight: 500 },
    button: { textTransform: 'none' },
  },
  shape: {
    borderRadius: 16,
  },
})

export default theme
