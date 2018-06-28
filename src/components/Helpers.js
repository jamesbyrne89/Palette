import React from 'react';
import styled from 'styled-components';

export const FlexSpread = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexSpaced = styled.div`
  display: flex;
  justify-content: space-around;
  ${props => props.margin && `margin: ${props.margin}`};
`;

export const FlexCentre = styled.div`
  display: flex;
  justify-content: space-between;
`;
