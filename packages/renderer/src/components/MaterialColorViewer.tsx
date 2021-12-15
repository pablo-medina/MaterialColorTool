import type { ReactNode } from "react";
import React from "react";
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
    const mc = MaterialPalette.get(current.hue, current.shade);
    if (!mc) {
        return null;
    }

    return (
        <div className="material-color-viewer">
            <div className="section">
                <div className="title">
                    Color
                </div>
                <div className="body">
                    {renderColor('Normal', mc.color.normal)}
                    {renderColor('Light', mc.color.light)}
                    {renderColor('Dark', mc.color.dark)}
                </div>
            </div>
            <div className="section">
                <div className="title">
                    Text
                </div>
                <div className="body">
                    {renderColor('Normal', mc.text.normal)}
                    {renderColor('Light', mc.text.light)}
                    {renderColor('Dark', mc.text.dark)}
                </div>
            </div>
        </div>
    );
}

export default MaterialColorViewer;
