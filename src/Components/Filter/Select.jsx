import React from 'react';
import s from './Select.module.css'

const Select = ({options, defaultValue, value, onChange}) => {
    return (
        <div className={s.selectBlock}>
            <select
                className={s.selectCss}
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled value="">{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>

    );
};

export default Select;