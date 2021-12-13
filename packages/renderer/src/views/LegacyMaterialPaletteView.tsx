import React from 'react'
import MaterialColorPicker from '../components/MaterialColorPicker'
import type { ColorValue } from '../interfaces/color'
import MaterialPreview from '../components/MaterialPreview'
import './LegacyMaterialPaletteView.scss'

const HomeView: React.FC = () => {
    const [primaryColor, setPrimaryColor] = React.useState<ColorValue>({hue: 'blue', shade: '700'});
    const [secondaryColor, setSecondaryColor] = React.useState<ColorValue>({hue: 'pink', shade: '700'});

    return (
        <div className="view home-view legacy-material-palette-view">
            <div className="container color-pickers-container">
                <div className="container color-picker-container">
                    <h1>Primary Color</h1>
                    <MaterialColorPicker
                        value={{ hue: primaryColor.hue, shade: primaryColor.shade }}
                        onColorPick={setPrimaryColor}
                    />
                </div>
                <div className="container color-picker-container">
                    <h1>Secondary Color</h1>
                    <MaterialColorPicker
                        value={{ hue: secondaryColor.hue, shade: secondaryColor.shade }}
                        onColorPick={setSecondaryColor}
                    />
                </div>
            </div>
            <div className="container preview-container">
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
