import React from 'react';
import PropTypes from 'prop-types';
import classes from './Switch.css'

const Switch = ({
  isOn, handleToggle, image, id,
}) => (
  <div className={classes.Switch_div}>
    <label aria-label="Switch" htmlFor={id} className={classes.Switch}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
      />
      <span className="slider round" />
    </label>
    <img className="fan_icon small_icon" src={image} alt="fan" title="Fans" />
  </div>
);

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Switch;
