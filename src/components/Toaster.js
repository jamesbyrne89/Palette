import React, { Component } from 'react';
import styled from 'styled-components';

export const StyledToaster = styled.div`
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 500px;
  height: 200px;
  background: var(--contentBackgroundColour);
`;

export const StyledToasterOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  background: var(--backgroundColour);
`;

class Toaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const { render } = this.props;
    return render(this.state, this.close);
  }
}

export default Toaster;
