import React from "react";
import type { ColorValue } from "../interfaces/color";
import ClassNameBuilder from "../lib/ClassNameBuilder";
import type { ColorShade } from "../lib/MaterialPalette";
import MaterialPalette from "../lib/MaterialPalette";
import './MaterialColorPicker.scss';
import Slider from "./Slider";

type OnColorPickFn = (color: ColorValue) => void;

interface Props {
    value: ColorValue
    onColorPick: OnColorPickFn
}


const renderColorHue = (hue: string, shade: string, active: boolean, onColorPick: OnColorPickFn) => {
    const colorDef = MaterialPalette.get(hue, shade);
    if (!colorDef) {
        return null;
    }
    const cnb = new ClassNameBuilder('color-hue');
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

const renderColorValue = (label: string, color: string) => {
    return (
        <div className="color-value">
            <label>{label}</label>
            <div className="value">
                <div className="color-block" style={{ backgroundColor: color }} />
                <input type="text" value={color} onChange={() => {return null;}} />
            </div>
        </div>
    )
}

const onShadeChange = (hue: string, shade: string, onColorPick: OnColorPickFn) => {
    onColorPick({ hue, shade });
}

const renderColorValues = (colorShade: ColorShade | undefined) => {
    if (!colorShade) {
        return null;
    }
    return (
        <div className="color-values">
            {renderColorValue('Normal', colorShade.color.normal)}
            {renderColorValue('Normal Text', colorShade.text.normal)}
            {renderColorValue('Light', colorShade.color.light)}
            {renderColorValue('Light Text', colorShade.text.light)}
            {renderColorValue('Dark', colorShade.color.dark)}
            {renderColorValue('Dark Text', colorShade.text.dark)}
        </div>
    );
}

const MaterialColorPicker: React.FC<Props> = props => {
    const current = props.value;
    const shadeNonAccentOptions = ['900', '800', '700', '600', '500', '400', '300', '200', '100', '50'];
    const shadeAccentOptions = ['a700', 'a400', 'a200', 'a100'];
    let shadeOptions;
    const currentHue = current.hue;
    const currentShade = current.shade;
    const currentColor = MaterialPalette.get(currentHue, currentShade);

    switch (currentHue) {
        case 'brown':
        case 'grey':
        case 'blueGrey':
            shadeOptions = [...shadeNonAccentOptions];
            break;
        default:
            shadeOptions = [...shadeNonAccentOptions, ...shadeAccentOptions];
    }

    const onColorPick = props.onColorPick;

    return (
        <div className="material-color-picker">
            <div className="color-shades">
                <label className="label slider-label">
                    Shade
                </label>
                <Slider
                    options={shadeOptions}
                    value={currentShade}
                    onChange={value => onShadeChange(currentHue, value, onColorPick)}
                />
                <label className="label slider-value">
                    {currentShade}
                </label>
            </div>
            <div className="color-select">
                <div className="color-hues">
                    {
                        MaterialPalette.hues().map(hue =>
                            renderColorHue(hue, current.shade, (current && current.hue === hue), onColorPick)
                        )
                    }
                </div>
                {renderColorValues(currentColor)}
            </div>
        </div>
    );
}

export default MaterialColorPicker;
