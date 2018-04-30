import React, { Component } from 'react';
import '../styles/styles.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Column = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: calc(100vh - 204px);
  grid-area: add-colour-sidebar;
  @media (max-width: 768px) {
    height: auto;
  }
`;
class AddColour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colour: {
        isValid: false,
        hex: null,
        key: null,
        rgb: null
      }
    };

    this.validateColour = this.validateColour.bind(this);
    this.isHex = this.isHex.bind(this);
  }

  isHex(val) {
    let regex = /^#[0-9A-F]{6}$/i.test(val);
    return regex;
  }

  validateColour() {
    const { value } = this.refs.newColourInput;

    this.setState({
      colour: {
        isValid: false,
        hex: null,
        rgb: null
      }
    });

    if (value.split('')[0] === '#') {
      if (value.length >= 7 && !this.isHex(value)) {
        this.refs.newColourInput.classList.add('invalid');
        return false;
      }
      // Is valid hex
      else if (value.length >= 7 && this.isHex(value)) {
        this.refs.newColourInput.classList.add('valid');
        this.setState({
          colour: {
            isValid: true,
            hex: value,
            key: this.props.colours.length,
            rgb: this.hexToRgb(value, 'formatted')
          }
        });
      }
    }
  }

  hexToRgb(hex, format) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      if (format === 'formatted') {
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
  }

  // rgbToHex(r, g, b) {
  //   return   "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  // }

  render() {
    const { addColour } = this.props;
    const { hex, rgb } = this.state.colour;
    return (
      <Column>
        <h2>Add a colour:</h2>
        <input
          className="add-colour-input"
          type="text"
          maxLength="12"
          placeholder="Enter a hex or RGB code"
          ref="newColourInput"
          onChange={this.validateColour}
        />
        <button className="submit-btn" onClick={addColour}>
          Add
        </button>
        <div className={`preview${hex ? ' show' : ' invisible'}`}>
          <div
            className="preview__block"
            style={{ background: hex, height: '40px' }}
          />
          <div className="preview__details">
            <div className="preview__hex">{hex}</div>
            <div className="preview__rgb">{rgb}</div>
          </div>
        </div>
      </Column>
    );
  }
}

AddColour.propTypes = {
  addColour: PropTypes.func.isRequired
};

export default AddColour;
