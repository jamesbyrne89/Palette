import React, { Component } from 'react';
import '../styles/styles.css';

const ColourInputBox = (props) => {

    const validateInput = (e) => {
        props.validateColour(e.target.value)
    }

    const handleErrors = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault();
            props.handleErrors(e.target);
        }
        
    }

    return (
        <input className="add-colour-input" type="text" maxLength="12" placeholder="Enter a hex or RGB code" onKeyDown={handleErrors} onChange={validateInput} />
    );
}

export default ColourInputBox;
