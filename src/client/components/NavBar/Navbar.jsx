import React from 'react';
import classes from './Navbar.css';
import PropTypes from 'prop-types';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      temperature: 86,
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

  render() {
    return (
      <div className="navbar">
        <div className={classes.Data_wrapper}>
          <div className={classes.Data_text}>
          <img className={classes.Nav_Icon} src="/images/thermometer.png" alt="Temperature" title="Temperature"/>
            {this.state.temperature}°
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

export default Navbar;
