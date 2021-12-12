import React from 'react'
import { appendClassName } from '../util/StringUtil'
import './Button.scss'

interface ButtonProps {
    className?: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = props => {
    return (
        <button
            className={appendClassName('widget widget-button', props.className)}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button