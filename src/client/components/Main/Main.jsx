import c3 from 'c3';
import React from 'react';
import axios from 'axios';
import classes from './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: [],
      currentDay: [],
      date: new Date(Date.now()).toISOString().substring(0, 10),
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    this.updateChart();
    this.getDayOfData();
    this.getWeekOfData();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  // get day of data from database
  getDayOfData = () => {
    const { date } = this.state;
    
    axios.get('/data/day', {
      params: {
        date: date,
      },
    })
      .then((response) => {
        this.setState({
          currentDay: response.data.moments,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  // get week of data fron database
  getWeekOfData = () => {
    // start array at current day build new array of dates till end of past week
    const { date } = this.state;
    let endDate = date;
    
    // create iso format date for begining of past week
    let newDate = new Date(Date.now()).toISOString().substring(0, 10);
    let beginDateDay = newDate.substring(8,10) - 7;
    String.prototype.replaceAt = function(index, replacement) {
      if (index >= this.length) {
        return this.valueOf();
      }
    
      return this.substring(0, index) + replacement + this.substring(index + 1);
    }
    
    let beginDate = newDate.replaceAt(9, beginDateDay);

    const createWeek = (start,end) => {
      let weekArray = [];
      let beginInt = parseInt(start.substring(8,10))
      let endInt = parseInt(end.substring(8,10))

      while (beginInt <= endInt) {
        weekArray.push(start);
        let newDay = beginInt += 1;
        start = start.concat(start.substring(0,7), newDay);
        console.log('newDate', start);
      }
    
    }

    let week = createWeek(beginDate, endDate)
    console.log('week', week)
    // axios.get('/data/week', {
    //   params: {
    //     dates,
    //   },
    // })
    //   .then((response) => {
    //     this.setState({
    //       week: response.data.moments,
    //     });
    //   })
    //   .catch((error) => {
    //     throw new Error(error);
    //   });
  }

  updateChart(props) {
    // create const for state
    const { currentDay } = this.state;
    //create array of tempearature data
    const temps = currentDay.filter((item) => item.type === 'temperature')
    
    const dailyTempTotal = temps.reduce(
      (accumulator, currentValue) => accumulator + Math.floor(currentValue.value), 0,
      );
      
    // Create daily average
    const dailyTempAverage = Math.floor(dailyTempTotal / temps.length);
    // create array of indoor temps
    const dailyTempArray = temps.map((item) => item.value);
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
    // array of humdidity data
    const humids = currentDay.filter((item) => item.type === 'humidity')
    // math for humidity
    const dailyHumTotal = humids.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value, 0,
    );
    const dailyHumAverage = Math.floor(dailyHumTotal / humids.length);
    // allowed keys for filter
    const allowed = ['date'];

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
    console.log('state in main', this.state);
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
