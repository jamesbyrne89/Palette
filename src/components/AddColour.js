import React, { Component } from 'react';
import '../styles/styles.css';

class AddColour extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const { addColour } = this.props;
    return (
        <div className="add-colour">
        <h2>Add a colour:</h2>
          <label htmlFor="new-colour-hex">Hex:</label><input type="text" name="new-colour-hex" ref="newColourHex" />
          <label htmlFor="new-colour-rgb">RGB:</label><input type="text" name="new-colour-rgb" ref="newColourRgb" />
          <button value="Add" className="submit-btn" onClick={addColour}>Add</button>
        </div>
    );
}
}

export default AddColour;
