import React, { useState } from 'react';
import propTypes from 'prop-types';

import classes from './AlertsMain.css';

const AlertsMain = () => {
  const [alerts, setAlerts] = useState({
    nutrients: {
      Ph: {
        max: 8,
        min: 4,
        value: 0,
      },
      Ec: {
        max: 8,
        min: 4,
        value: 0,
      },
      Do: {
        max: 8,
        min: 4,
        value: 0,
      },
      Orp: {
        max: 8,
        min: 4,
        value: 0,
      },
    },
    enviromentals: {
      temperature: {
        minTemp: null,
        maxTemp: null,
        value: 0,
      },
      humidity: {
        minHumidity: null,
        maxHumidity: null,
        value: 0,
      },
      waterTemp: {
        maxTemp: null,
        minTemp: null,
        value: 0,
      },
      flowRateDeliver: {
        minFLow: null,
        maxFlow: null,
        value: 0,
      },
      flowRateReturn: {
        minFLow: null,
        maxFlow: null,
        value: 0,
      },
    },
  });

  const [alertGroup, setAlertGroup] = useState('nutrients');

  const alertKeys = Object.keys(alerts);

  const alertGroupHandler = (e) => {
    const currValue = e.target.value;
    setAlertGroup(currValue);
  };

  const alertsDropDown = (
    <div>
      <select name="alertGroups" onChange={alertGroupHandler}>
        {alertKeys.map((alertTitle) => (
          <option key={alertTitle} value={alertTitle}>
            {alertTitle}
          </option>
        ))}
      </select>
    </div>
  );

  const currAlerts = alerts[alertGroup];

  const keys = Object.keys(currAlerts);
  const values = Object.values(currAlerts);

  // array of objects from alerts
  const alertsArray = keys.reduce((arr, key, idx) => {
    const object = {
      id: key,
      config: values[idx],
    };
    arr.push(object);
    return arr;
  }, []);

  const alertCards = alertsArray.map((alert) => (
    <div key={alert.id} className={classes.AlertCard}>
      <div>
        alert image
      </div>
      <span>{alert.id}</span>
      <div>
        <h4>Current Alerts </h4>
        <span>
          {Object.keys(alert.config).map((title) => (
            <div key={title}>
              <span>
                {title}
                :
              </span>
              <span>{alert.config[title]}</span>
            </div>
          ))}
        </span>
      </div>
    </div>
  ));

  return (
    <div>
      <div className={classes.AlertsHeader}>
        <h1>Alerts Overview</h1>
        {alertsDropDown}
      </div>
      <div className={classes.CardList}>
        {alertCards}
      </div>
    </div>
  );
};

AlertsMain.propTypes = {
// name: propTypes.string.isRequired,
};

export default AlertsMain;
