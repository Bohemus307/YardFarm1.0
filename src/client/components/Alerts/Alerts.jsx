import React from 'react';
import classes from './Alerts.css';

import AlertsMain from '../AlertsMain/AlertsMain.jsx';
import AlertsDetails from '../AlertsDetails/AlertsDetails.jsx';
import NavBar from '../NavBar/Navbar.jsx';

const Alerts = () => (
  <div className={classes.AlertsDiv}>
    <NavBar />
    <div className={classes.Alerts}>
      <div className={classes.Main_Div}>
        <AlertsMain />
      </div>
      <div className={classes.Details}>
        <AlertsDetails />
      </div>
    </div>
  </div>
);

export default Alerts;
