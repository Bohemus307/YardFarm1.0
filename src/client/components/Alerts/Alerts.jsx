import React from 'react';
import propTypes from 'prop-types';
import classes from './Alerts.css';

const Alerts = () => {

  return (
    <div className={classes.Alerts}>
      <div className={classes.Main}>Main</div>
      <div className={classes.Details}>Details</div>
    </div>
  );
};

Alerts.propTypes = {
// name: propTypes.string.isRequired
};

export default Alerts;
