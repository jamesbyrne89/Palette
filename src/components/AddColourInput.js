import React, { Component } from 'react';
import '../styles/styles.css';
import ColourInputBox from '../components/ColourInputBox';
import styled from 'styled-components';

const dropDownAnimation = () => {
   `
        0% {
            max-height: 200px;
        }
        60% {
            max-height: 350px;
        }
        100% {
            max-height: 320px;
        }
    `};

const AddColourContainer = styled.div`
padding: 1.5em;
background: var(--contentBackgroundColour);
width: 300px;
overflow: hidden;
margin-top: 120px;
-webkit-transition: all 0.225s ease-in-out;
transition: all 0.225s ease-in-out;
${props => props.expanded ? `max-height: 330px;
animation: ${dropDownAnimation} 0.225s ease-out;` : `max-height: 200px;`}

h2 {
    margin: 0;
}
`

const PreviewStyles = styled.div`
${props => props.visible ? `opacity: 1;
-webkit-transition: opacity 0.15s ease-out;
transition: opacity 0.15s ease-out;
height: auto;` : `opacity: 0;
height: 0; overflow: hidden;`}
`

const PreviewDetails = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
padding: 1em 0;
`

const PreviewBlock = styled.div`
margin-top: 2.5em;
height: 2em;
`

class AddColourInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colourToAdd: null
        }

        this.addColour = this.props.addColour.bind(this);
        this.handleAddColour = this.handleAddColour.bind(this);
        this.validateColour = this.validateColour.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    isHex(hex) {
        let regex = /^#[0-9A-F]{6}$/i.test(hex)
        return regex;
    }

    isRGB(rgb) {
        const isRGBColour = /rgb\(([01][0-9]?[0-9]?|2[0-4][0-9]|25[0-5]),[\s]?(\d{1,3}),[\s]?(\d{1,3})\)/;
        if (isRGBColour.test(rgb)) {
            return isRGBColour;
        }
    }

    hexToRgb(hex, format) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            if (format === true) {
                return `${parseInt(result[1], 16).toString()}, ${parseInt(result[2], 16).toString()}, ${parseInt(result[3], 16).toString()}`;
            }
            else {
                return [parseInt(result[1], 16),
                parseInt(result[2], 16),
                parseInt(result[3], 16)
                ]
            }
        }
        return null;
    }

    rgbToHex(rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    }

    validateColour(val) {
        const colour = {}
        const isHex = this.isHex(val);
        const isRGB = this.isRGB(val);

        if (isHex) {
            colour.hex = val.toUpperCase();
            colour.rgb = this.hexToRgb(val, true);
        }
        else if (isRGB) {
            colour.hex = this.rgbToHex(val).toUpperCase();
            colour.rgb = val;
        }
        // Valid colour
        if (colour.hex && colour.rgb) {
            this.previewColour(colour)
        }
        else {

            this.setState({ colourToAdd: null })
            return null;
        }
    }

    previewColour(newColour) {
        this.setState({ colourToAdd: newColour })
    }

    handleAddColour() {
        this.props.addColour(this.state.colourToAdd);
        this.setState({ colourToAdd: null })
    }


    handleKeyPress(e) {
        this.validateColour(e.target.value);
        const validColour = this.state.colourToAdd
        if (e.keyCode === 13) {
            e.preventDefault();
            if (validColour) {
                this.handleAddColour(validColour)
            }
            else {
                this.handleErrors();
            }
        }
    }


    handleErrors(input) {
        if (!this.validateColour(input)) {
            alert('Sorry, that does not seem to be a valid colour')
        }
    }


    render() {

        const showPreview = this.state.colourToAdd ? true : false;
        const hex = this.state.colourToAdd ? this.state.colourToAdd.hex : null;
        const rgb = this.state.colourToAdd ? this.state.colourToAdd.rgb : null;

        return (
            <AddColourContainer hex={hex} expanded={showPreview}>
                <h2>Add a colour:</h2>
                <ColourInputBox validateColour={this.validateColour} handleKeyPress={this.handleKeyPress} hex={hex} />
                <PreviewStyles visible={showPreview} >
                    <PreviewBlock hex={hex} style={{background: hex}} />
                    <PreviewDetails>
                        <div className="preview__hex">{hex}</div>
                        <div className="preview__rgb">{rgb}</div>
                    </PreviewDetails>
                    <button className="btn submit-btn" onClick={this.handleAddColour}>Add</button>
                </PreviewStyles>
            </AddColourContainer>
        );
    }
}

export default AddColourInput;
