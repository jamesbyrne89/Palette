import React from 'react';
import styled from 'styled-components';

const StyledViewHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const ViewHeader = props => {
  return <StyledViewHeader {...props}>{props.children}</StyledViewHeader>;
};

export default ViewHeader;
