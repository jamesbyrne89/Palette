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

    this.isHex = this.isHex.bind(this);
  }

  isHex(val) {
    return /^#[0-9A-F]{6}$/i.test(val);
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

  render() {
    const { addColour } = this.props;
    const { hex, rgb } = this.state.colour;
    return (
      <Column>
        <h2>Add a colour:</h2>
      </Column>
    );
  }
}

AddColour.propTypes = {
  addColour: PropTypes.func.isRequired
};

export default AddColour;
