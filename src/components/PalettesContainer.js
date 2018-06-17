import React, { Component } from 'react';
import styled from 'styled-components';
import Palette from './Palette/Palette';

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
    const { palettes } = this.props;
    return (
      <StyledPalettesContainer>
        {palettes.map((palette, i) => (
          <Palette
            palette={palette}
            addColour={this.props.addColour}
            removeColour={this.props.removeColour}
            key={i}
          />
        ))}
      </StyledPalettesContainer>
    );
  }
}

export default PalettesContainer;
