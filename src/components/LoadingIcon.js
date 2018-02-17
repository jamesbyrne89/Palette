import React from 'react';
import '../styles/styles.css';

const LoadingIcon = (props) => {

    return (
        <div className="loader">
            <div className="loader__dot"></div>
            <div className="loader__dot"></div>
            <div className="loader__dot"></div>
        </div>
    );
}

export default LoadingIcon;
