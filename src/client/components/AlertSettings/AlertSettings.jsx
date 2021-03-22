import React, {
  useCallback,
  useState,
  useMemo,
} from 'react';

import propTypes from 'prop-types';
// import classes from './Alerts.css';

const AlertsSettings = ({ alerts }) => {
  // parse alert obj to array of alert groups
  const alertKeys = Object.keys(alerts);
  const alertValues = Object.values(alerts);
  // array of objects from alerts
  const alertsGroupArray = alertKeys.reduce((arr, key, idx) => {
    const object = {
      id: key,
      config: alertValues[idx],
    };
    arr.push(object);
    return arr;
  }, []);
  console.log(alertsGroupArray);
  return (
    <div>
      <ul>
        <li>alerts sliders</li>
      </ul>
    </div>
  );
};

AlertsSettings.propTypes = {
};

AlertsSettings.defaultProps = {
};

export default AlertsSettings;
