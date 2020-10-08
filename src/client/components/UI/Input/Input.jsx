import React from 'react';

import classes from './Input.css';

const Input = (props) => (
  <div className={classes.InputDiv}>
    <input
      className={props.className}
      type={props.inputType}
      id={props.inputId}
      name={props.inputName}
      placeholder={props.placeholder}
      defaultValue={props.value}
    />
  </div>
);

export default Input;
