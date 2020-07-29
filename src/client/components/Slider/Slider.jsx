import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Slider.css';

const Slider = ({
  minRange,
  maxRange,
  value1,
  title,
  unit,
}) => {
  const [rangeValue, setValue] = useState(value1);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <span className={classes.Range_title}>{title}</span>
        <div className={classes.Slide_Container}>
          <input
            type="range"
            min={minRange}
            max={maxRange}
            value={rangeValue}
            onChange={handleChange}
            className={classes.Slider_1}
            id="myRange"
          />
        </div>
        <span className={classes.Slider_value}>
          {(rangeValue || 50)}
          {unit}
        </span>
      </div>
    </div>
  );
};
Slider.defaultProps = {
  value1: 50,
};

Slider.propTypes = {
  unit: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value1: PropTypes.number,
  minRange: PropTypes.number.isRequired,
  maxRange: PropTypes.number.isRequired,
};

export default Slider;
