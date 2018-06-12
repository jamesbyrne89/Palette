import React from 'react';
import styled from 'styled-components';
import PaletteColours from './PaletteColours';
import { Add } from '../Icons/Icons';
import { AddColourButton, DeletePaletteButton } from '../Buttons/Buttons';
import Portal from '../PopupPortal';
import Toaster, { StyledToasterOverlay, StyledToaster } from '../Toaster';
import AddColourInput from '../AddColourInput';

const StyledActions = styled.article`
  display: flex;
  height: 1rem;
  width: 20%;
`;

const PaletteActions = props => (
  <StyledActions>
    <Toaster
      render={({ open }, doOpen, close) =>
        open ? (
          <Portal>
            <StyledToasterOverlay onClick={close} />
            <StyledToaster>
              <AddColourInput />
            </StyledToaster>
          </Portal>
        ) : (
          <AddColourButton isOpen={open} open={doOpen} {...props} />
        )
      }
    />

    <DeletePaletteButton />
  </StyledActions>
);

export default PaletteActions;
