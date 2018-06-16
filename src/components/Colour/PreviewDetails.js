import React from 'react';
import styled from 'styled-components';

const PreviewDetailsWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1em 0;
  text-transform: uppercase;
`;

const PreviewDetails = ({ hex, rgb }) => (
  <PreviewDetailsWrapper>
    <div className="preview__hex">{hex}</div>
    <div className="preview__rgb">{rgb}</div>
  </PreviewDetailsWrapper>
);

export default PreviewDetails;
