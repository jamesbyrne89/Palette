import React from 'react';
import styled from 'styled-components';
import Colour from '../Colour/Colour';
import ColourList from '../ColourList';

const StyledPaletteColours = styled.div``;

const PaletteColours = props => (
  <StyledPaletteColours>
    <ColourList
      removeColour={props.removeColour}
      palette={props.palette.name}
      colours={props.palette.colours}
    />
    {/* {props.palette.colours &&
      props.palette.colours.map((colour, i) => <Colour colour={colour} />)} */}
  </StyledPaletteColours>
);

export default PaletteColours;
