import React from 'react';
import '../styles/styles.css';
import Colour from './Colour/Colour';
import styled from 'styled-components';

const ColourStyles = styled.div`
  position: relative;
  text-align: left;
  background: var(--contentBackgroundColour);
`;

const ListOfColours = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 150px));
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5em;
  position: relative;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(120px, 150px));
    grid-column-gap: minmax(1rem, 2rem);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, minmax(120px, 150px));
  }
  @media (max-width: 414px) {
    grid-template-columns: repeat(2, minmax(120px, 150px));
    grid-row-gap: 2em;
    grid-column-gap: 1em;
  }
`;

const ColourList = props => {
  return (
    <ListOfColours>
      {/* {props.handleLoading()} */}
      {props.colours.map((col, i) => (
        <ColourStyles key={i} colour={col}>
          <Colour
            key={i}
            index={i}
            colour={col}
            removeColour={props.removeColour}
          />
        </ColourStyles>
      ))}
      {/* <button className="colour-add">+</button> */}
    </ListOfColours>
  );
};

export default ColourList;
