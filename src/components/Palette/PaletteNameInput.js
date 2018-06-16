import React, { Component } from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  background: transparent;
  font-size: 1rem;
  border: solid 1.5px #fff;
  border-radius: 5px;
  line-height: 1.5;
  padding: 0.5em 1em;
  color: var(--textColourSecondary);
  font-weight: 300;
  margin-top: 1em;
  width: 100%;
  transition: all 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);

  ${({ valid }) => valid === true && `border: solid 1.5px #05c46b;`};
  ${({ valid }) => valid === false && `border: solid 1.5px #ff4d4d; `};
`;

class PaletteNameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      colourToAdd: null,
      valid: null
    };
  }

  handleChange = e => {
    e.stopPropagation();
  };

  handleSubmit = () => {
    this.props.handleAddColour();
    this.setState({ value: '', colourToAdd: null, valid: null });
    this.props.previewHandler();
  };

  handleErrors = () => {
    this.setState({ valid: false });
  };

  render() {
    return (
      <StyledInput
        type="text"
        maxLength="12"
        placeholder="Enter a hex or RGB code"
        valid={this.state.valid}
        onChange={this.handleChange}
        onKeyUp={this.handleChange}
        value={this.state.value}
        autofocus
      />
    );
  }
}

export default PaletteNameInput;
