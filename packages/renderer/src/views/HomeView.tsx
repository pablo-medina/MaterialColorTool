import React from 'react'
import MaterialColorPicker from '../components/MaterialColorPicker'
import type { ColorValue } from '../interfaces/color'
import MaterialPreview from '../components/MaterialPreview'
import './MaterialPaletteView.scss'
import { useTranslator } from '../hooks/useTranslator'

const HomeView: React.FC = () => {
    const [primaryColor, setPrimaryColor] = React.useState<ColorValue>({ hue: 'blue', shade: '700' });
    const [secondaryColor, setSecondaryColor] = React.useState<ColorValue>({ hue: 'pink', shade: '700' });
    const { t } = useTranslator();

    return (
        <div className="view home-view material-palette-view">
            <div className="color-pickers">
                <div className="card">
                    <div className="card-title">
                        {t('color.primary')}
                    </div>
                    <div className="card-content">
                        <MaterialColorPicker
                            value={{ hue: primaryColor.hue, shade: primaryColor.shade }}
                            onColorPick={setPrimaryColor}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        {t('color.secondary')}
                    </div>
                    <div className="card-content">
                        <MaterialColorPicker
                            value={{ hue: secondaryColor.hue, shade: secondaryColor.shade }}
                            onColorPick={setSecondaryColor}
                        />
                    </div>
                </div>
            </div>
            <div className="preview">
                <MaterialPreview
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    dark={false}
                />
                <MaterialPreview
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    dark={true}
                />
            </div>
        </div>
    )
}

export default HomeView
