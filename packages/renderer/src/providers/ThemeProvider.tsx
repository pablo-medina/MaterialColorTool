import React, { createContext, useState } from 'react'
import { useElectron } from '../use/electron'
import { themeConfig } from '../config'
const { properties } = useElectron()

export interface ThemeProviderHandler {
    getAvailableThemes(): string[],
    theme: string,
    themeClass: () => string,
    setTheme(theme: string): void,
}

export const ThemeContext = createContext<ThemeProviderHandler>(
    {
        getAvailableThemes: () => { return [] },
        theme: '',
        themeClass: () => {return ''},
        setTheme: (theme: string) => { console.log(theme) }
    }
)

export const ThemeProvider: React.FC = ({ children }) => {
    const storedTheme = properties.get('theme')
    const defaultTheme = themeConfig.defaultTheme
    const availableThemes = [...themeConfig.themes]
    const initialTheme = storedTheme || defaultTheme
    const [theme, setTheme] = useState<string>(initialTheme)

    const getAvailableThemes = (): string[] => {
        return availableThemes
    }

    const changeTheme = (theme: string) => {
        properties.set('theme', theme)
        setTheme(theme)
    }

    const getThemeClass = () => {
        if (!theme) {
            return 'theme-default'
        } else {
            return `theme-${theme}`
        }
    }

    return (
        <ThemeContext.Provider
            value={{ theme, themeClass: getThemeClass, setTheme: changeTheme, getAvailableThemes }}>
            {children}
        </ThemeContext.Provider>
    )
}
