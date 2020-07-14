/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import c3 from 'c3';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: 50,
      value2: 6,
      value3: 50,
      week: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.getWeekOfData = this.getWeekOfData.bind(this);
  }

  componentDidMount() {
    this.updateChart();
    //this.getWeekOfData();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  // get week of data fron database
  getWeekOfData() {
    // start array at current day build array till end of week
    const start = this.props.day + 6;
    // create arrray of nubers to represent dates for one week
    const dates = Array.from(Array(start), (_, i) => i + 1);

    axios.get('/data/week', {
      params: {
        dates,
      },
    })
      .then((response) => {
        this.setState({
          week: response.data.moments,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateChart() {
    const { week } = this.state;
    const weeklyPhTotal = week.reduce((accumulator, currentValue) => accumulator + currentValue.ph, 0);
    const weeklyPhAverage = Math.floor(weeklyPhTotal / week.length);
    // create array of indoor temps
    const weeklyPhArray = week.map((item) => item.ph);
    const chart4 = c3.generate({
      bindto: '#chart4',
      data: {
        columns: [
          ['Ph', 30, 200, 100, 400, 150, 250],
          ['EC', 50, 20, 10, 40, 15, 25],
          ['ppm', 40, 100, 600, 1000, 50, 20],
        ],
        type: 'line',
        colors: {
          Ph: '#F4A460',
          EC: '#90EE90',
          PPM: '#87CEEB',
        },
      },
      size: {
        width: 550,
        height: 340,
      },
    });
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
        </div>
        <div className="chart_div">
          <span className="chart_label_nutrients">Weekly Nutrients Average</span>
          <div id="chart4" />
        </div>
      </div>
    );
  }
}

export default Footer;
