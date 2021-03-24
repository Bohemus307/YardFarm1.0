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

  const alertsSections = alertsGroupArray.map((alert) => (
    <div key={alert.id}>
      <div>
        <img style={{ width: '10%' }} src="/images/alert.svg" alt="Alert" title="Alert" />
      </div>
      <h3>{alert.id}</h3>
      <div>
        slider
      </div>
    </div>
  ));

  console.log(alertsGroupArray);
  return (
    <div>
      <ul>
        {alertsSections}
      </ul>
    </div>
  );
};

AlertsSettings.propTypes = {
};

AlertsSettings.defaultProps = {
};

export default AlertsSettings;
