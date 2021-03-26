import React, { useState } from 'react';

import AlertChart from '../AlertChart/AlertChart.jsx';
import AlertsSettings from '../AlertSettings/AlertSettings.jsx';
import classes from './AlertsMain.css';

const AlertsMain = () => {
  const [alertsConfig, setAlerts] = useState({
    Nutrients: {
      Ph: {
        UOM: null,
        Max: 8,
        Min: 4,
        'Current Value': 0,
        'In Alarm': false,
      },
      Ec: {
        UOM: 'mS/cm',
        Max: 8,
        Min: 4,
        'Current Value': 0,
        'In Alarm': false,
      },
      Do: {
        UOM: 'mg/L',
        Max: 8,
        Min: 4,
        'Current Value': 0,
        'In Alarm': false,
      },
    },
    Enviromentals: {
      Temperature: {
        'Minimum Temperature': null,
        'Maximum Temperature': null,
        'Current Value': 0,
        'In Alarm': false,
      },
      Humidity: {
        'Minimum Humidity': null,
        'Maximum Humidity': null,
        'Current Value': 0,
        'In Alarm': false,
      },
      'Water Temperature': {
        'Maximum Temperature': null,
        'Minimum Temperature': null,
        'Current Value': 0,
        'In Alarm': false,
      },
      'Flow Rate Delivery': {
        'Minimum Flow-rate': null,
        'Maximum Flow-rate': null,
        'Current Value': 0,
        'In Alarm': false,
      },
      'Flow Rate Return': {
        'Minimum Flow-rate': null,
        'Maximum Flow-rate': null,
        'Current Value': 0,
        'In Alarm': false,
      },
    },
  });

  const [alertGroup, setAlertGroup] = useState('Nutrients');

  const alertKeys = Object.keys(alertsConfig);

  const alertGroupHandler = (e) => {
    const currValue = e.target.value;
    setAlertGroup(currValue);
  };

  const alertsDropDown = (
    <div className={classes.DropDownDiv}>
      <select className={classes.selectcss} name="alertGroups" onChange={alertGroupHandler}>
        {alertKeys.map((alertTitle) => (
          <option key={alertTitle} value={alertTitle}>
            {alertTitle}
          </option>
        ))}
      </select>
    </div>
  );

  const currAlerts = alertsConfig[alertGroup];

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
        <img style={{ width: '15%' }} src="/images/alert.svg" alt="Alert" title="Alert" />
      </div>
      <h3>{alert.id}</h3>
      <div>
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
    <div className={classes.AlertsMain}>
      <div className={classes.AlertsHeader}>
        <h1>Alerts Overview</h1>
        {alertsDropDown}
      </div>
      <h4>Current Alerts</h4>
      <div className={classes.CardList}>
        {alertCards}
      </div>
      <div className={classes.SecondDiv}>
        <div className={classes.GraphDiv}>
          <AlertChart alerts={alertsConfig} group={alertGroup} />
        </div>
        <div className={classes.SettingsDiv}>
          <AlertsSettings alerts={alertsConfig} group={alertGroup} />
        </div>
      </div>
    </div>
  );
};

export default AlertsMain;
