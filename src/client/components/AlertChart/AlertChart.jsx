import React, { useState, useEffect } from 'react';
import c3 from 'c3';

import classes from './AlertChart.css';

const AlertChart = () => {
  const [data, setData] = useState({
    columns: [
      ['In Alarm', 300, 350, 300, 0, 0, 120],
      ['Out Of Alarm', 130, 100, 140, 200, 150, 50],
    ],
    types: {
      'In Alarm': 'area-spline',
      'Out Of Alarm': 'area-spline',
      // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
    },
    groups: [['In Alarm', 'Out Of Alarm']],
  });

  const [alerts, setAlerts] = useState({
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

  const alertKeys = Object.keys(alerts);

  const alertGroupHandler = (e) => {
    const currValue = e.target.value;
    setAlertGroup(currValue);
    if (currValue === 'Enviromentals') {
      setData({
        columns: [
          ['In Alarm', 100, 150, 250, 0, 0, 220],
          ['Out Of Alarm', 180, 50, 110, 260, 180, 60],
        ],
        types: {
          'In Alarm': 'area-spline',
          'Out Of Alarm': 'area-spline',
          // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
        },
        groups: [['In Alarm', 'Out Of Alarm']],
      });
    } else {
      setData({
        columns: [
          ['In Alarm', 300, 350, 300, 0, 0, 120],
          ['Out Of Alarm', 130, 100, 140, 200, 150, 50],
        ],
        types: {
          'In Alarm': 'area-spline',
          'Out Of Alarm': 'area-spline',
          // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
        },
        groups: [['In Alarm', 'Out Of Alarm']],
      });
    }
  };

  const updateChart = () => {
    const alertsChart = c3.generate({
      bindto: '#alertsChart',
      data,
    });

    return alertsChart;
  };

  useEffect(() => {
    // Update the chart
    updateChart();
  });

  return (
    <div>
      <div className={classes.DropDownDiv}>
        <select className={classes.selectcss} name="alertGroups" onChange={alertGroupHandler}>
          {alertKeys.map((alertTitle) => (
            <option key={alertTitle} value={alertTitle}>
              {alertTitle}
            </option>
          ))}
        </select>
      </div>
      <div style={{ height: '400px' }} id="alertsChart" />
    </div>
  );
};

AlertChart.propTypes = {
  // name: propTypes.string.isRequired,
};

export default AlertChart;
