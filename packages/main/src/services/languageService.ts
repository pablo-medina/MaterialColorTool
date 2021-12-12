import { join } from 'path'
import * as fs from 'fs'
import type Translations from '../types/translations'
import { config } from '../config/i18nConfig'
import propertiesService from './propertiesService'

interface LocaleInfo {
    locale: string,
    translations: Translations
}

let localeInfo: LocaleInfo

const getLocaleInfo = (): LocaleInfo => {
    if (!localeInfo) {
        throw new Error('Locale not loaded')
    }
    return { ...localeInfo }
}

const loadLocale = (name: string): LocaleInfo => {
    const localePath = join(__dirname, 'lang', `${name}.json`)
    const lang = fs.readFileSync(localePath, "utf-8")
    const translations: Translations = JSON.parse(lang)
    return {
        locale: name,
        translations
    }
}

const init = (): void => {
    const locale = propertiesService.get('language')
    changeLocale(locale)
}

const mergeLocales = (locale: LocaleInfo, fallbackLocale: LocaleInfo): LocaleInfo => {
    const translations: Translations = {}
    const fbTranslations = fallbackLocale.translations
    Object.keys(fbTranslations).forEach(key => {
        translations[key] = fbTranslations[key]
    })

    const locTranslations = locale.translations
    Object.keys(locTranslations).forEach(key => {
        translations[key] = locTranslations[key]
    })

    return (
        {
            locale: locale.locale,
            translations
        }
    )
}

const changeLocale = (name: string): void => {
    const locale = loadLocale(name)
    const fbLocale = loadLocale(config.fallbackLocale)
    const effectiveLocale = mergeLocales(locale, fbLocale)
    propertiesService.set('language', name)
    localeInfo = effectiveLocale
}

const getTranslation = (message: string, locale: LocaleInfo): string => {
    if (!locale) {
        return ''
    }
    const value = locale.translations[message]
    if ((!value) || (!value.trim().length)) {
        return ''
    }
    return value.trim()
}

const t = (message: string): string => {
    const ct = getTranslation(message, localeInfo)
    if (!ct) {
        return message
    }
    return ct
}

const getLocales = (): LocaleInfo[] => {
    return Object.assign([], config.availableLocales)
}

const languageService = {
    init,
    getLocaleInfo,
    getLocales,
    changeLocale,
    t
}

export default languageService