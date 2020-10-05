import React from 'react';

import classes from './Logo.css';

const Logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src="/images/greenhouse3.png" alt="company logo here" />
  </div>
);

export default Logo;
