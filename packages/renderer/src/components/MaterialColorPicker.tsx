import React from "react";
import type { ColorValue } from "../interfaces/color";
import ClassNameBuilder from "../lib/ClassNameBuilder";
import MaterialPalette from "../lib/MaterialPalette";
import './MaterialColorPicker.scss';

export type OnColorPickFn = (color: ColorValue) => void;

interface Props {
    value: ColorValue
    onColorPick: OnColorPickFn
}


const renderColorHue = (hue: string, shade: string, active: boolean, onColorPick: OnColorPickFn) => {
    const colorDef = MaterialPalette.get(hue, shade);
    if (!colorDef) {
        return null;
    }
    const cnb = new ClassNameBuilder('color-button');
    cnb.addIf('active', active);
    return (
        <button
            key={`hue-${hue}`}
            className={cnb.build()}
            style={
                {
                    color: colorDef.text.normal,
                    backgroundColor: colorDef.color.normal
                }
            }
            onClick={() => onShadeChange(hue, shade, onColorPick)}
        >

        </button>
    );
}

const renderColorShade = (hue: string, shade: string, active: boolean, onColorPick: OnColorPickFn) => {
    const colorDef = MaterialPalette.get(hue, shade);
    if (!colorDef) {
        return null;
    }
    const cnb = new ClassNameBuilder('color-button');
    cnb.addIf('active', active);
    return (
        <button
            key={`shade-${shade}`}
            className={cnb.build()}
            style={
                {
                    color: colorDef.text.normal,
                    backgroundColor: colorDef.color.normal
                }
            }
            onClick={() => onShadeChange(hue, shade, onColorPick)}
        >

        </button>
    );
}


const onShadeChange = (hue: string, shade: string, onColorPick: OnColorPickFn) => {
    onColorPick({ hue, shade });
}

const MaterialColorPicker: React.FC<Props> = props => {
    const current = props.value;
    const currentHue = current.hue;
    const currentShade = current.shade;

    const onColorPick = props.onColorPick;

    return (
        <div className="material-color-picker">
            <div className="color-select">
                <div className="color-panel">
                    {
                        MaterialPalette.hues().map(hue =>
                            renderColorHue(hue, '500', (current && current.hue === hue), onColorPick)
                        )
                    }
                </div>
                <div className="color-panel">
                    {
                        MaterialPalette.shades(currentHue).map(shade =>
                            renderColorShade(currentHue, shade, (current && currentShade === shade), onColorPick)
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default MaterialColorPicker;
