import { useContext } from 'react'
import { PropertiesContext } from '../providers/propertiesProvider'
import type { PropertiesProviderHandler } from '../providers/propertiesProvider'

export const useProperties = (): PropertiesProviderHandler => useContext(PropertiesContext)
