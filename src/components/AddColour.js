import React, { Component } from 'react';
import '../styles/styles.css';

class AddColour extends Component {
    constructor(props) {
        super(props);
        this.checkColour = this.checkColour.bind(this);
    }


    checkColour() {
        console.log(this.hexToRgb(this.refs.newColourHex.value, 'formatted'))
    }



    hexToRgb(hex, format) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
          if (format === 'formatted') {
            return `rgb(${parseInt(result[1], 16).toString()}, ${parseInt(result[2], 16).toString()}, ${parseInt(result[3], 16).toString()})`;
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
        const { addColour } = this.props;
    return (
        <div className="add-colour">
        <h2>Add a colour:</h2>
          <label htmlFor="new-colour-hex">Hex:</label><input type="text" placeholder="Enter a hex or RGB code" ref="newColourHex" onChange={this.checkColour} />
          <label htmlFor="new-colour-rgb">RGB:</label><input type="text" name="new-colour-rgb" ref="newColourRgb" />
          <button value="Add" className="submit-btn" onClick={addColour}>Add</button>
          <div className="preview">
            <div className="preview__block"></div>
            <div className="preview__details">
                <div className="preview__hex"></div>
                <div className="preview__rgb"></div>
            </div>

          </div>
        </div>
    );
}
}

export default AddColour;
