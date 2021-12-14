import React from "react";
import { useTranslator } from "../hooks/useTranslator";
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

const renderColorShade = (hue: string, shade: string, active: boolean, onColorPick: OnColorPickFn) => {
    const colorDef = MaterialPalette.get(hue, shade);
    if (!colorDef) {
        return null;
    }
    const cnb = new ClassNameBuilder('color-shade');
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
    //const shadeNonAccentOptions = ['900', '800', '700', '600', '500', '400', '300', '200', '100', '50'];
    //const shadeAccentOptions = ['a700', 'a400', 'a200', 'a100'];
    //let shadeOptions;
    const currentHue = current.hue;
    const currentShade = current.shade;
    //const currentColor = MaterialPalette.get(currentHue, currentShade);
    const { t } = useTranslator();

    /*
    switch (currentHue) {
        case 'brown':
        case 'grey':
        case 'blueGrey':
            shadeOptions = [...shadeNonAccentOptions];
            break;
        default:
            shadeOptions = [...shadeNonAccentOptions, ...shadeAccentOptions];
    }
    */

    const onColorPick = props.onColorPick;

    return (
        <div className="material-color-picker">
            <div className="color-select">
                <div className="color-panel">
                    <div className="title">
                        {t('color.hue')}
                    </div>
                    <div className="body color-hues">
                        {
                            MaterialPalette.hues().map(hue =>
                                renderColorHue(hue, current.shade, (current && current.hue === hue), onColorPick)
                            )
                        }
                    </div>
                </div>
                <div className="color-panel">
                    <div className="title">
                        {t('color.shade')}
                    </div>
                    <div className="body color-shades">
                        {
                            MaterialPalette.shades(currentHue).map(shade =>
                                renderColorShade(currentHue, shade, (current && currentShade === shade), onColorPick)
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MaterialColorPicker;
