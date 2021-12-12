import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { URL } from 'url'
import propertiesService from './services/propertiesService'
import languageService from './services/languageService'
import * as os from 'os'

const isSingleInstance = app.requestSingleInstanceLock()

const getPlatform = (): string => {
  switch (os.platform()) {
    case 'win32':
      return 'windows'
    case 'linux':
      return 'linux'
    case 'darwin':
      return 'max'
    default:
      return 'unsupported'
  }
}

enum WindowState {
  normal = 'normal',
  minimized = 'minimized',
  maximized = 'maximized'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isWindows = (): boolean => ('windows' === getPlatform())
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isMac = (): boolean => ('mac' === getPlatform())
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isLinux = (): boolean => ('linux' === getPlatform())

let windowState: WindowState = WindowState.normal
const setWindowState = (window: BrowserWindow, state: WindowState): void => {
  if (state !== windowState) {
    windowState = state
    window.webContents.send('window.updateState', state)
  }
}
const getStateFromWindow = (window: BrowserWindow): WindowState => {
  if (window.isMinimized()) {
    return WindowState.minimized
  } else if (window.isMaximized()) {
    return WindowState.maximized
  } else {
    return WindowState.normal
  }
}

if (!isSingleInstance) {
  app.quit()
  process.exit(0)
}

app.disableHardwareAcceleration()

// Initialize AppSettings
propertiesService.init()

// Initialize i18n
languageService.init()

let mainWindow: BrowserWindow | null = null

const createWindow = async () => {

  // Create Window
  mainWindow = new BrowserWindow({
    show: false, // Use 'ready-to-show' event to show window
    vibrancy: 'under-window',
    visualEffectState: 'active',
    frame: false,
    webPreferences: {
      nativeWindowOpen: true,
      preload: join(__dirname, '../../preload/dist/index.cjs'),
    },
  })

  ipcMain.on('get.platform', event => {
    event.returnValue = getPlatform()
  })

  ipcMain.on('app.properties.get', (event, key) => {
    event.returnValue = propertiesService.get(key)
  })

  ipcMain.on('app.properties.set', (event, key, value) => {
    propertiesService.set(key, value)
    event.returnValue = true
  })

  ipcMain.on('i18n.getLocales', (event) => {
    event.returnValue = languageService.getLocales()
  })

  ipcMain.on('i18n.changeLocale', (event, locale) => {
    languageService.changeLocale(locale)
    event.returnValue = languageService.getLocaleInfo()
  })

  ipcMain.on('i18n.getLocaleInfo', (event) => {
    event.returnValue = languageService.getLocaleInfo()
  })

  ipcMain.on('window.close', (event) => {
    mainWindow?.close()
    event.returnValue = true
  })

  ipcMain.on('window.getState', (event) => {
    if (!mainWindow) {
      event.returnValue = 'null'
    } else {
      if (mainWindow.isMaximized()) {
        event.returnValue = 'maximized'
      } else if (mainWindow.isMinimized()) {
        event.returnValue = 'minimized'
      } else {
        event.returnValue = 'normal'
      }
    }
  })

  ipcMain.on('window.minimize', (event) => {
    if (mainWindow) {
      mainWindow.minimize()
      event.returnValue = 'minimized'
    } else {
      event.returnValue = 'null'
    }
  })

  ipcMain.on('window.maximize', (event) => {
    if (mainWindow) {
      if (mainWindow.isMaximized()) {
        mainWindow.restore()
        event.returnValue = 'normal'
      } else {
        mainWindow.maximize()
        event.returnValue = 'maximized'
      }
    } else {
      event.returnValue = 'null'
    }
  })

  mainWindow.on('maximize', () => {
    if (mainWindow) {
      setWindowState(mainWindow, WindowState.maximized)
    }
  })

  mainWindow.on('unmaximize', () => {
    if (mainWindow) {
      setWindowState(mainWindow, WindowState.normal)
    }
  })

  mainWindow.on('minimize', () => {
    if (mainWindow) {
      setWindowState(mainWindow, WindowState.minimized)
    }
  })

  mainWindow.on('restore', () => {
    if (mainWindow) {
      setWindowState(mainWindow, WindowState.normal)
    }
  })

  if (isLinux()) {
    mainWindow.on('resize', () => {
      if (mainWindow) {
        const state = getStateFromWindow(mainWindow)
        setWindowState(mainWindow, state)
      }
    })
  }

  /**
   * If you install `show: true` then it can cause issues when trying to close the window.
   * Use `show: false` and listener events `ready-to-show` to fix these issues.
   *
   * @see https://github.com/electron/electron/issues/25012
   */
  mainWindow.on('ready-to-show', () => {
    mainWindow?.show()

    if (import.meta.env.MODE === 'development') {
      mainWindow?.webContents.openDevTools()
    }
  });

  /**
   * URL for main window.
   * Vite dev server for development.
   * `file://../renderer/index.html` for production and test
   */
  const pageUrl = import.meta.env.MODE === 'development' && import.meta.env.VITE_DEV_SERVER_URL !== undefined
    ? import.meta.env.VITE_DEV_SERVER_URL
    : new URL('../renderer/dist/index.html', 'file://' + __dirname).toString()


  await mainWindow.loadURL(pageUrl)
}


app.on('second-instance', () => {
  // Someone tried to run a second instance, we should focus our window.
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore()
    mainWindow.focus()
  }
});


app.on('window-all-closed', () => {
  // Save settings
  propertiesService.save()

  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.whenReady()
  .then(createWindow)
  .catch((e) => console.error('Failed to create window:', e))


// Auto-updates
/*
if (import.meta.env.PROD) {
  app.whenReady()
    .then(() => import('electron-updater'))
    .then(({ autoUpdater }) => autoUpdater.checkForUpdatesAndNotify())
    .catch((e) => console.error('Failed check updates:', e))
}
*/
