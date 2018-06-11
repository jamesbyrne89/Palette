import React from 'react';
import { Add } from '../Icons/Icons';

export const AddColourButton = () => {
  const onLaunchAddColour = () => {};
  return (
    <button onClick={onLaunchAddColour}>
      <Add />
    </button>
  );
};
