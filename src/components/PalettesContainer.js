import React, { Component } from 'react';
import styled from 'styled-components';
import Palette from './Palette/Palette';
import withLoader from './LoadingIcon';

const StyledPalettesContainer = styled.section`
  display: grid;
  grid-gap: 1.25rem;
  width: 75%;
`;

class PalettesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      palettes,
      favourites,
      loading,
      addColour,
      removeColour,
      removePalette,
      addToFavourites,
      removeFromFavourites
    } = this.props;
    return (
      <StyledPalettesContainer>
        {palettes.map((palette, i) => (
          <Palette
            palette={palette}
            favourites={favourites}
            addColour={addColour}
            removeColour={removeColour}
            removePalette={removePalette}
            loading={loading}
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
            key={i}
          />
        ))}
      </StyledPalettesContainer>
    );
  }
}

export default PalettesContainer;
