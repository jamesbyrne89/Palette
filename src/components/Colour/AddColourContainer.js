import styled from 'styled-components';

const dropDownAnimation = () =>
  `
          0% {
              max-height: 140px;
          }
          60% {
              max-height: 350px;
          }
          100% {
              max-height: 320px;
          }
      `;

const AddColourContainer = styled.div`
  padding: 1.5em;
  background: var(--contentBackgroundColour);
  width: 300px;
  color: #fff;
  overflow: hidden;
  -webkit-transition: all 0.225s ease-in-out;
  transition: all 0.225s ease-in-out;
  ${props =>
    props.expanded
      ? `max-height: 330px;
animation: ${dropDownAnimation} 0.225s ease-in-out;`
      : `max-height: 140px;`} h2 {
    margin: 0;
    line-height: 1;
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
  @media (max-width: 415px) {
    width: 100%;
  }
`;

export default AddColourContainer;
