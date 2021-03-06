import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    const btnStyle = props.style ? [classes.Btn, props.style].join(' ') : classes.Btn;
    return (    
        <button className = {btnStyle} onClick = {props.click} disabled={props.disabled ? true: false }>
            {props.children}
        </button>
    );

};

export default Button;