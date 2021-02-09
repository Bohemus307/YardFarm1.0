import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import c3 from 'c3';

import classes from './AlertChart.css';

const AlertChart = ({ alerts }) => {
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
  alerts: propTypes.shape({
    Nutrients: propTypes.shape({
      Ph: propTypes.shape({
        UOM: propTypes.string || null,
        Max: propTypes.number,
        Min: propTypes.number,
        'Current Value': propTypes.number,
        'In Alarm': propTypes.bool,
      }),
      Ec: propTypes.shape({
        UOM: propTypes.string || null,
        Max: propTypes.number,
        Min: propTypes.number,
        'Current Value': propTypes.number,
        'In Alarm': propTypes.bool,
      }),
      Do: propTypes.shape({
        UOM: propTypes.string || null,
        Max: propTypes.number,
        Min: propTypes.number,
        'Current Value': propTypes.number,
        'In Alarm': propTypes.bool,
      }),
    }),
    Enviromentals: propTypes.shape({
      Temperature: propTypes.shape({
        'Minimum Temperature': propTypes.number || null,
        'Maximum Temperature': propTypes.number || null,
        'Current Value': propTypes.number,
        'In Alarm': propTypes.bool,
      }),
      Humidity: propTypes.shape({
        'Minimum Humidity': propTypes.number || null,
        'Maximum Humidity': propTypes.number || null,
        'Current Value': propTypes.number,
        'In Alarm': propTypes.bool,
      }),
      'Water Temperature': propTypes.shape({
        'Minimum Temperature': propTypes.number || null,
        'Maximum Temperature': propTypes.number || null,
        'Current Value': propTypes.number,
        'In Alarm': propTypes.bool,
      }),
      'Flow Delivery Rate': propTypes.shape({
        'Minimum Flow-rate': propTypes.number || null,
        'Maximum Flow-rate': propTypes.number || null,
        'Current Value': propTypes.number,
        'In Alarm': propTypes.bool,
      }),
      'Flow Rate Return': propTypes.shape({
        'Minimum Flow-rate': propTypes.number || null,
        'Maximum Flow-rate': propTypes.number || null,
        'Current Value': propTypes.number,
        'In Alarm': propTypes.bool,
      }),
    }),
  }).isRequired,
};

export default AlertChart;
