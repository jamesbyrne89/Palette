import React, { Fragment } from 'react';
import styled from 'styled-components';
import PaletteHeader from './PaletteHeader';
import PaletteColours from './PaletteColours';
import LoadingIcon from '../LoadingIcon';

const StyledPalette = styled.article`
  background: var(--contentBackgroundColour);
  padding: 0.5em 2em 1em;
  min-height: 318px;
`;

const Palette = props => (
  <StyledPalette>
    {props.loading ? (
      <LoadingIcon />
    ) : (
      <Fragment>
        <PaletteHeader {...props} />
        <PaletteColours {...props} />
      </Fragment>
    )}
  </StyledPalette>
);

export default Palette;
