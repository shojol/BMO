import React, { useState } from 'react';
import './index.css';

const Button = ({onClick, value, label, disable, type="submit"}) => {

    return(
        <div className="button-conatiner">
            <button disable={disable} className="button" type={type} onClick={onClick}>{value}</button>
        </div>
    )
}

export default Button;