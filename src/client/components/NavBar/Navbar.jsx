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
          <img className={classes.Nav_Icon} src="/images/thermometer.png" alt="Temperature" title="Temperature"/>
          <div className={classes.Data_text}>
            {this.state.temperature}°
          </div>
          <div className={classes.Vertical_Line} />
          <img className={classes.Nav_Icon} src="/images/humidity.png" alt="Humidity" title="Humidity"/>
          <div className={classes.Data_text}>
            {this.state.humidity}
            %
          </div>
          <div className={classes.Vertical_Line} />
          <img className={classes.Nav_Icon} src="/images/pressure.png" alt="Pressure" title="Pressure"/>
          <div className={classes.Data_text}>
            {this.state.pressure}
          </div>
          <div className={classes.Vertical_Line} />
          <img className={classes.Nav_Icon} src="/images/tvoc.png" alt="VOC Gases" title="VOC Gases"/>
          <div className={classes.Data_text}>
            {this.state.tvoc}
          </div>
          <div className={classes.Vertical_Line} />
          <img className={classes.Nav_Icon} src="/images/co2.png" alt="CO2" title="CO2"/>
          <div className={`${classes.Data_text} ${classes.Lasttwo}`}>
            {this.state.co2}
          </div>
          <div className={classes.Vertical_Line} />
          <img className={classes.Nav_Icon} src="/images/uv.png" alt="UV index" title="UV index"/>
          <div className={`${classes.Data_text} ${classes.Lasttwo}`}>
            {this.state.uv}
          </div>
          <div className={classes.Vertical_Line} />
          <img className={classes.Nav_Icon} src="/images/altitude.png" alt="Altitude" title="Altitude"/>
          <div className={`${classes.Data_text} ${classes.Lasttwo}`}>
            {this.state.altitude}
          </div>
          <div className={classes.Vertical_Line} />
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
