import React from 'react';
import '../styles/styles.css';
import styled from 'styled-components';

const HeaderStyles  = styled.header `
border-top: solid 4px #fff;
width: 100%;
background: var(--contentBackgroundColour);
`

const Header = (props) => {
  
    return (
        <HeaderStyles className="header">
            {/* <button className="login-btn btn"></button> */}
        </HeaderStyles>
    );
}

export default Header;
