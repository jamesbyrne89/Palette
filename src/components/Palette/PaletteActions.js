import React from 'react';
import styled from 'styled-components';
import PaletteColours from './PaletteColours';
import { Add, Delete } from '../Icons/Icons';

const StyledActions = styled.article`
  display: flex;
  height: 1rem;
  width: 20%;
`;

const PaletteActions = props => (
  <StyledActions>
    <Add />
    <Delete />
  </StyledActions>
);

export default PaletteActions;
