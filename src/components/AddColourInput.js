import React, { Component } from 'react';
import '../styles/styles.css';
import ColourInputBox from '../components/ColourInputBox';



class AddColourInput extends Component {
    constructor(props) {
        super(props);
        this.addColour = this.props.addColour.bind(this)
        this.validateColour = this.validateColour.bind(this);
        this.isHex = this.isHex.bind(this);
    }

    isHex(val) {
        let regex = /^#[0-9A-F]{6}$/i.test(val)
        return regex;
    }


    validateColour(val) {
        console.log(val)
        
         const colour = {
                isValid: false,
                hex: null,
                rgb: null
            }

        if (val.split('')[0] === '#') {
            if (val.length >= 7 && !this.isHex(val)) {

              //  ColourInputBox.classList.add('invalid')
                return false;
            }
            // Is valid hex
            else if (val.length >= 7 && this.isHex(val)) {
              //  ColourInputBox.classList.add('valid');
                        colour.isValid = true;
                        colour.hex = val;
                        colour.rgb = this.hexToRgb(val, 'formatted');
                    }

        }
        this.addColour(colour);
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
    
    // rgbToHex(r, g, b) {
    //   return   "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    // }

    render() {
        const { hex, rgb } = this.validateColour;
        console.log(this.props)
    return (
        <div className="add-colour">
            <h2>Add a colour:</h2>
                <ColourInputBox validateColour={this.validateColour} />
                <button className="submit-btn" onClick={this.addColour}>Add</button>
                <div className={`preview${ hex ? ' show': ' invisible' }`}>
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
