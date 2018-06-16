import React, { Component } from 'react';
import ColourInputBox from './ColourInputBox';
import AddColourContainer from './AddColourContainer';
import Preview from './Preview';

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

  handleAddColour = () => {
    this.props.addColour(this.state.colourToAdd, this.props.palette.name);
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
          handleAddColour={this.handleAddColour}
          previewHandler={this.previewHandler}
          hex={hex}
        />
        <Preview
          hex={hex}
          rgb={rgb}
          handleAddColour={this.handleAddColour}
          visible={showPreview}
        />
      </AddColourContainer>
    );
  }
}

export default AddColourInput;
