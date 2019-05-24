import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    
    const btnStyle = props.style ? [classes.Btn, props.style].join(' ') : classes.Btn;
    
    return (    
        <button className = {btnStyle}>
            {props.children}
        </button>
    );

};

export default Button;