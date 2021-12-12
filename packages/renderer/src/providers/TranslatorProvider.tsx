import React, { createContext, useState } from 'react'
import { useElectron } from '../use/electron'
const { language } = useElectron()

export interface LocaleSpec {
    name: string,
    description: string
}

export interface TranslatorContextData {
    locale: string,
    setLocale: (locale: string) => void,
    getLocales: () => LocaleSpec[],
    t: (message: string) => string
}

export const TranslatorContext = createContext<TranslatorContextData>(
    {
        locale: '',
        setLocale: (locale: string) => { console.log(locale) },
        t: (message: string) => { return message },
        getLocales: () => { return [] }
    }
)

export const TranslatorProvider: React.FC = ({ children }) => {
    const defaultLocale = language.getCurrentLocale().name
    const [locale, setLocale] = useState<string>(defaultLocale)

    const getLocales = (): LocaleSpec[] => {
        return language.getLocales()
    }

    const changeLocale = (locale: string) => {
        language.setLocale(locale)
        setLocale(locale)
    }
    const t = (message: string) => {
        return language.t(message)
    }

    return (
        <TranslatorContext.Provider
            value={{ locale, setLocale: changeLocale, getLocales, t }}>
            {children}
        </TranslatorContext.Provider>
    )
}
