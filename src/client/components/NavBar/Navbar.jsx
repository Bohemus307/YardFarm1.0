/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React from 'react';
import classes from './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = ({
  intemp, outtemp, inhum, outhum, watertemp, cels, far,
}) => {
  const scale = 'F';

  function DisplayCurrentTime() {
    const date = new Date();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const amPm = date.getHours() >= 12 ? 'PM' : 'AM';
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    // const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const time = `${hours}:${minutes} ${amPm}`;

    return time;
  }
  DisplayCurrentTime();

  return (
    <div className="navbar">
      <div className={classes.Header_text}>
        <div className={classes.Header_item}>
          Current Indoor Temperature / Humidity
        </div>
        <div className={classes.Header_item}>
          Current Outdoor Temperature / Humidity
        </div>
        <div className={classes.Header_item}>
          Current Water Temperature
        </div>
        <div className={classes.Header_item}>
          Current Time
        </div>
      </div>
      <div className={classes.Data_wrapper}>
        <div className={classes.Data_text}>
          {intemp}
          °
          {scale}
        </div>
        <div className={classes.Data_text}>
          {inhum}
          %
        </div>
        <div className={`${classes.Data_text} ${classes.Middleone}`}>
          {outtemp}
          °
          {scale}
        </div>
        <div className={`${classes.Data_text} ${classes.Middleone}`}>
          {outhum}
          %
        </div>
        <div className={`${classes.Data_text} ${classes.Lasttwo}`}>
          {watertemp}
          °
          {scale}
        </div>
        <div className={`${classes.Data_text} ${classes.Lasttwo}`}>
          {DisplayCurrentTime()}
        </div>
      </div>
      <hr />
    </div>
  );
};

Navbar.propTypes = {
  intemp: PropTypes.number,
  outtemp: PropTypes.number,
  inhum: PropTypes.number,
  outhum: PropTypes.number,
  watertemp: PropTypes.number,
  cels: PropTypes.bool,
  far: PropTypes.bool,
};

export default Navbar;
