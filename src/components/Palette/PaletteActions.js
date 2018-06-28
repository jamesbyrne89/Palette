import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  AddColourButton,
  DeletePaletteButton,
  ConfirmButton,
  CancelButton
} from '../Buttons/Buttons';
import Portal from '../PopupPortal';
import Toaster, { StyledToasterOverlay, StyledToaster } from '../Toaster';
import AddColourInput from '../Colour/AddColourInput';
import { Fade, OpenToaster } from '../../animations/Tweens';
import { FlexSpaced } from '../Helpers';

const StyledActions = styled.article`
  display: flex;
  height: 1rem;
  width: 20%;
`;

const StyledModalText = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem auto 1rem;
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
    <Toaster
      render={(visible, show, hide) =>
        visible ? (
          <Fragment>
            <Portal>
              <StyledToasterOverlay onClick={hide} />
              <StyledToaster>
                <StyledModalText>Delete {props.palette.name}?</StyledModalText>
                <FlexSpaced margin={'2.5rem auto 0;'}>
                  <ConfirmButton
                    onClick={() => props.removePalette(props.palette.name)}
                    background={'red'}
                    render={() => 'Confirm'}
                  />
                  <CancelButton
                    background={'var(--contentBackgroundLighter)'}
                    onClick={hide}
                    render={() => 'Cancel'}
                  />
                </FlexSpaced>
              </StyledToaster>
            </Portal>
          </Fragment>
        ) : (
          <DeletePaletteButton
            paletteName={props.palette.name}
            openToaster={show}
            removePalette={props.removePalette}
          />
        )
      }
    />
  </StyledActions>
);

export default PaletteActions;
