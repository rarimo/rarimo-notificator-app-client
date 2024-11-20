import { createTheme as createMuiTheme, PaletteMode } from '@mui/material'

import { breakpoints } from './breakpoints'
import { darkPalette, lightPalette } from './colors'
import { typography } from './typography'

export const createTheme = (mode: PaletteMode) =>
  createMuiTheme({
    palette: mode === 'dark' ? darkPalette : lightPalette,
    typography,
    breakpoints,
    spacing: 4,
    shape: {
      borderRadius: 4,
    },
  })
