import React, { useState } from 'react'
import './TitleBar.scss'
import { useElectron } from '../use/electron'
import IconLibrary, { IconResource } from '../ui/IconLibrary'
const { windowManager } = useElectron()

interface TitleBarProps {
    title: string
}

type WindowState = 'normal' | 'maximized' | 'minimized'

const getWindowState = (state: string): WindowState => {
    switch (state) {
        case 'maximized':
            return 'maximized';
        case 'minimized':
            return 'minimized';
        default:
            return 'normal'
    }
}

const TitleBar: React.FC<TitleBarProps> = props => {
    const [windowState, setWindowState] = useState<WindowState>('normal')
    const handleMinimize = () => {
        windowManager.minimize()
    }
    const handleMaximize = () => {
        windowManager.maximize()
    }
    const handleClose = () => { windowManager.close() }
    windowManager.onWindowStateUpdate((state: string) => {
        const ws = getWindowState(state)
        setWindowState(ws)
    })

    return (
        <div className="titlebar">
            <div className="titlebar-decorator" />
            <div className="title">
                {props.title}
            </div>
            <div className="buttons">
                <button className="btn" onClick={() => handleMinimize()}>
                    {IconLibrary.get(IconResource.WindowMinimize)}
                </button>
                <button className="btn" onClick={() => handleMaximize()}>
                    {IconLibrary.get(windowState === 'maximized' ? IconResource.WindowRestore : IconResource.WindowMaximize)}
                </button>
                <button className="btn btn-close" onClick={() => handleClose()}>
                    {IconLibrary.get(IconResource.WindowClose)}
                </button>
            </div>
        </div>
    )
}

export default TitleBar