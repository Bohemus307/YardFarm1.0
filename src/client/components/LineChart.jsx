import React from 'react';
import axios from 'axios';
import c3 from 'c3';

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: [],
    };
    this.getWeekOfData = this.getWeekOfData.bind(this);
    this.uopdateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    this.updateChart();
    this.getWeekOfData();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  // get week of data fron database
  getWeekOfData() {
    // start array at current day build array till end of week
    const start = 1 + 6;
    // create arrray of numbers to represent dates for one week
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
        throw new Error(error);
      });
  }

  updateChart() {
    const { week } = this.state;
    // math for chart
    // const weeklyPhTotal = week.reduce(
    //   (accumulator, currentValue) => accumulator + currentValue.ph, 0,
    // );
    // const weeklyPhAverage = Math.floor(weeklyPhTotal / week.length);
    // create array of indoor temps
    // const weeklyPhArray = week.map((item) => item.ph);

    // chart generator
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

  render() {
    return (
      <div id="chart4" className="chart_div">
        <span className="chart_label_nutrients">Weekly Nutrients Average</span>
        <div />
      </div>
    );
  }
}

export default LineChart;
