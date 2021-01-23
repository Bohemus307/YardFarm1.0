import React, { useState, useEffect } from 'react';
import c3 from 'c3';
import propTypes from 'prop-types';

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

  const updateChart = () => {
    const alertsChart = c3.generate({
      bindto: '#alertsChart',
      data,
    });
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the chart
    updateChart();
  });

  return (
    <div>
      <div style={{ height: '400px' }} id="alertsChart" />
    </div>
  );
};

AlertChart.propTypes = {
  // name: propTypes.string.isRequired,
};

export default AlertChart;
