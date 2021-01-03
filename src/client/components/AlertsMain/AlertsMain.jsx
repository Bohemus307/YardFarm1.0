import React, { useState } from 'react';
import propTypes from 'prop-types';

const AlertsMain = () => {
  const [alerts, setAlerts] = useState({

    Nutrients: {
      Ph: {
        max: 8,
        min: 4,
        currentValue: 0,
      },
      Ec: {
        max: 8,
        min: 4,
        currentValue: 0,
      },
      Do: {
        max: 8,
        min: 4,
        currentValue: 0,
      },
      Orp: {
        max: 8,
        min: 4,
        currentValue: 0,
      },
    },
    Enviromentals: {
      temperature: {
        minTemp: null,
        maxTemp: null,
      },
      humidity: {
        minHumidity: null,
        maxHumidity: null,
      },
      waterTemp: {
        maxTemp: null,
        minTemp: null,
      },
      flowRateDeliver: {
        minFLow: null,
        maxFlow: null,
      },
      flowRateReturn: {
        minFLow: null,
        maxFlow: null,
      },
    },
  });

  const alertKeys = Object.keys(alerts);
  const alertValues = Object.values(alerts);

  const alertCards = (
    <div>
      <select>
        {alertKeys.map((alertGroup) => (
          <option value={alertGroup}>
            {alertGroup}
          </option>
        ))}
      </select>
    </div>
  );

  console.log(alertKeys);
  return (
    <div>
      <div>
        <h1>Alerts Overview</h1>
        {alertCards}
      </div>
    </div>
  );
};

AlertsMain.propTypes = {
// name: propTypes.string.isRequired,
};

export default AlertsMain;
