import React from "react";
import './Slider.scss';

type onChangeFn = (value: string) => void;

interface Props {
    options: string[],
    value: string,
    onChange: onChangeFn
}

const Slider: React.FC<Props> = props => {
    const options = props.options;
    const currentOptionIndex = options.indexOf(props.value);
    let value = 0;
    if (currentOptionIndex >= 0) {
        value = currentOptionIndex;
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        const value = options[newValue];
        props.onChange(value);
    }

    return (
        <input
            className="slider"
            type="range"
            min="0"
            max={options.length - 1}
            value={value}
            onChange={onChange} />
    );
}

export default Slider
