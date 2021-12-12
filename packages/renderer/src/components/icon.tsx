import React from 'react'
import type { IconResource } from '../ui/IconLibrary'
import IconLibrary from '../ui/IconLibrary'
import './icon.scss'

interface IconProps {
    name: IconResource
}

const Icon: React.FC<IconProps> = props => {
    return (
        <div className="app-icon">
            {IconLibrary.get(props.name)}
        </div>
    )
}

export default Icon