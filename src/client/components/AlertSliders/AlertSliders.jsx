import React, { useState } from 'react';
import propTypes from 'prop-types';

import classes from './AlertSliders.css';
import RangeSlider from '../Slider/Slider.jsx';

const AlertSliders = ({ config }) => {
  console.log('config in slider', config);
  const sliderList = config.map((alertConfig) => (
    <RangeSlider
      classes={classes.Slider}
      type={alertConfig.id}
      key={alertConfig.id}
      UOM={alertConfig.config.UOM || null}
      // {...slideProps}
      // disabled={slider.locked}
    />
  ));
  return (
    <div>
      {sliderList}
    </div>
  );
};

AlertSliders.propTypes = {
};

export default AlertSliders;
