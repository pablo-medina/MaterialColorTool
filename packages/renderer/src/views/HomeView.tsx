import type { ReactNode } from 'react';
import React from 'react'
import type { OnColorPickFn } from '../components/MaterialColorPicker';
import MaterialColorPicker from '../components/MaterialColorPicker'
import type { ColorValue } from '../interfaces/color'
import MaterialPreview from '../components/MaterialPreview'
import './MaterialPaletteView.scss'
import { useTranslator } from '../hooks/useTranslator'

type ColorMode = 'primary' | 'secondary';

const HomeView: React.FC = () => {
    const [primaryColor, setPrimaryColor] = React.useState<ColorValue>({ hue: 'blue', shade: '700' });
    const [secondaryColor, setSecondaryColor] = React.useState<ColorValue>({ hue: 'pink', shade: '700' });
    const [colorMode, setColorMode] = React.useState<ColorMode>('primary');
    const { t } = useTranslator();

    const renderColorPicker = (colorValue: ColorValue, onColorPick: OnColorPickFn): ReactNode => {
        return (
            <MaterialColorPicker
                value={{ hue: colorValue.hue, shade: colorValue.shade }}
                onColorPick={onColorPick}
            />
        )
    }

    const renderedColorPicker = (colorMode === 'secondary') ? renderColorPicker(secondaryColor, setSecondaryColor) : renderColorPicker(primaryColor, setPrimaryColor);

    return (
        <div className="view home-view material-palette-view">
            <div className="card color-picker">
                <div className="title" onClick={() => setColorMode(colorMode === 'primary' ? 'secondary' : 'primary')}>
                    {t(`color.${colorMode}`)}
                </div>
                <div className="body">
                    {renderedColorPicker}
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
