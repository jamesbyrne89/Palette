import React, { Component } from 'react';
import '../styles/styles.css';

const ColourInputBox = (props) => {
    const validateInput = (e) => {
        props.validateColour(e.target.value)
    }

    const handleKeyPress = (e) => {
        props.handleKeyPress(e);
    }

    return (
        <input className="add-colour-input" type="text" maxLength="12" placeholder="Enter a hex or RGB code" onKeyUp={handleKeyPress} />
    );
}

export default ColourInputBox;
