import React from 'react';
import './index.css';

const Input = ({onChange, value, label, name, type="text"}) => {

    return(
        <div className="input-conatiner">
            { label ? <label>{label}</label> : null }
            <input name={name} className="input" type={type} onChange={onChange} value={value} />
        </div>
    )
}

export default Input;