import React, { Component } from 'react';
import '../styles/styles.css';
import ColourInputBox from '../components/ColourInputBox';



class AddColourInput extends Component {
    constructor(props) {
        super(props);
        this.addColour = this.props.addColour.bind(this);
        this.validateColour = this.validateColour.bind(this);
        this.isHex = this.isHex.bind(this);
        this.isRGB = this.isRGB.bind(this);
        this.hexToRgb = this.hexToRgb.bind(this);
        this.rgbToHex = this.rgbToHex.bind(this);
    }

    isHex(hex) {
        let regex = /^#[0-9A-F]{6}$/i.test(hex)
        return regex;
    }

    isRGB(rgb) {
        const isRGBColour = /rgb\(([01][0-9]?[0-9]?|2[0-4][0-9]|25[0-5]),[\s]?(\d{1,3}),[\s]?(\d{1,3})\)/;
        if (isRGBColour.test(rgb) || isRGBColour.test(rgb.replace(/[{()}]/g, ''))) {
            return isRGBColour;
        }
    }


    validateColour(val) {
        
        const colour = {}
        const isHex = this.isHex(val);
        const isRGB = this.isRGB(val);
        console.log(colour)
        if (isHex) {
            colour.hex = val;
            colour.rgb = this.hexToRgb(val);
        }

        else if (isRGB) {
            colour.hex = this.rgbToHex(val);
            colour.rgb = val;
        }

        if (colour.hex && colour.rgb) {
            this.addColour(colour)
            this.showPreview()
        }
        else {
            this.addColour(colour)
            return false;
        }
    }

    showPreview() {
        if (this.props.newColour) {
            return true;
        }
        else {
            return false;
        }
    }

    handleErrors() {

    }


    hexToRgb(hex, format) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            if (format === 'formatted') {
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

    render() {
        const { hex, rgb } = this.props.newColour;
        const showPreview = this.showPreview();
        console.log(this.showPreview())
        return (
            <div className="add-colour">
                <h2>Add a colour:</h2>
                <ColourInputBox validateColour={this.validateColour} />
                <button className="submit-btn" onClick={this.addColour}>Add</button>
                <div className={`preview${showPreview ? ' show' : ' invisible'}`}>
                    <div className="preview__block" style={{background: hex, height: '40px'}}></div>
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
