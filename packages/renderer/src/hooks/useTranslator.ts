import { useContext } from 'react'
import { TranslatorContext } from '../providers/translatorProvider'
import type { TranslatorContextData } from '../providers/translatorProvider'

export const useTranslator = (): TranslatorContextData => useContext(TranslatorContext)
