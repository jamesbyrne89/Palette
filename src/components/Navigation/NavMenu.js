import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNavMenu = styled.nav`
  position: relative;
  width: 100%;
  background: var(--contentBackgroundColour);
  cursor: pointer;
  transition: background 0.1s ease-out;
`;

const StyledNavMenuTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  padding: 0.75em 1em;
  &:hover {
    background: #5f6f8e;
  }
`;

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <StyledNavMenu>
        <StyledNavMenuTitle
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.props.title}
        </StyledNavMenuTitle>
        {this.props.render(this.state)}
      </StyledNavMenu>
    );
  }
}

export default NavMenu;
