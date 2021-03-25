import React, { useState } from 'react';
import propTypes from 'prop-types';

// import Alarms from '';

const AlertSliders = ({ config }) => {
  // console.log('config in slider', config);
  const sliderList = config.map((alertConfig) => {
    // each config needs to be turned to slider
    
  });
  return (
    <div>
      {sliderList}
    </div>
  );
};

AlertSliders.propTypes = {
};

export default AlertSliders;
