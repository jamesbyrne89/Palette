import React, { Fragment } from 'react';
import styled from 'styled-components';
import PaletteColours from './PaletteColours';
import { Add } from '../Icons/Icons';
import { AddColourButton, DeletePaletteButton } from '../Buttons/Buttons';
import Portal from '../PopupPortal';
import Toaster, { StyledToasterOverlay, StyledToaster } from '../Toaster';
import AddColourInput from '../AddColourInput';
import Rodal from 'rodal';

const StyledActions = styled.article`
  display: flex;
  height: 1rem;
  width: 20%;
`;

const PaletteActions = props => (
  <StyledActions>
    <Toaster
      render={(visible, show, hide) =>
        visible ? (
          <Fragment>
            <Portal>
              <Rodal visible={visible} onClose={hide} enterAnimation={'zoom'}>
                <StyledToaster>
                  <AddColourInput {...props} />
                </StyledToaster>
              </Rodal>
            </Portal>
            <AddColourButton isOpen={visible} openToaster={show} {...props} />
          </Fragment>
        ) : (
          <AddColourButton isOpen={visible} openToaster={show} {...props} />
        )
      }
    />

    <DeletePaletteButton />
  </StyledActions>
);

export default PaletteActions;
