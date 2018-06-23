import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Delete } from '../Icons/Icons';

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  border-radius: 2px;
  background: transparent;
  left: -1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.25rem;
  border: 0;
  opacity: 0;
  font-weight: bold;
  pointer-events: none;
  -webkit-transition: opacity 0.15s;
  -webkit-transition: opacity 0.15s;
  transition: opacity 0.15s;
  cursor: pointer;
`;

const ColourStyles = styled.div`
  position: relative;
  text-align: left;
  background: var(--contentBackgroundColour);
  &:hover ${DeleteButton} {
    opacity: 1;
    pointer-events: auto;
  }
`;

const ColourSwatch = styled.div`
  height: 140px;
  background: ${props => {
    return props.hex;
  }};
`;

const ColourDetails = styled.div`
  padding: 0.25em 0;
  text-transform: uppercase;
  position: relative;
`;

const ColourDetailsHoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  overflow: hidden;
  padding: 0.55em 0.5em 0.45em;
  color: var(--contentBackgroundColour);
  background: #fff;
  -webkit-transition: opacity 0.15s;
  transition: opacity 0.15s;
  font-weight: 700;
`;

const ColourHex = styled.div`
  padding: 0.55em 0.5em 0.45em;
  position: relative;
  background: var(--contentBackgroundColour);
  cursor: pointer;
  overflow: hidden;
  &:hover ${ColourDetailsHoverOverlay} {
    opacity: 1;
  }
`;
const ColourRgb = styled.div`
  padding: 0.55em 0.5em 0.45em;
  position: relative;
  background: var(--contentBackgroundColour);
  cursor: pointer;
  overflow: hidden;
  &:hover ${ColourDetailsHoverOverlay} {
    opacity: 1;
  }
`;

class Colour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copiedHex: false,
      copiedRGB: false
    };
  }

  handleRemoveColour = (palette, hex) => {
    this.props.removeColour(palette, hex);
  };

  render() {
    const { palette, colour } = this.props;
    return (
      <ColourStyles>
        <DeleteButton
          onClick={() => this.handleRemoveColour(palette, colour.hex)}
        >
          <Delete />
        </DeleteButton>
        <ColourSwatch style={{ background: colour.hex }} />
        <ColourDetails>
          <CopyToClipboard
            text={colour.hex}
            onCopy={() =>
              this.setState({ copiedHex: true, copiedRGB: false }, () => {
                setTimeout(() => {
                  this.setState({ copiedHex: false });
                }, 2000);
              })
            }
          >
            <ColourHex>
              {colour.hex}
              <ColourDetailsHoverOverlay>
                <span>{this.state.copiedHex ? 'Copied!' : 'Copy Hex'}</span>
              </ColourDetailsHoverOverlay>
            </ColourHex>
          </CopyToClipboard>
          <CopyToClipboard
            text={colour.rgb}
            onCopy={() =>
              this.setState({ copiedRGB: true, copiedHex: false }, () => {
                setTimeout(() => {
                  this.setState({ copiedRGB: false });
                }, 2000);
              })
            }
          >
            <ColourRgb>
              {colour.rgb}
              <ColourDetailsHoverOverlay>
                <span>{this.state.copiedRGB ? 'Copied!' : 'Copy RGB'}</span>
              </ColourDetailsHoverOverlay>
            </ColourRgb>
          </CopyToClipboard>
        </ColourDetails>
      </ColourStyles>
    );
  }
}

Colour.propTypes = {
  colour: PropTypes.object.isRequired,
  removeColour: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Colour;
