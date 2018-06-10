import React from 'react';
import styled from 'styled-components';
import PaletteHeader from './PaletteHeader';
import PaletteColours from './PaletteColours';

const StyledPalette = styled.article`
  background: var(--contentBackgroundColour);
  padding: 0.5em 2em 1em;
`;

const Palette = props => (
  <StyledPalette>
    <PaletteHeader {...props} />
    <PaletteColours {...props} />
  </StyledPalette>
);

export default Palette;
