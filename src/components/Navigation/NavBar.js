import React, { Component } from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';

const StyledNavBar = styled.nav`
  width: 260px;
  height: 100%;
  position: fixed;
  top: 4px;
  padding: 1em 0;
  background: var(--contentBackgroundColour);
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul {
    margin: 0;
  }
`;

const StyledMenuItems = styled.ul`
  display: block;
  padding: 1em;
  position: absolute;
  top: 3.5em;
`;

const StyledMenuItem = styled.li`
  list-style: none;
  display: block;
  padding: 1em;
`;

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledNavBar>
        <NavMenu title={'Favourites'} render={() => null} />
        <NavMenu
          title={'Palettes'}
          render={({ open }) => (
            <StyledMenuItems>
              {this.props.palettes &&
                open &&
                this.props.palettes.map(palette => (
                  <StyledMenuItem>{palette.name}</StyledMenuItem>
                ))}
            </StyledMenuItems>
          )}
        />
      </StyledNavBar>
    );
  }
}

export default NavBar;
