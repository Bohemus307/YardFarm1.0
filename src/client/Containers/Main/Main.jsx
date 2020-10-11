import c3 from 'c3';
import React from 'react';
import axios from 'axios';
import classes from './Main.css';
import NutrientsTable from '../../Components/NutrientsTable/NutrientsTable.jsx';

class Main extends React.PureComponent {
  constructor(props) {
    super();
    
    this.state = {
      week: [],
      DayTempData: [],
      DayHumidityData: [],
      date: new Date(Date.now()).toISOString().substring(0, 10),
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    this.getDayOfFeedData('temperature');
    this.getDayOfFeedData('humidity');
    this.updateChart();
    this.getWeekOfData(); // need more work
  }

  componentDidUpdate() {
    this.updateChart();
  }

  // get day of data from database
  getDayOfFeedData = (feedType) => {
    const { date } = this.state;
    // create iso date for yesterday
    let yesterday = parseInt(date.substring(8,10)) - 1;
    // check for single digit
    if (yesterday.length !== 2) {
      yesterday = `0${yesterday}`;
    }
    
    let yesterdate = date.substring(0,8).concat(yesterday);
    
    axios.get('/data/day', {
      params: {
        date: yesterdate,
        type: feedType.toString()
      },
    })
      .then((response) => {
        if (feedType === 'temperature') {
          this.setState({
            DayTempData: response.data.moments,
          });
        } else {
          this.setState({
            DayHumidityData: response.data.moments,
          });
        }
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
    // check for negative result and handle
    if (beginDateDay < 0) {
      beginDateDay = 30 + beginDateDay;
    }
    // replaceAt method creation
    String.prototype.replaceAt = function(index, replacement) {
      if (index >= this.length) {
        return this.valueOf();
      }
    
      return this.substring(0, index-1) + replacement ;
    }
    // begining of week date
    let beginDate = newDate.replaceAt(9, beginDateDay);
   
    // creates array of days
    const getDaysArray = (start, end) => {
      for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
          arr.push(new Date(dt));
      }
      return arr;
    };
    
    // creates array of iso formattted dates to represent past week
    let dayList = getDaysArray(new Date(beginDate),new Date(endDate));
    let dates = dayList.map((date)=> date.toISOString().substring(0,10))
  
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

  updateChart(props) {
    // create const for state
    const { DayTempData } = this.state;
    
    const dailyTempTotal = DayTempData.reduce(
      (accumulator, currentValue) => accumulator + Math.floor(currentValue.value), 0,
      );
      
    // Create daily average
    const dailyTempAverage = Math.floor(dailyTempTotal / DayTempData.length);
    // create array of indoor temps
    const dailyTempArray = DayTempData.map((item) => item.value);
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

    let initialValue = 0;
    const weeklyTempTotal = week.reduce(
      (accumulator, currentValue) => accumulator + Math.floor(currentValue.value), initialValue,
    );
    const weeklyTempAverage = Math.floor(weeklyTempTotal / week.length);
    // create array of indoor temps
    const weeklyTempArray = week.map((item) => item.value);
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
    console.log(weeklyTempTotal, weeklyTempAverage, weeklyMin, weeklyMax)
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
    const { DayHumidityData } = this.state;
    // const humids = currentDay.filter((item) => item.type === 'humidity')
    // math for humidity
    const dailyHumTotal = DayHumidityData.reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue.value), 0,
    );
    const dailyHumAverage = Math.floor(dailyHumTotal / DayHumidityData.length);
  
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
    console.log(this.state)
    return (
      <div className={classes.Main_Wrapper}>
        <span>Cumulative Data</span>
        <div className={classes.Charts_wrapper}>
          <div className={classes.Chart_Label}>
            <div className="label1">Yesterday Average Temp</div>
            <div className="label2">Weekly Average Temp</div>
            <div className="label3">Yesterday Average Humidity</div>
          </div>
          <div className={classes.Charts}>
            <div className={classes.Chart_1} id="chart" />
            <div className={classes.Chart_2} id="chart2" />
            <div className={classes.Chart_3} id="chart3" />
          </div>
        </div>
        <div className={classes.Table_wrapper}>
          <NutrientsTable />
        </div>
      </div>
    );
  }
}

export default Main;
