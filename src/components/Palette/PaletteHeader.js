import React from 'react';
import styled from 'styled-components';
import PaletteActions from './PaletteActions';

const StyledPaletteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 1em 0;
  margin-bottom: 1.5rem;
`;

const PaletteHeader = props => (
  <StyledPaletteHeader>
    {props.palette.name}
    <PaletteActions {...props} />
  </StyledPaletteHeader>
);

export default PaletteHeader;
