import type { ReactNode } from "react";
import React from "react";
import { useTranslator } from "../hooks/useTranslator";
import type { ColorValue } from "../interfaces/color";
import MaterialPalette from "../lib/MaterialPalette";
import './MaterialColorViewer.scss';

export type OnColorPickFn = (color: ColorValue) => void;

interface Props {
    value: ColorValue
}

const renderColor = (title: string, color: string): ReactNode => {
    return (
        <div className="color-info">
            <div className="title">
                {title}
            </div>
            <div className="body">
                <div className="color-block" style={{ backgroundColor: color }} />
                <div className="color-text">
                    {color}
                </div>
            </div>
        </div>
    )
}


const MaterialColorViewer: React.FC<Props> = props => {
    const current = props.value;
    const {t} = useTranslator();
    const mc = MaterialPalette.get(current.hue, current.shade);
    if (!mc) {
        return null;
    }

    return (
        <div className="material-color-viewer">
            <div className="section">
                <div className="title">
                    {t('color.viewer.bg')}
                </div>
                <div className="body">
                    {renderColor(t('color.viewer.normal'), mc.color.normal)}
                    {renderColor(t('color.viewer.light'), mc.color.light)}
                    {renderColor(t('color.viewer.dark'), mc.color.dark)}
                </div>
            </div>
            <div className="section">
                <div className="title">
                    {t('color.viewer.fg')}
                </div>
                <div className="body">
                    {renderColor(t('color.viewer.normal'), mc.text.normal)}
                    {renderColor(t('color.viewer.light'), mc.text.light)}
                    {renderColor(t('color.viewer.dark'), mc.text.dark)}
                </div>
            </div>
        </div>
    );
}

export default MaterialColorViewer;
