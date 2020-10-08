import React from 'react';

import classes from './Input.css';

const Input = (props) => (
  <div>
    <input
      className={classes.FormInput}
      type={props.inputType}
      id={props.inputId}
      name={props.inputName}
      placeholder={props.placeholder}
    />
  </div>
);

export default Input;
