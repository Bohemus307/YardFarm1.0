import React from 'react';
import c3 from 'c3';
import propTypes from 'prop-types';

const AlertChart = () => {
  const alertsChart = c3.generate({
    bindto: '#alertsChart',
    data: {
      columns: [
        ['data1', 300, 350, 300, 0, 0, 120],
        ['data2', 130, 100, 140, 200, 150, 50],
      ],
      types: {
        data1: 'area-spline',
        data2: 'area-spline',
        // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
      },
      groups: [['data1', 'data2']],
    },
  });

  return (
    <div style={{ height: '200px' }} id="alertsChart" />
  );
};

AlertChart.propTypes = {
  // name: propTypes.string.isRequired,
};

export default AlertChart;
