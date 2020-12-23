import React, { useState } from 'react';
import propTypes from 'prop-types';

const AlertsMain = () => {
  const [alerts, setAlerts] = useState({
    currentAlerts: {
      Ph: {
        max: 8,
        min: 4,
        currentValue: 0,
      },
    },
  });
  return (
    <div>hello</div>
  );
};

AlertsMain.propTypes = {
// name: propTypes.string.isRequired,
};

export default AlertsMain;
