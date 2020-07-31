import React from 'react';
import axios from 'axios';
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
    this.getDataFromSensor = this.getDataFromSensor.bind(this);
  }

  componentDidMount() {
    this.getDataFromSensor('temperature');
    this.getDataFromSensor('humidity');
    this.getDataFromSensor('pressure');
    this.getDataFromSensor('tvoc');
    this.getDataFromSensor('co2');
    this.getDataFromSensor('uv');
    this.getDataFromSensor('altitude');
  }

  getDataFromSensor(type) {
    let id = null
    switch(type) {
      case 'temperature':
        // code block
        id = 1415191;
        break;
      case 'humidity':
        // code block
        id = 1415192;
        break;
      case 'altitude':
        // code block
        id = 1415196;
        break;
      case 'pressure':
        // code block
        id = 1415193;
        break;
      case 'uv':
        // code block
        id = 1415197;
        break;
      case 'co2':
        // code block
        id = 1415204;
          break;
      case 'tvoc':
        // code block
        id = 1415203;
        break;
      default:
        // code block
        id = null;
    }
    // get data from iot sensors
    axios.get('/data/iotdata', {
        params: {
          feed_id: id
        }
    })
      .then((response) => {
        // handle success
        const value = response.data.data.value
        console.log(value)
        this.setState({
          [type]: parseInt(value) || 0,
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  
  
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
    console.log(this.state);
    return (
      <div className={classes.Nav_Bar}>
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
      </div>
    );
  }
};

export default Navbar;
