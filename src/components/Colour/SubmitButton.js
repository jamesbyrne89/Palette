import React from 'react';

const SubmitButton = props => {
  return (
    <button className="btn submit-btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default SubmitButton;
