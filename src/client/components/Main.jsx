/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import c3 from 'c3';
import d3 from 'd3';
import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: [],
      currentDay: [1],
    };
    this.updateChart = this.updateChart.bind(this);
    this.getDayOfData = this.getDayOfData.bind(this);
    this.getWeekOfData = this.getWeekOfData.bind(this);
  }

  componentDidMount() {
    this.getDayOfData();
    this.getWeekOfData();
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  // get day of data from database
  getDayOfData() {
    const day = this.state.currentDay;
    axios.get('/data/day', {
      params: {
        date: day,
      },
    })
      .then((response) => {
        this.setState({
          currentDay: response.data.moments,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // get week of data fron database
  getWeekOfData() {
    // start array at current day build array till end of week
    const start = this.state.currentDay[0] + 6;
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

  // eslint-disable-next-line class-methods-use-this
  updateChart() {
    // create const for state
    const { currentDay } = this.state;
    // Create daily average
    const dailyTotal = currentDay.reduce((accumulator, currentValue) => accumulator + currentValue.intemp, 0);
    const dailyAverage = Math.floor(dailyTotal / currentDay.length);
    // create array of indoor temps
    const dailyArray = currentDay.map((item) => item.intemp);
    // this is min temp for day
    const dailyMin = dailyArray.reduce((acc, val) => {
      acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0];
      return acc;
    }, []);
    // this is max temp for day
    const dailyMax = dailyArray.reduce((acc, val) => {
      acc[0] = (acc[0] === undefined || val > acc[0]) ? val : acc[0];
      return acc;
    }, []);

    // daily temp chart
    const chart = c3.generate({
      bindto: '#chart',
      data: {
        // iris data from R
        columns: [
          ['Low', dailyMin],
          ['Avg', dailyAverage],
          ['High', dailyMax],
        ],
        type: 'pie',
        colors: {
          High: '#F4A460',
          Avg: '#90EE90',
          Low: '#87CEEB',
        },
        // onclick(d, i) { console.log('onclick', d, i); },
        // onmouseover(d, i) { console.log('onmouseover', d, i); },
        // onmouseout(d, i) { console.log('onmouseout', d, i); },
      },
      pie: {
        label: {
          format: (value, ratio) => `${Math.floor(value)}°`,
        },
      },
      tooltip: {
        format: {
          value: (value, ratio) => `${Math.floor(value)}°`,
        },
      },
      size: {
        width: 340,
      },
    });
    // math for weekly chart
    const { week } = this.state;
    const weeklyTotal = week.reduce((accumulator, currentValue) => accumulator + currentValue.intemp, 0);
    const weeklyAverage = Math.floor(weeklyTotal / week.length);
    // create array of indoor temps
    const weeklyArray = week.map((item) => item.intemp);
    // this is min temp for day
    const weeklyMin = weeklyArray.reduce((acc, val) => {
      acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0];
      return acc;
    }, []);
    // this is max temp for day
    const weeklyMax = weeklyArray.reduce((acc, val) => {
      acc[0] = (acc[0] === undefined || val > acc[0]) ? val : acc[0];
      return acc;
    }, []);
    // weekly temp chart
    const chart2 = c3.generate({
      bindto: '#chart2',
      data: {
        columns: [
          ['Low', weeklyMin],
          ['Avg', weeklyAverage],
          ['High', weeklyMax],
        ],
        type: 'pie',
        colors: {
          High: '#F4A460',
          Avg: '#90EE90',
          Low: '#87CEEB',
        },
        // onclick(d, i) { console.log('onclick', d, i); },
        // onmouseover(d, i) { console.log('onmouseover', d, i); },
        // onmouseout(d, i) { console.log('onmouseout', d, i); },
      },
      pie: {
        label: {
          format: (value, ratio) => `${Math.floor(value)}°`,
        },
      },
      tooltip: {
        format: {
          value: (value, ratio) => `${Math.floor(value)}°`,
        },
      },
      size: {
        width: 340,
      },
    });
    // math for humidity
    const dailyHumTotal = currentDay.reduce((accumulator, currentValue) => accumulator + currentValue.inhumid, 0);
    const dailyHumAverage = Math.floor(dailyHumTotal / currentDay.length);
    // allowe dkeys for filter
    const allowed = ['date'];
    // need to get inhum for only times 360 thru 1080 for day humidity

    // need to get inhum for only times 1081 to 359 the next day

    // chart for daily humidity
    const chart3 = c3.generate({
      bindto: '#chart3',
      data: {
        columns: [
          ['Day', 0.2, 0.2, 0.2, 0.2, 30.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
          ['Night', 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
        ],
        type: 'donut',
        colors: {
          Day: '#F4A460',
          Night: '#87CEEB',
        },
        // onclick(d, i) { console.log('onclick', d, i); },
        // onmouseover(d, i) { console.log('onmouseover', d, i); },
        // onmouseout(d, i) { console.log('onmouseout', d, i); },
      },
      size: {
        width: 340,
      },
    });
  }

  render() {
    console.log('state in main: ', this.state);
    return (
      <div>
        <div className="chart_label">
          <div className="label1">Daily Average Temp</div>
          <div className="label2">Weekly Average Temp</div>
          <div className="label3">Daily Humidity Average</div>
        </div>
        <div className="charts">
          <div className="chart_1" id="chart" />
          <div className="chart_2" id="chart2" />
          <div className="chart_3" id="chart3" />
        </div>
      </div>
    );
  }
}

export default Main;
