import React from 'react';
import './Input.css';

const Input = (props) => {

    const {
        type,
        label,
        value,
        isValid,
        changeInput,
        placeholder
    } = props;

    const iconClass = isValid
        ? "fa fa-check-circle font_green"
        : "fa fa-times-circle font_red";


    return (
        <React.Fragment>
            <span>
                <i className={iconClass}></i>
            </span>
            <label>
                {label}
            </label>
            <div><input
                value={value}
                onChange={(e) => changeInput(e)}
                type={type}
                placeholder={placeholder}/>
            </div>
        </React.Fragment>
    );
};

export default Input;