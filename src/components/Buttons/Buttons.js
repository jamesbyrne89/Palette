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

export const AddColourButton = props => {
  const onLaunchAddColour = props => {
    console.log(props.isOpen);
  };
  return (
    <StyledButton onClick={() => props.open(props)}>
      <Add />
    </StyledButton>
  );
};

export const DeletePaletteButton = props => {
  return (
    <StyledButton>
      <Delete />
    </StyledButton>
  );
};
