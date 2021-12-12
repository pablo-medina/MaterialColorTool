import React, { useState } from 'react'
import './ConfigurationView.scss'
import { useProperties } from '../hooks/useProperties'
import { useTranslator } from '../hooks/useTranslator'
import { useTheme } from '../hooks/useTheme'
import Label from '../components/Label'
import Button from '../components/Button'
import {Select, Option} from '../components/select'

const ConfigurationView: React.FC = () => {
    const { t, setLocale, getLocales } = useTranslator()
    const { getProperty, setProperty } = useProperties()
    const themeManager = useTheme()
    const currentTheme = getProperty('theme')
    const currentLanguage = getProperty('language')
    const [theme, setTheme] = useState<string>(currentTheme || 'light')
    const [language, setLanguage] = useState<string>(currentLanguage || 'en')
    const [, updateState] = React.useState({})
    const availableThemes = themeManager.getAvailableThemes()
    const availableLanguages = getLocales()
    const forceUpdate = React.useCallback(() => updateState({}), [])

    const handleApplyButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setProperty('theme', theme)
        setProperty('language', language)
        setLocale(language)
        forceUpdate()
        themeManager.setTheme(theme)
    }

    return (
        <div className="view configuration-view">
            <ul className="options">
                <li className="option">
                    <Label className="option-label">{t('view.config.theme')}</Label>
                    <div className="option-component">
                        <Select className="option-theme" value={theme} onChange={e => setTheme(e.target.value)}>
                            {
                                availableThemes.map((theme, index) =>
                                    <Option key={index} value={theme}>
                                        {t(`theme.${theme}`)}
                                    </Option>
                                )
                            }
                        </Select>
                    </div>
                </li>
                <li className="option">
                    <Label className="option-label">{t('view.config.language')}</Label>
                    <div className="option-component">
                        <Select className="option-language widget" value={language} onChange={e => setLanguage(e.target.value)}>
                            {
                                availableLanguages.map((language, index) =>
                                    <option key={index} value={language.name}>
                                        {language.description}
                                    </option>
                                )
                            }
                        </Select>
                    </div>
                </li>
            </ul>
            <Button className="button-apply" onClick={handleApplyButtonClick}>{t('view.config.apply')}</Button>
        </div>
    )
}

export default ConfigurationView
