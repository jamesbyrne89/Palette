import React from 'react';
import styled from 'styled-components';
import PreviewDetails from '../components/PreviewDetails';
import SubmitButton from '../components/SubmitButton';

const PreviewWrapper = styled.div`
  -webkit-transition: opacity 0.25s 0.25s ease-out;
  transition: opacity 0.25s 0.25s ease-out;
  ${props =>
    props.visible
      ? `opacity: 1;

height: auto;`
      : `opacity: 0;
height: 0; overflow: hidden;
`};
`;

const PreviewBlock = styled.div`
  margin-top: 2.5em;
  height: 2em;
  background: ${props => props.background};
`;

const Preview = props => {
  return (
    <PreviewWrapper {...props}>
      <PreviewBlock background={props.hex} />
      <PreviewDetails {...props} />
      <SubmitButton onClick={props.handleAddColour} text="Add" />
    </PreviewWrapper>
  );
};

export default Preview;
