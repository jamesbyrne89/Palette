import React from 'react';
import '../styles/styles.css';
import Colour from './Colour';

const ColourList = (props) => {
    return (
        <div className="colour-list">
        {props.colours.map((col, i) => <Colour key={i} colour={col} />)}
      </div>
    );
}

export default ColourList;
