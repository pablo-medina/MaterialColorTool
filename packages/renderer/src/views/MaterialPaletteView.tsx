import type { ReactNode } from 'react';
import React from 'react'
import type { OnColorPickFn } from '../components/MaterialColorPicker';
import MaterialColorPicker from '../components/MaterialColorPicker'
import type { ColorValue } from '../interfaces/color'
import MaterialPreview from '../components/MaterialPreview'
import './MaterialPaletteView.scss'
import { useTranslator } from '../hooks/useTranslator'

type PreviewTheme = 'light' | 'dark';

const MaterialPaletteView: React.FC = () => {
    const [primaryColor, setPrimaryColor] = React.useState<ColorValue>({ hue: 'blue', shade: '700' });
    const [secondaryColor, setSecondaryColor] = React.useState<ColorValue>({ hue: 'pink', shade: '700' });
    const [previewTheme, setPreviewTheme] = React.useState<PreviewTheme>('light');
    const { t } = useTranslator();

    const renderColorPicker = (colorValue: ColorValue, onColorPick: OnColorPickFn): ReactNode => {
        return (
            <MaterialColorPicker
                value={{ hue: colorValue.hue, shade: colorValue.shade }}
                onColorPick={onColorPick}
            />
        )
    }

    return (
        <div className="view material-palette-view">
            <div className="card color-picker">
                <div className="title">
                    {t('color.primary')}
                </div>
                <div className="body">
                    {renderColorPicker(primaryColor, setPrimaryColor)}
                </div>
            </div>
            <div className="card color-picker">
                <div className="title">
                    {t('color.secondary')}
                </div>
                <div className="body">
                    {renderColorPicker(secondaryColor, setSecondaryColor)}
                </div>
            </div>
            <div className="card preview">
                <div className="title" onClick={() => setPreviewTheme(previewTheme === 'light' ? 'dark' : 'light')}>
                    {t(`preview.theme.${previewTheme}`)}
                </div>
                <div className="body">
                    <MaterialPreview
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                        dark={previewTheme === 'dark'}
                    />
                </div>
            </div>
        </div>
    )
}

export default MaterialPaletteView
