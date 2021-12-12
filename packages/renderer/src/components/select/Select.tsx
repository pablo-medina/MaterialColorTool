import React from 'react'
import { appendClassName } from '../../util/StringUtil'
import './Select.scss'

interface SelectProps {
    className?: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const Select: React.FC<SelectProps> = props => {
    return (
        <select
            className={appendClassName('widget widget-select', props.className)}
            value={props.value}
            onChange={props.onChange}>
            {props.children}
        </select>
    )
}

export default Select