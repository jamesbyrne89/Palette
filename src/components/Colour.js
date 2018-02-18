import React from 'react';
import '../styles/styles.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';


const ColourStyles = styled.div `
position: relative;
text-align: left;
background: var(--contentBackgroundColour);
` 

const ColourSwatch = styled.div `
height: 140px;
background: ${props => {
    console.log(props)
    return props.hex}
}
`

const ColourDetails = styled.div `
padding: 0.25em 0;
text-transform: uppercase;
position: relative;
`

const ColourDetailsHoverOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    overflow: hidden;
    padding: 0.55em 0.5em 0.45em;
    color: var(--contentBackgroundColour);
    background: #fff;
    -webkit-transition: opacity 0.225s;
    transition: opacity 0.225s;
    font-weight: 700;
`

const ColourHex = styled.div `
padding: 0.55em 0.5em 0.45em;
position: relative;
background: var(--contentBackgroundColour);
cursor: pointer;
overflow: hidden;
&:hover ${ColourDetailsHoverOverlay} {
    opacity: 1;
}
`
const ColourRgb = styled.div `
padding: 0.55em 0.5em 0.45em;
position: relative;
background: var(--contentBackgroundColour);
cursor: pointer;
overflow: hidden;
    &:hover ${ColourDetailsHoverOverlay} {
        opacity: 1;
    }
`



const Colour = (props) => {

    const { colour, removeColour, index } = props;

    const handleRemoveColour = (index) => {
        removeColour(index)
    }


    return (
        <ColourStyles>
            <button className="btn delete-btn" onClick={() => handleRemoveColour(index)} >X</button>
            <ColourSwatch style={{background: colour.hex}}></ColourSwatch>
            <ColourDetails>
                <CopyToClipboard text={colour.hex}
                    onCopy={() => console.log('copied')}>
                    <ColourHex>{colour.hex}
                    <ColourDetailsHoverOverlay><span>Copy Hex</span></ColourDetailsHoverOverlay>
                    </ColourHex>
                </CopyToClipboard>
                <CopyToClipboard text={colour.hex}
                    onCopy={() => console.log('copied')}>
                    <ColourRgb>{colour.rgb}
                    <ColourDetailsHoverOverlay><span>Copy RGB</span></ColourDetailsHoverOverlay>
                    </ColourRgb>
                </CopyToClipboard>
            </ColourDetails>
        </ColourStyles>
    );
}

export default Colour;
