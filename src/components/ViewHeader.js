import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from './Title';
import { AddPaletteButton } from './Buttons/Buttons';
import Portal from './PopupPortal';
import Toaster, { StyledToasterOverlay, StyledToaster } from './Toaster';
import { Fade, OpenToaster } from '../animations/Tweens';
import NewPalette from './Palette/NewPalette';

const StyledViewHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 75%;
  align-items: flex-end;
  padding: 1.75em 0;
`;

const ViewHeader = props => {
  return (
    <StyledViewHeader {...props}>
      <Title title={'Palettes'} />
      <Toaster
        render={(visible, show, hide) =>
          visible ? (
            <Fragment>
              <Portal>
                <StyledToasterOverlay onClick={hide} />

                <OpenToaster initialPose={'hidden'} pose={'visible'}>
                  <StyledToaster>
                    <NewPalette addPalette={props.addPalette} />
                  </StyledToaster>
                </OpenToaster>
              </Portal>
              <AddPaletteButton
                isOpen={visible}
                openToaster={show}
                {...props}
              />
            </Fragment>
          ) : (
            <AddPaletteButton isOpen={visible} openToaster={show} {...props} />
          )
        }
      />
    </StyledViewHeader>
  );
};

export default ViewHeader;
