/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React from 'react';
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
      <div className="header_text">
        <div className="header_item">
          Current Indoor Temperature / Humidity
        </div>
        <div className="header_item">
          Current Outdoor Temperature / Humidity
        </div>
        <div className="header_item">
          Current Water Temperature
        </div>
        <div className="header_item">
          Current Time
        </div>
      </div>
      <div className="data_wrapper">
        <div className="data_text">
          {intemp}
          °
          {scale}
        </div>
        <div className="data_text">
          {inhum}
          %
        </div>
        <div className="data_text middleone">
          {outtemp}
          °
          {scale}
        </div>
        <div className="data_text middleone">
          {outhum}
          %
        </div>
        <div className="data_text lasttwo">
          {watertemp}
          °
          {scale}
        </div>
        <div className="data_text lasttwo">
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
