/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React from 'react';
import classes from './Navbar.css';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tenperature: 86,
      humidity: 34,
      pressure: 790,
      tvoc: 0,
      co2: 400,
      uv: 1,
      altitude: 2049,
    }

  }
  

  DisplayCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const amPm = date.getHours() >= 12 ? 'PM' : 'AM';
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    // const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const time = `${hours}:${minutes} ${amPm}`;

    return time;
  }

  // DisplayCurrentTime();


  render() {
    console.log(this.state)
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
            {this.state.tenperature}
            °
            F
          </div>
          <div className={classes.Data_text}>
            {this.state.humidity}
            %
          </div>
          <div className={`${classes.Data_text} ${classes.Middleone}`}>
            {this.state.pressure}
          </div>
          <div className={`${classes.Data_text} ${classes.Middleone}`}>
            {this.state.tvoc}
          </div>
          <div className={`${classes.Data_text} ${classes.Lasttwo}`}>
            {this.state.co2}
          </div>
          <div className={`${classes.Data_text} ${classes.Lasttwo}`}>
            {this.state.uv}
          </div>
          <div className={`${classes.Data_text} ${classes.Lasttwo}`}>
            {this.state.altitude}
          </div>
          <div className={`${classes.Data_text} ${classes.Lasttwo}`}>
            {this.DisplayCurrentTime()}
          </div>
        </div>
        <hr />
      </div>
    );
  }
};

// Navbar.propTypes = {
//   intemp: PropTypes.number,
//   outtemp: PropTypes.number,
//   inhum: PropTypes.number,
//   outhum: PropTypes.number,
//   watertemp: PropTypes.number,
//   cels: PropTypes.bool,
//   far: PropTypes.bool,
// };

export default Navbar;
