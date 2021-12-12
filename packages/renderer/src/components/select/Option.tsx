import React from 'react'
import { appendClassName } from '../../util/StringUtil'

interface OptionProps {
    className?: string,
    value: string
}

const Option: React.FC<OptionProps> = props => {
    return (
        <option
            className={appendClassName('widget widget-select-option', props.className)}
            value={props.value}>
            {props.children}
        </option>
    )
}

export default Option