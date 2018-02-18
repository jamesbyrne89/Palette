import React from 'react';
import '../styles/styles.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Colour = (props) => {

    const { colour, removeColour, index } = props;

    const handleRemoveColour = (index) => {
        removeColour(index)
    }



    return (
        <div className="colour">
            <button className="btn delete-btn" onClick={() => handleRemoveColour(index)} >X</button>
            <div className="colour__swatch" style={{ background: colour.hex }}></div>
            <div className="colour__details">
                <CopyToClipboard text={colour.hex}
                    onCopy={() => console.log('copied')}>
                    <div className="colour__hex" >{colour.hex}
                    <div className="colour__hex--hover" ><span>Copy Hex</span></div>
                    </div>
                </CopyToClipboard>
                <CopyToClipboard text={colour.hex}
                    onCopy={() => console.log('copied')}>
                    <div className="colour__rgb" >{colour.rgb}
                    <div className="colour__rgb--hover" ><span>Copy RGB</span></div>
                    </div>
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default Colour;
