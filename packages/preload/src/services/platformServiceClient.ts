import { ipcRenderer } from 'electron'

const platformServiceClient: IPlatformServiceClient = {
    getPlatform: () => {
        return ipcRenderer.sendSync('get.platform')
    }
}

export default platformServiceClient
