import React from 'react';
import styled from 'styled-components';
import ColourList from '../Palette/ColourList';

const StyledPaletteColours = styled.div``;

const PaletteColours = props => (
  <StyledPaletteColours>
    <ColourList
      removeColour={props.removeColour}
      palette={props.palette.name}
      colours={props.palette.colours}
      showAll={props.showAll}
    />
  </StyledPaletteColours>
);

export default PaletteColours;
