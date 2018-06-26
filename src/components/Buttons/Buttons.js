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
  ${props =>
    props.background
      ? `background: ${props.background};`
      : `background: var(--contentBackgroundColour);`} color: #fff;
  padding: 1em;
  border-radius: 3px;
  line-height: 0.8;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.15s ease-out;
  &:hover {
    transform: translateY(-1px);
  }
`;

export const AddColourButton = props => {
  return (
    <StyledButton onClick={() => props.openToaster(props)}>
      <Add />
    </StyledButton>
  );
};

export const DeletePaletteButton = props => (
  <StyledButton onClick={() => props.openToaster(props)}>
    <Delete />
  </StyledButton>
);

export const ConfirmButton = props => (
  <StyledTextButton {...props}>{props.render()}</StyledTextButton>
);

export const CancelButton = props => (
  <StyledTextButton {...props}>{props.render()}</StyledTextButton>
);

export const AddPaletteButton = props => (
  <StyledTextButton onClick={() => props.openToaster(props)}>
    Add Palette
  </StyledTextButton>
);
