import React from "react";
import { useTranslator } from "../hooks/useTranslator";
import type { ColorValue } from "../interfaces/color";
import MaterialPalette from "../lib/MaterialPalette";
import './MaterialPreview.scss';

interface Props {
    primaryColor: ColorValue
    secondaryColor: ColorValue
    dark: boolean
}

const MaterialPreview: React.FC<Props> = props => {
    const { primaryColor, secondaryColor, dark } = props;
    const pcDef = MaterialPalette.get(primaryColor.hue, primaryColor.shade);
    const scDef = MaterialPalette.get(secondaryColor.hue, secondaryColor.shade);
    const virtualTheme = dark ? 'vs-theme-dark' : 'vs-theme-light';
    const {t} = useTranslator();

    const colorToStyle = (fg: string, bg: string) => {
        return (
            {
                color: fg,
                backgroundColor: bg
            }
        );
    }

    const renderTab = (line: string, text: string) => {
        return (
            <div className="tab"
                style={
                    {
                        borderBottom: `2px solid ${line}`
                    }
                }>
                {text}
            </div>
        );
    }

    if (!pcDef || !scDef) {
        return null;
    }

    const itemText = t('preview.item');

    return (
        <div className="material-preview">
            <div className={`virtual-screen ${virtualTheme}`}>
                <div className="title-bar-container">
                    <div className="title-bar-dark" style={colorToStyle(pcDef.text.dark, pcDef.color.dark)} />
                    <div className="title-bar" style={colorToStyle(pcDef.text.normal, pcDef.color.normal)}>
                        <div className="menu">
                            =
                        </div>
                        <div className="title">{t('preview.title')}</div>
                    </div>
                </div>
                <div className="tabs-container"
                    style={
                        {
                            color: pcDef.text.light,
                            backgroundColor: pcDef.color.light
                        }
                    }>
                    {renderTab(pcDef.color.normal, `${itemText} 1`)}
                    {renderTab(pcDef.color.light, `${itemText} 2`)}
                    {renderTab(pcDef.color.light, `${itemText} 3`)}
                </div>
                <div className="content-container">
                    <div className="content">
                        <button className="fab" style={colorToStyle(scDef.text.normal, scDef.color.normal)}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaterialPreview;
