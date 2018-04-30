import React from 'react';
import styled from 'styled-components';

const TitleStyles = styled.h1`
  font-size: 3rem;
  font-family: var(--headerFont);
  font-weight: 300;
  margin-left: 0;
`;

const Title = () => <TitleStyles>Palette</TitleStyles>;

export default Title;
