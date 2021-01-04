import React from 'react';
import propTypes from 'prop-types';
import classes from './Alerts.css';

import Aux from '../../HOC/Aux/Aux.jsx';
import AlertsMain from '../AlertsMain/AlertsMain.jsx';
import NavBar from '../NavBar/Navbar.jsx';

const Alerts = () => {

  return (
    <div className={classes.AlertsDiv}>
      <NavBar />
      <div className={classes.Alerts}>
        <div className={classes.Main_Div}>
          <AlertsMain />
        </div>
        <div className={classes.Details}>Details</div>
      </div>
    </div>
  );
};

Alerts.propTypes = {
// name: propTypes.string.isRequired
};

export default Alerts;
