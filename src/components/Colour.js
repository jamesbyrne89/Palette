import React from 'react';
import '../styles/styles.css';

const Colour = (props) => {
    const { colour } = props;
    return (
        <div className="colour">
            <div className="colour__swatch" style={{background: colour.hex}}></div>
            <div className="colour__details">
                <div className="colour__hex">{colour.hex}</div>
                <div className="colour__rgb">{colour.rgb}</div>
            </div>
        </div>
    );
}

export default Colour;
