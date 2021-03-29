import React, {
  useCallback,
  useState,
  useMemo,
} from 'react';

import propTypes from 'prop-types';
import classes from './AlertSettings.css';
import AlarmSliders from '../AlarmSliders/AlarmSliders.jsx';

const AlertsSettings = ({ alerts, group }) => {
  // parse alert obj to array of alert groups
  const alertKeys = Object.keys(alerts[group]);
  const alertValues = Object.values(alerts[group]);
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
      <div className={classes.SliderRow}>
        <h3>{alert.id}</h3>
        <AlarmSliders alertConfig={alert} group />
      </div>
    </div>
  ));

  return (
    <div className={classes.SettingsWrapper}>
      <h4>Set Alerts Alarms</h4>
      <div>
        <ul style={{ paddingLeft: '5px' }}>
          {alertsSections}
        </ul>
      </div>
    </div>
  );
};

AlertsSettings.propTypes = {
};

AlertsSettings.defaultProps = {
};

export default AlertsSettings;
