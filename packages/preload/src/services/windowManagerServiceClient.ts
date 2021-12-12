import { ipcRenderer } from 'electron'

const windowManagerServiceClient:IWindowManagerServiceClient = {
    close: () => {
        ipcRenderer.sendSync('window.close')
    },
    maximize: () => {
        return ipcRenderer.sendSync('window.maximize')
    },
    minimize: () => {
        return ipcRenderer.sendSync('window.minimize')
    },
    onWindowStateUpdate: (callback: (state: string) => void) => {
        ipcRenderer.on('window.updateState', (event, state) => {
            callback(state)
        })
    } 
}

export default windowManagerServiceClient
