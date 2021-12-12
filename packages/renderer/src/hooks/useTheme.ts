import { useContext } from 'react'
import { ThemeContext } from '../providers/themeProvider'
import type { ThemeProviderHandler } from '../providers/themeProvider'

export const useTheme = (): ThemeProviderHandler => useContext(ThemeContext)
