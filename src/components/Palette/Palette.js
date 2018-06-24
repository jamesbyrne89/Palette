import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import PaletteHeader from './PaletteHeader';
import PaletteColours from './PaletteColours';
import LoadingIcon from '../LoadingIcon';

const StyledPalette = styled.article`
  background: var(--contentBackgroundColour);
  padding: 0.5em 2em 1em;
  min-height: 318px;
`;

const StyledShowMoreColours = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  user-select: none;
  font-size: 0.75rem;
  div {
    cursor: pointer;
  }
  div:hover {
    text-decoration: underline;
  }
`;

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
  }

  render() {
    const { loading, palette } = this.props;
    return (
      <StyledPalette>
        {loading ? (
          <LoadingIcon />
        ) : (
          <Fragment>
            <PaletteHeader {...this.props} />
            <PaletteColours
              showAll={this.state.showAll}
              {...this.props}
              colours={this.props.palette.colours}
            />
            {palette.colours &&
              palette.colours.length > 4 && (
                <StyledShowMoreColours>
                  <div onClick={() => this.setState({ showAll: true })}>
                    Show all {palette.colours.length} colours
                  </div>
                </StyledShowMoreColours>
              )}
          </Fragment>
        )}
      </StyledPalette>
    );
  }
}

export default Palette;
