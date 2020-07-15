/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import LineChart from './LineChart.jsx';
import Slider from './Slider.jsx';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: 50,
      value2: 6,
      value3: 50,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    // console.log(e.target.className);
    if (e.target.className === 'slider-1') {
      this.setState({
        value1: e.target.value,
      });
    }

    if (e.target.className === 'slider-2') {
      this.setState({
        value2: e.target.value,
      });
    }

    if (e.target.className === 'slider-3') {
      this.setState({
        value3: e.target.value,
      });
    }
  }

  render() {
    return (
      <div className="footer-div">
        <div className="alerts_div">
          <span className="alerts_header">Alerts Center</span>
          <Slider minRange={1} maxRange={100} value1={50} title="Set Temperature Alert" unit="°" />
          <Slider minRange={1} maxRange={10} value1={5} title="Set PH Alert" unit="" />
          <Slider minRange={1} maxRange={100} value1={50} title="Set Humidity Alert" unit="%" />
        </div>
        <LineChart day={1} />
      </div>
    );
  }
}

export default Footer;
