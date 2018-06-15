import React from 'react';
import styled from 'styled-components';

const TitleStyles = styled.h1`
  font-size: 3rem;
  font-family: var(--headerFont);
  font-weight: 300;
  margin: 0;
`;

const Title = props => <TitleStyles>{props.title}</TitleStyles>;

export default Title;
