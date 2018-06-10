import React from 'react';
import styled from 'styled-components';
import PaletteHeader from './PaletteHeader';
import PaletteColours from './PaletteColours';
import { Delete } from '../Icons/Icons';

const StyledActions = styled.article`
  display: flex;
  height: 1rem;
  width: 20%;
`;

const PaletteActions = props => (
  <StyledActions>
    <Delete />
    <Delete />
    <Delete />
    <Delete />
  </StyledActions>
);

export default PaletteActions;
