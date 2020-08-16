import c3 from 'c3';
import React from 'react';
import axios from 'axios';
import classes from './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: [],
      currentDay: new Date(Date.now()).toISOString(),
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    // this.updateChart();
    this.getDayOfData();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  // get day of data from database
  getDayOfData = () => {
    // const { currentDay } = this.state;
    // let day = currentDay.substring(0,10);
    const day = "2020-8-03";
    axios.get('/data/day', {
      params: {
        date: day,
      },
    })
      .then((response) => {
        // this.setState({
        //   today: response.data.moments,
        // });
        console.log(response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  updateChart(props) {
    // create const for state
    const { currentDay } = this.state;
    // Create daily average
    const dailyTempTotal = currentDay.reduce(
      (accumulator, currentValue) => accumulator + currentValue.intemp, 0,
    );
    const dailyTempAverage = Math.floor(dailyTempTotal / currentDay.length);
    // create array of indoor temps
    const dailyTempArray = currentDay.map((item) => item.intemp);
    // this is min temp for day
    const dailyMin = dailyTempArray.reduce((acc, val) => {
      acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0];
      return acc;
    }, []);
    // this is max temp for day
    const dailyMax = dailyTempArray.reduce((acc, val) => {
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
          ['Avg', dailyTempAverage],
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
          format: (value, ratio) => `${Math.floor(value, ratio)}°`,
        },
      },
      tooltip: {
        format: {
          value: (value, ratio) => `${Math.floor(value, ratio)}°`,
        },
      },
      size: {
        width: 340,
      },
    });

    // math for weekly chart
    const { week } = this.state;
    const weeklyTempTotal = week.reduce(
      (accumulator, currentValue) => accumulator + currentValue.intemp, 0,
    );
    const weeklyTempAverage = Math.floor(weeklyTempTotal / week.length);
    // create array of indoor temps
    const weeklyTempArray = week.map((item) => item.intemp);
    // this is min temp for day
    const weeklyMin = weeklyTempArray.reduce((acc, val) => {
      acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0];
      return acc;
    }, []);
    // this is max temp for day
    const weeklyMax = weeklyTempArray.reduce((acc, val) => {
      acc[0] = (acc[0] === undefined || val > acc[0]) ? val : acc[0];
      return acc;
    }, []);
    // weekly temp chart
    const chart2 = c3.generate({
      bindto: '#chart2',
      data: {
        columns: [
          ['Low', weeklyMin],
          ['Avg', weeklyTempAverage],
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
          format: (value, ratio) => `${Math.floor(value, ratio)}°`,
        },
      },
      tooltip: {
        format: {
          value: (value, ratio) => `${Math.floor(value, ratio)}°`,
        },
      },
      size: {
        width: 340,
      },
    });
    // math for humidity
    const dailyHumTotal = currentDay.reduce(
      (accumulator, currentValue) => accumulator + currentValue.inhumid, 0,
    );
    const dailyHumAverage = Math.floor(dailyHumTotal / currentDay.length);
    // allowed keys for filter
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
    return (
      <div>
        <div className={classes.Chart_label}>
          <div className="label1">Daily Average Temp</div>
          <div className="label2">Weekly Average Temp</div>
          <div className="label3">Daily Humidity Average</div>
        </div>
        <div className={classes.Charts}>
          <div className="chart_1" id="chart" />
          <div className="chart_2" id="chart2" />
          <div className="chart_3" id="chart3" />
        </div>
      </div>
    );
  }
}

export default Main;
