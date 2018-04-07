import React from 'react';
import '../styles/styles.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';


const DeleteButton = styled.button`
position: absolute;
top: 0;
border-radius: 2px;
background: transparent;
left: -1.5rem;
width: 1.5rem;
height: 1.5rem;
padding: 0.25rem;
border: 0;
opacity: 0;
font-weight: bold;
pointer-events: none;
-webkit-transition: opacity 0.15s;
-webkit-transition: opacity 0.15s;
transition: opacity 0.15s;
cursor: pointer;
`

const DeleteIcon = styled.svg`
width: 100%;
height: 100%;
fill: #fff;
`

const ColourStyles = styled.div`
position: relative;
text-align: left;
background: var(--contentBackgroundColour);
&:hover ${DeleteButton} {
    opacity: 1;
    pointer-events: auto;
}
`

const ColourSwatch = styled.div`
height: 140px;
background: ${props => {
        return props.hex
    }
    }
`

const ColourDetails = styled.div`
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

const ColourHex = styled.div`
padding: 0.55em 0.5em 0.45em;
position: relative;
background: var(--contentBackgroundColour);
cursor: pointer;
overflow: hidden;
&:hover ${ColourDetailsHoverOverlay} {
    opacity: 1;
}
`
const ColourRgb = styled.div`
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
            <DeleteButton onClick={() => handleRemoveColour(index)}>
                <DeleteIcon viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z" /></DeleteIcon>
            </DeleteButton>
            <ColourSwatch style={{ background: colour.hex }}></ColourSwatch>
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
