import React from 'react'
import { appendClassName } from '../util/StringUtil'
import './Label.scss'

interface LabelProps {
    className?: string
}

const Label: React.FC<LabelProps> = props => {
    return (
        <label className={appendClassName('widget widget-label', props.className)}>
            {props.children}
        </label>
    )
}

export default Label