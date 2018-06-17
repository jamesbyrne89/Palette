import React from 'react';
import PaletteNameInput from './PaletteNameInput';

const NewPalette = props => {
  return (
    <div>
      <h2>New Palette:</h2>
      <PaletteNameInput {...props} />
    </div>
  );
};

export default NewPalette;
