import React from 'react';
import { Add, Delete } from '../Icons/Icons';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  height: 1.25rem;
  width: auto;
`;

const StyledTextButton = styled.button`
  border: none;
  background: none;
  color: #fff;
  padding: 1em;
  line-height: 0.8;
  font-weight: bold;
  background: var(--contentBackgroundColour);
  cursor: pointer;
`;

export const AddColourButton = props => {
  return (
    <StyledButton onClick={() => props.openToaster(props)}>
      <Add />
    </StyledButton>
  );
};

export const DeletePaletteButton = props => (
  <StyledButton>
    <Delete />
  </StyledButton>
);

export const AddPaletteButton = props => (
  <StyledTextButton onClick={() => props.openToaster(props)}>
    Add Palette
  </StyledTextButton>
);
