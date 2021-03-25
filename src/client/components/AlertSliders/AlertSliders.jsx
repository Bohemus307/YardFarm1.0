import React, { useState } from 'react';
import propTypes from 'prop-types';

import classes from './AlertSliders.css';
import AlarmSliders from '../AlarmSliders/AlarmSliders.jsx';

const AlertSlidersList = ({ alertsArray }) => {
  const alertsSliders = alertsArray.map((alert) => (
    <div key={alert.id}>
      <AlarmSliders alertConfig={alert} />
    </div>
  ));

  return (
    <div>
      {alertsSliders}
    </div>
  );
};

AlertSlidersList.propTypes = {
};

export default AlertSlidersList;
