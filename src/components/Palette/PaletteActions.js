import React, { Fragment } from 'react';
import styled from 'styled-components';
import { AddColourButton, DeletePaletteButton } from '../Buttons/Buttons';
import Portal from '../PopupPortal';
import Toaster, { StyledToasterOverlay, StyledToaster } from '../Toaster';
import AddColourInput from '../Colour/AddColourInput';
import { Fade, OpenToaster } from '../../animations/Tweens';

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
              <StyledToasterOverlay onClick={hide} />

              <OpenToaster initialPose={'hidden'} pose={'visible'}>
                <StyledToaster>
                  <AddColourInput {...props} />
                </StyledToaster>
              </OpenToaster>
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
