import React from 'react';
import '../styles/styles.css';
import Colour from './Colour';

const ColourList = (props) => {

    return (
        <div className="colour-list">
        {props.handleLoading()}
        {props.colours.map((col, i) => <Colour key={i} index={i} colour={col} removeColour={props.removeColour} />)}
        {/* <button className="colour-add">+</button> */}
      </div>
    );
}

export default ColourList;
