/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import TaskBoard from './d-n-d/TaskBoard.jsx';

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
      <div className="alerts_div">
        <span className="alerts_header">Alerts</span>
        <div>
          <span className="range_title">Set Temperature Alert</span>
          <div className="slidecontainer">
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.value1}
              onChange={this.handleChange}
              className="slider-1"
              id="myRange"
            />
          </div>
          <span className="slider_value">
            {this.state.value1}
            °
          </span>
        </div>
        <div>
          <span className="range_title">Set PH Alert</span>
          <div className="slidecontainer">
            <input
              type="range"
              min="3"
              max="9"
              value={this.state.value2}
              onChange={this.handleChange}
              className="slider-2"
              id="myRange"
            />
          </div>
          <span className="slider_value">
            {this.state.value2}
          </span>
        </div>
        <div>
          <span className="range_title">Set Humidity Alert</span>
          <div className="slidecontainer">
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.value3}
              onChange={this.handleChange}
              className="slider-3"
              id="myRange"
            />
          </div>
          <span className="slider_value">
            {this.state.value3}
            %
          </span>
        </div>
        <TaskBoard />
      </div>
    );
  }
}

export default Footer;
