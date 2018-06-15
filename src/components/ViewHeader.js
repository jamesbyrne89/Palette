import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from './Title';
import { AddPaletteButton } from './Buttons/Buttons';
import Portal from './PopupPortal';
import Toaster, { StyledToasterOverlay, StyledToaster } from './Toaster';
import AddColourInput from './AddColourInput';

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
        render={({ open }, doOpen, close) =>
          open ? (
            <Fragment>
              <Portal>
                <StyledToasterOverlay onClick={close} />
                <StyledToaster>
                  <AddColourInput {...props} />
                </StyledToaster>
              </Portal>
              <AddPaletteButton isOpen={open} openToaster={doOpen} {...props} />
            </Fragment>
          ) : (
            <AddPaletteButton isOpen={open} openToaster={doOpen} {...props} />
          )
        }
      />
    </StyledViewHeader>
  );
};

export default ViewHeader;
