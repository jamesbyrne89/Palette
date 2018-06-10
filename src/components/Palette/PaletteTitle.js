import React from 'react';
import styled from 'styled-components';

const StyledPaletteTitle = styled.h2`
  font-weight: bold;
`;

const PaletteTitle = props => (
  <StyledPaletteTitle>{props.palette.name}</StyledPaletteTitle>
);

export default PaletteTitle;
