import type { ReactNode } from 'react';
import React from 'react'
import type { OnColorPickFn } from '../components/MaterialColorPicker';
import MaterialColorPicker from '../components/MaterialColorPicker'
import type { ColorValue } from '../interfaces/color'
import MaterialPreview from '../components/MaterialPreview'
import './MaterialPaletteView.scss'
import { useTranslator } from '../hooks/useTranslator'
import MaterialColorViewer from '../components/MaterialColorViewer';

type ColorMode = 'primary' | 'secondary';
type PreviewTheme = 'light' | 'dark';

const MaterialPaletteView: React.FC = () => {
    const [primaryColor, setPrimaryColor] = React.useState<ColorValue>({ hue: 'blue', shade: '700' });
    const [secondaryColor, setSecondaryColor] = React.useState<ColorValue>({ hue: 'pink', shade: '700' });
    const [colorMode, setColorMode] = React.useState<ColorMode>('primary');
    const [previewTheme, setPreviewTheme] = React.useState<PreviewTheme>('light');
    const { t } = useTranslator();

    const renderColorPicker = (colorValue: ColorValue, onColorPick: OnColorPickFn): ReactNode => {
        return (
            <MaterialColorPicker
                value={colorValue}
                onColorPick={onColorPick}
            />
        )
    }

    const renderColorViewer = (colorValue: ColorValue): ReactNode => {
        return (
            <MaterialColorViewer value={colorValue} />
        )
    }

    const currentColor = (colorMode === 'primary') ? primaryColor : secondaryColor;
    const setCurrentColor = (colorMode === 'primary') ? setPrimaryColor : setSecondaryColor;

    return (
        <div className="view material-palette-view">
            <div className="layout-h">
                <div className="layout-v">
                    <div className="card color-picker">
                        <div className="clickable" onClick={() => setColorMode(colorMode === 'primary' ? 'secondary' : 'primary')}>
                            {t(`color.${colorMode}`)}
                        </div>
                    </div>
                    <div className="layout-h">
                        <div className="card color-picker">
                            <div className="body">
                                {renderColorPicker(currentColor, setCurrentColor)}
                            </div>
                        </div>
                        <div className="card">
                            <div className="body">
                                {renderColorViewer(currentColor)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card preview">
                    <div className="clickable" onClick={() => setPreviewTheme(previewTheme === 'light' ? 'dark' : 'light')}>
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

        </div>
    )
}

export default MaterialPaletteView
