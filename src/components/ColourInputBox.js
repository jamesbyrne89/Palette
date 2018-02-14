import React, { Component } from 'react';
import '../styles/styles.css';

const ColourInputBox = (props) => {
    console.log(props)

    const validateInput = (e) => {
        props.validateColour(e.target.value)
    }

    return (
        <input className="add-colour-input" type="text" maxLength="12" placeholder="Enter a hex or RGB code" onChange={validateInput} />
    );
}

export default ColourInputBox;
