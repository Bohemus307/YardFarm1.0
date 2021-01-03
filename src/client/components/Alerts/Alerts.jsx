import React from 'react';
import propTypes from 'prop-types';
import classes from './Alerts.css';

import AlertsMain from '../AlertsMain/AlertsMain.jsx';

const Alerts = () => {

  return (
    <div className={classes.Alerts}>
      <div className={classes.Main}>
        <AlertsMain />
      </div>
      <div className={classes.Details}>Details</div>
    </div>
  );
};

Alerts.propTypes = {
// name: propTypes.string.isRequired
};

export default Alerts;
