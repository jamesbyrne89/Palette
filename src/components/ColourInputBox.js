import React from 'react';
import '../styles/styles.css';

const ColourInputBox = (props) => {

    const handleKeyPress = (e) => {
        props.handleKeyPress(e);
    }

    return (
        <input className="add-colour-input" type="text" maxLength="12" placeholder="Enter a hex or RGB code" onKeyUp={handleKeyPress} />
    );
}

export default ColourInputBox;
