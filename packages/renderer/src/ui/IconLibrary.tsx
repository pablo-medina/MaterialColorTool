import type { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCog, faInfo, faWindowMaximize, faWindowMinimize, faWindowRestore, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export enum IconResource {
    Home,
    Configuration,
    About,
    WindowMaximize,
    WindowMinimize,
    WindowRestore,
    WindowClose
}

type IconElement = ReactNode

class IconLibrary {
    private iconResources = new Map<IconResource, IconElement>()

    constructor() {
        this.addIcon(IconResource.Home, this.renderFontAwesomeIcon(faHome))
        this.addIcon(IconResource.Configuration, this.renderFontAwesomeIcon(faCog))
        this.addIcon(IconResource.About, this.renderFontAwesomeIcon(faInfo))
        this.addIcon(IconResource.WindowMaximize, this.renderFontAwesomeIcon(faWindowMaximize))
        this.addIcon(IconResource.WindowMinimize, this.renderFontAwesomeIcon(faWindowMinimize))
        this.addIcon(IconResource.WindowRestore, this.renderFontAwesomeIcon(faWindowRestore))
        this.addIcon(IconResource.WindowClose, this.renderFontAwesomeIcon(faTimes))
    }

    addIcon(name: IconResource, resource: IconElement) {
        this.iconResources.set(name, resource)
    }

    get(name: IconResource): IconElement {
        const resource = this.iconResources.get(name)
        if (!resource) {
            throw new Error(`Icon Resource not found: ${name}`)
        }
        return resource
    }

    private renderFontAwesomeIcon = (icon: IconProp): ReactNode => {
        return (
            <FontAwesomeIcon icon={icon} />
        )
    }
}

export default new IconLibrary
