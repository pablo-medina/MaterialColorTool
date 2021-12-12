import React, { createContext } from 'react'
import { useElectron } from '../use/electron'
const { properties } = useElectron()

export interface PropertiesProviderHandler {
    getProperty: (key: string) => string,
    setProperty: (key: string, value: string) => void
}

export const PropertiesContext = createContext<PropertiesProviderHandler>(
    {
        getProperty: (key: string) => { return key },
        setProperty: (key: string, value: string) => { console.log(key, value) }
    }
)

export const PropertiesProvider: React.FC = ({ children }) => {
    const getProperty = (key: string) => {
        return properties.get(key)
    }

    const setProperty = (key: string, value: string) => {
        properties.set(key, value)
    }

    return (
        <PropertiesContext.Provider value={{ getProperty, setProperty }}>
            {children}
        </PropertiesContext.Provider>
    )
}
