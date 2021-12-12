import React from 'react'
import { useTranslator } from '../hooks/useTranslator'

const AboutView: React.FC = () => {
    const {t} = useTranslator()
    return (
        <div className="view about-view">
            {t('view.about.title')}
        </div>
    )
}

export default AboutView
