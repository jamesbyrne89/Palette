import React, { Component } from 'react';
import '../styles/styles.css';
import ColourInputBox from '../components/ColourInputBox';



class AddColourInput extends Component {
    constructor(props) {
        super(props);

        this.addColour = this.props.addColour.bind(this);
        this.validateColour = this.validateColour.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.state = {
            colourToAdd: null
        }
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
            colour.hex = val;
            colour.rgb = this.hexToRgb(val, true);
        }
        else if (isRGB) {
            colour.hex = this.rgbToHex(val);
            colour.rgb = val;
        }
        // Valid colour
        if (colour.hex && colour.rgb) {
            this.previewColour(colour)
        }
        else {
            console.log('invalid colour')
            return null;
        }
    }

    previewColour(newColour) {
        this.setState({ colourToAdd: newColour })
        console.log('set new colour to add');
      }

    submitColourHandler(newColour) {
        this.props.submitColour(newColour)
    }
    

    handleKeyPress(e) {
        const validColour = this.validateColour(e.target.value);
        if (e.keyCode === 13) {
            e.preventDefault();
            if (validColour) {           
                this.addColour(validColour)
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
            <div className="add-colour">
                <h2>Add a colour:</h2>
                <ColourInputBox validateColour={this.validateColour} handleKeyPress={this.handleKeyPress} />
                <button className="submit-btn" onClick={this.addColour}>Add</button>
                <div className={`preview${showPreview ? ' show' : ''}`} >
                    <div className="preview__block" style={{ background: hex, height: '40px' }}></div>
                    <div className="preview__details">
                        <div className="preview__hex">{hex}</div>
                        <div className="preview__rgb">{rgb}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddColourInput;
