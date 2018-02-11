import React, { Component } from 'react';
import '../styles/styles.css';

const Colour = (props) => {
    console.log(props)
    const { colour } = props;
    return (
      <div className="colour">
              <div>Colour hex: {colour.hex}</div>
              <div>Colour RGB: {colour.rgb}</div>
      </div>
    );
}

export default Colour;
