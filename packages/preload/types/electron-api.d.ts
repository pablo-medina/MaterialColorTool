interface Translations {
  [key: string]: string
}

interface LocaleInfo {
  name: string,
  translations: Translations
}

interface LocaleDefinition {
  name: string,
  description: string
}

interface ILanguageServiceClient {
  init: () => void,
  getCurrentLocale: () => LocaleInfo,
  t: (message: string) => string,
  getLocales: () => LocaleDefinition[],
  setLocale: (locale: string) => void
}

interface IPlatformServiceClient {
  getPlatform: () => string
}

interface IPropertiesServiceClient {
  get: (key: string) => string,
  set: (key: string, value: string) => void
}

interface IWindowManagerServiceClient {
  close: () => void,
  maximize: () => string,
  minimize: () => string,
  onWindowStateUpdate: (callback: (state: string) => void) => void
}


interface ElectronApi {
  readonly versions: Readonly<NodeJS.ProcessVersions>,
  readonly platform: Readonly<IPlatformServiceClient>,
  readonly language: Readonly<ILanguageServiceClient>,
  readonly properties: Readonly<IPropertiesServiceClient>,
  readonly windowManager: Readonly<IWindowManagerServiceClient>
}

declare interface Window {
  electron: Readonly<ElectronApi>
  electronRequire?: NodeRequire
}
