/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
// import LineChart from './LineChart.jsx';
import Slider from './Slider.jsx';

const Footer = () => (
  <div className="footer-div">
    <div className="alerts_div">
      <span className="alerts_header">Alerts Center</span>
      <Slider minRange={1} maxRange={100} value1={50} title="Set Temperature Alert" unit="°" />
      <Slider minRange={1} maxRange={10} value1={5} title="Set PH Alert" unit="" />
      <Slider minRange={1} maxRange={100} value1={50} title="Set Humidity Alert" unit="%" />
    </div>
  </div>
);

export default Footer;
