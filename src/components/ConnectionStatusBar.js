import React from 'react';
import styled, { keyframes } from 'styled-components';

const popup = keyframes`
0% {
    transform: translateY(100%);
}
10% {
    transform: translateY(0);
    }
90% {
transform: translateY(0);
}
100% {
    transform: translateY(100%);
}
`;

const ConnectionStatusBarStyles = styled.div`
  --onlineColour: #05c46b;
  --offlineColour: #ff4d4d;
  padding: 0.75em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-out;
  transform: translateY(100%);
  ${props =>
    props.connected ? `background: var(--onlineColour);` : `background: red`};
  ${props => props.show && `animation: ${popup} 4s both;`};
`;

const ConnectionStatusBar = props => {
  return (
    <ConnectionStatusBarStyles {...props}>
      {props.connected ? 'Connected' : 'Offline'}
    </ConnectionStatusBarStyles>
  );
};

export default ConnectionStatusBar;
