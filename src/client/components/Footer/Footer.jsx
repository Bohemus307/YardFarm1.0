import React from 'react';
import classes from './Footer.css';

// import LineChart from './LineChart.jsx';
import Slider from '../UI/Slider/Slider.jsx';

const Footer = () => (
  <div className={classes.Footer_div}>
    <div className={classes.Alerts_div}>
      <span className={classes.alerts_header}>Alerts Center</span>
      <Slider minRange={1} maxRange={100} value1={50} title="Set Temperature Alert" unit="°" />
      <Slider minRange={1} maxRange={10} value1={5} title="Set PH Alert" unit="" />
      <Slider minRange={1} maxRange={100} value1={50} title="Set Humidity Alert" unit="%" />
    </div>
  </div>
);

export default Footer;
