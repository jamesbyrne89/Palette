import React from 'react';
import styled from 'styled-components';
import ColourList from '../Palette/ColourList';

const StyledPaletteColours = styled.div``;

const PaletteColours = props => (
  <StyledPaletteColours>
    <ColourList {...props} />
  </StyledPaletteColours>
);

export default PaletteColours;
