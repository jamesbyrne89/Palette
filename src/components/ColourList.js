import React from 'react';
import '../styles/styles.css';
import LoadingIcon from './LoadingIcon';
import Colour from './Colour';

const ColourList = (props) => {
    return (
        <div className="colour-list">
        {props.handleLoading()}
        {props.colours.map((col, i) => <Colour key={i} colour={col} />)}
      </div>
    );
}

export default ColourList;
