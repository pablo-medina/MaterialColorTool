interface AppPropertiesConfiguration {
    fileName: string,
    keyValueSeparator: string
}

export const config: AppPropertiesConfiguration = {
    fileName: 'config.properties',
    keyValueSeparator: '='
}
