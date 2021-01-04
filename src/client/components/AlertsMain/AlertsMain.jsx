import React, { useState } from 'react';
import propTypes from 'prop-types';

import classes from './AlertsMain.css';

const AlertsMain = () => {
  const [alerts, setAlerts] = useState({
    Nutrients: {
      Ph: {
        UOM: null,
        Max: 8,
        Min: 4,
        'Current Value': 0,
        'In Alarm': false,
        image: '/images/meters.svg',
      },
      Ec: {
        UOM: 'mS/cm',
        Max: 8,
        Min: 4,
        'Current Value': 0,
        'In Alarm': false,
        image: '/images/microchip.svg',
      },
      Do: {
        UOM: 'mg/L',
        Max: 8,
        Min: 4,
        'Current Value': 0,
        'In Alarm': false,
        image: '/images/microchip.svg',
      },
    },
    Enviromentals: {
      Temperature: {
        'Minimum Temperature': null,
        'Maximum Temperature': null,
        'Current Value': 0,
        'In Alarm': false,
        image: '/images/thermometer.png',
      },
      Humidity: {
        'Minimum Humidity': null,
        'Maximum Humidity': null,
        'Current Value': 0,
        image: '/images/humidity.png',
      },
      'Water Temperature': {
        'Maximum Temperature': null,
        'Minimum Temperature': null,
        'Current Value': 0,
        'In Alarm': false,
        image: '/images/watertemperature.svg',
      },
      'Flow Rate Delivery': {
        'Minimum Flow-rate': null,
        'Maximum Flow-rate': null,
        'Current Value': 0,
        'In Alarm': false,
        image: '/images/watering.svg',
      },
      'Flow Rate Return': {
        'Minimum Flow-rate': null,
        'Maximum Flow-rate': null,
        'Current Value': 0,
        'In Alarm': false,
        image: '/images/watering.svg',
      },
    },
  });

  const [alertGroup, setAlertGroup] = useState('Nutrients');

  const alertKeys = Object.keys(alerts);

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
        <img style={{ width: '30%' }} src={alert.config.image} alt="Alerts" title="Alerts" />
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
    <div>
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
          alerts graph
        </div>
        <div className={classes.SettingsDiv}>
          alert settings
        </div>
      </div>
    </div>
  );
};

AlertsMain.propTypes = {
// name: propTypes.string.isRequired,
};

export default AlertsMain;
