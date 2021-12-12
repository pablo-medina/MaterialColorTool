import { ipcRenderer } from 'electron'

const propertiesServiceClient: IPropertiesServiceClient = {
    get: (key: string) => {
        return ipcRenderer.sendSync('app.properties.get', key)
    },
    set: (key: string, value: string) => {
        ipcRenderer.sendSync('app.properties.set', key, value)
    }
}

export default propertiesServiceClient
