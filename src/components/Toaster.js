import { Component } from 'react';
import styled from 'styled-components';

export const StyledToaster = styled.div`
  padding: 1em;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 500px;
  height: 200px;
  background: var(--contentBackgroundColour);
  font-family: var(--bodyFont);
  color: #fff;
  z-index: 2;
`;

export const StyledToasterOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.95;
  background: var(--backgroundColour);
  z-index: 2;
`;

class Toaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    const { render } = this.props;
    return render(visible, this.show, this.hide);
  }
}

export default Toaster;
