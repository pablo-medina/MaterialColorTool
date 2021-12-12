export interface LocaleDef {
    name: string,
    description: string
}

interface LanguageConfiguration {
    defaultLocale: string,
    fallbackLocale: string,
    availableLocales: LocaleDef[]
}

export const config: LanguageConfiguration = {
    defaultLocale: 'en',
    fallbackLocale: 'en',
    availableLocales: [
        {
            name: 'en',
            description: 'English'
        }, {
            name: 'es',
            description: 'Español'
        }
    ]
}
