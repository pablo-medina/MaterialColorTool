import { ipcRenderer } from 'electron'

let currentLocale: LocaleInfo

const languageServiceClient: ILanguageServiceClient = {
    init: () => {
        const response = ipcRenderer.sendSync('i18n.getLocaleInfo')
        currentLocale = {
            name: response.name,
            translations: response.translations
        }
    },
    getCurrentLocale: () => {
        if (!currentLocale) {
            throw new Error('Locale not defined')
        }
        return (
            {
                name: currentLocale.name,
                translations: { ...currentLocale.translations }
            }
        )
    },
    t: (message: string) => {
        if (!currentLocale) {
            throw new Error('Locale not initialized')
        }
        const translation = currentLocale.translations[message]
        if (!translation?.trim()) {
            return message
        }
        return translation
    },
    getLocales: () => {
        return ipcRenderer.sendSync('i18n.getLocales') as LocaleDefinition[]
    },
    setLocale: (locale: string) => {
        const response = ipcRenderer.sendSync('i18n.changeLocale', locale)
        currentLocale = {
            name: response.name,
            translations: response.translations
        }
    }
}

export default languageServiceClient
