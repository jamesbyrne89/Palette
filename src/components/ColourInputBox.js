import React, { Component } from 'react';
import '../styles/styles.css';
import styled from 'styled-components';

const InputStyles = styled.input`
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
`;

class ColourInputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      colourToAdd: null
    };
  }

  handleChange = e => {
    e.stopPropagation();
    let input = e.target.value;
    let newColour = {};
    this.setState({ value: input });
    if (this.isHex(input)) {
      newColour.hex = input;
      newColour.rgb = this.hexToRgb(input);
      this.setState({ colourToAdd: newColour });
      this.previewHandler(newColour);
    }
    if (this.isRGB(input)) {
      newColour.hex = input;
      newColour.rgb = this.rgbToHex(input);
      this.setState({ colourToAdd: newColour });
      this.previewHandler(newColour);
    }
    if (!this.isHex(input) && !this.isRGB(input)) {
      this.setState({ colourToAdd: null });
      this.previewHandler();
    }
    if (e.keyCode === 13) {
      if (this.state.colourToAdd !== null) {
        this.handleSubmit();
      } else {
        this.handleErrors();
      }
    }
  };

  previewHandler = state => {
    this.props.previewHandler(state);
  };

  isHex = hex => {
    let regex = /^#[0-9A-F]{6}$/i.test(hex);
    return regex;
  };

  isRGB = rgb => {
    const isRGBColour = /rgb\(([01][0-9]?[0-9]?|2[0-4][0-9]|25[0-5]),[\s]?(\d{1,3}),[\s]?(\d{1,3})\)/;
    if (isRGBColour.test(rgb)) {
      return isRGBColour;
    }
  };

  hexToRgb = (hex, format) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      if (format === true) {
        return `${parseInt(result[1], 16).toString()}, ${parseInt(
          result[2],
          16
        ).toString()}, ${parseInt(result[3], 16).toString()}`;
      } else {
        return [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ];
      }
    }
    return null;
  };

  rgbToHex = rgb => {
    rgb = rgb.match(
      /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    );
    return rgb && rgb.length === 4
      ? '#' +
          ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
          ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
          ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
      : '';
  };

  handleSubmit = () => {
    this.props.handleAddColour();
    this.setState({ value: '', colourToAdd: null });
    this.props.previewHandler();
  };

  handleErrors = () => {
    alert(`That doesn't seem to be a valid colour!`);
  };

  render() {
    return (
      <InputStyles
        type="text"
        maxLength="12"
        placeholder="Enter a hex or RGB code"
        onChange={this.handleChange}
        onKeyUp={this.handleChange}
        value={this.state.value}
        autofocus
      />
    );
  }
}

export default ColourInputBox;
