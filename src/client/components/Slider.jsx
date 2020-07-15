import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
        <span className="range_title">{title}</span>
        <div className="slidecontainer">
          <input
            type="range"
            min={minRange}
            max={maxRange}
            value={rangeValue}
            onChange={handleChange}
            className="slider-1"
            id="myRange"
          />
        </div>
        <span className="slider_value">
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
