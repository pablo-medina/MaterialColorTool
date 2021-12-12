import React from 'react'
import { useTranslator } from '../hooks/useTranslator'

const HomeView: React.FC = () => {
    const { t } = useTranslator()

    return (
        <div className="view home-view">
            {t('view.home.title')}
        </div>
    )
}

export default HomeView
