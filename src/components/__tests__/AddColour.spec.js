import React from 'react';
import ReactDOM from 'react-dom';
import AddColour from '../AddColour';

it('has the correct initial state', () => {
  console.log(AddColour);
  expect(AddColour.isHex('blah')).toEqual(false);
});
