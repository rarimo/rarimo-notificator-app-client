import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import { ToastsManager } from '@/contexts'
import { useViewportSizes } from '@/hooks/'
import { AppRoutes } from '@/routes'

import { uiStore } from './store'
import { createTheme } from './theme'

function App() {
  useViewportSizes()

  const theme = createTheme(uiStore.paletteMode)

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ToastsManager>
          <>
            <CssBaseline />
            <AppRoutes />
          </>
        </ToastsManager>
      </ThemeProvider>
    </div>
  )
}

export default App
