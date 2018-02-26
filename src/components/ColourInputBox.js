import React from 'react';
import '../styles/styles.css';
import styled from 'styled-components';

const InputStyles = styled.input `
display: block;
background: transparent;
font-size: 1rem;
border: solid 1.5px #fff;
border-radius: 5px;
line-height: 1.5;
padding: 0.5em 1em;
color: var(--textColourSecondary);
font-weight: 300;
margin-top: 2em;
width: 100%;
`

const ColourInputBox = (props) => {

    const handleKeyPress = (e) => {
        props.handleKeyPress(e);
    }

    return (
        <InputStyles className="add-colour-input" type="text" maxLength="12" placeholder="Enter a hex or RGB code" onKeyUp={handleKeyPress} onChange={props.validateColour} />
    );
}

export default ColourInputBox;
