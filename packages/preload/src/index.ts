import { contextBridge } from 'electron'
import languageServiceClient from './services/languageServiceClient'
import platformServiceClient from './services/platformServiceClient'
import propertiesServiceClient from './services/propertiesServiceClient'
import windowManagerServiceClient from './services/windowManagerServiceClient'

languageServiceClient.init()

const apiKey = 'electron'
/**
 * @see https://github.com/electron/electron/issues/21437#issuecomment-573522360
 */
const api: ElectronApi = {
  versions: process.versions,
  platform: platformServiceClient,
  properties: propertiesServiceClient,
  language: languageServiceClient,
  windowManager: windowManagerServiceClient
}

/**
 * The "Main World" is the JavaScript context that your main renderer code runs in.
 * By default, the page you load in your renderer executes code in this world.
 *
 * @see https://www.electronjs.org/docs/api/context-bridge
 */
contextBridge.exposeInMainWorld(apiKey, api)
