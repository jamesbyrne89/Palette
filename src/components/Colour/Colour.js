import React from 'react';
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

const Colour = props => {
  const { palette, colour, removeColour, index, hex } = props;

  const handleRemoveColour = (palette, hex) => {
    removeColour(palette, hex);
  };

  return (
    <ColourStyles>
      <DeleteButton onClick={() => handleRemoveColour(palette, colour.hex)}>
        <Delete />
      </DeleteButton>
      <ColourSwatch style={{ background: colour.hex }} />
      <ColourDetails>
        <CopyToClipboard text={colour.hex} onCopy={() => console.log('copied')}>
          <ColourHex>
            {colour.hex}
            <ColourDetailsHoverOverlay>
              <span>Copy Hex</span>
            </ColourDetailsHoverOverlay>
          </ColourHex>
        </CopyToClipboard>
        <CopyToClipboard text={colour.rgb} onCopy={() => console.log('copied')}>
          <ColourRgb>
            {colour.rgb}
            <ColourDetailsHoverOverlay>
              <span>Copy RGB</span>
            </ColourDetailsHoverOverlay>
          </ColourRgb>
        </CopyToClipboard>
      </ColourDetails>
    </ColourStyles>
  );
};

Colour.propTypes = {
  colour: PropTypes.object.isRequired,
  removeColour: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Colour;
