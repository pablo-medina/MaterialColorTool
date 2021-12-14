import React from 'react'
import './app.scss'
import { Navbar, NavbarItem } from './components/navbar'
import AboutView from './views/AboutView'
import ConfigurationView from './views/ConfigurationView'
import MaterialPaletteView from './views/MaterialPaletteView'
import { IconResource } from './ui/IconLibrary'
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { useTranslator } from './hooks/useTranslator'
import { useTheme } from './hooks/useTheme'
import TitleBar from './components/TitleBar'

interface NavbarProps {
    location: 'left' | 'right' | 'top' | 'bottom',
    showLabels?: boolean
}

interface AppProps {
    navbar: NavbarProps
}

const App: React.FC<AppProps> = props => {
    const { t } = useTranslator()
    const { themeClass } = useTheme()
    const titleBar = <TitleBar title="Material Color Tool" />

    return (
        <Router>
            <div className={`app ${themeClass()}`}>
                {titleBar}
                <div className={`app-container navbar-${props.navbar.location}`}>
                    <Navbar className={`navbar-${props.navbar.location}`}
                        showLabels={props.navbar.showLabels}>
                        <NavbarItem
                            name="palette"
                            label={t('navbar.palette.title')}
                            route="/palette"
                            icon={IconResource.Palette} />
                        <NavbarItem
                            name="config"
                            label={t('navbar.config.title')}
                            route="/config"
                            icon={IconResource.Configuration} />
                        <NavbarItem
                            name="about"
                            label={t('navbar.about.title')}
                            route="/about"
                            icon={IconResource.About} />
                    </Navbar>
                    <div className="content">
                        <Switch>
                            <Route path="/about">
                                <AboutView />
                            </Route>
                            <Route path="/config">
                                <ConfigurationView />
                            </Route>
                            <Route path="/">
                                <MaterialPaletteView />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App
