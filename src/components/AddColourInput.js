import React, { Component } from 'react';
import '../styles/styles.css';
import ColourInputBox from '../components/ColourInputBox';
import AddColourContainer from '../components/AddColourContainer';
import Preview from '../components/Preview';

class AddColourInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colourToAdd: null,
      showPreview: false
    };
  }

  previewHandler = colour => {
    if (colour) {
      this.setState({ colourToAdd: colour, showPreview: true });
    } else {
      this.setState({ colourToAdd: null, showPreview: false });
    }
  };

  render() {
    const { showPreview } = this.state;
    const hex = this.state.colourToAdd ? this.state.colourToAdd.hex : null;
    const rgb = this.state.colourToAdd ? this.state.colourToAdd.rgb : null;

    return (
      <AddColourContainer hex={hex} expanded={showPreview}>
        <h2>Add a colour:</h2>
        <ColourInputBox
          validateColour={this.validateColour}
          handleKeyPress={this.handleKeyPress}
          previewHandler={this.previewHandler}
          hex={hex}
        />
        <Preview hex={hex} rgb={rgb} visible={showPreview} />
      </AddColourContainer>
    );
  }
}

export default AddColourInput;
