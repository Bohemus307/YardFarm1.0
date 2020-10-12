import React from 'react';
import axios from 'axios';
import c3 from 'c3';
import classes from './LineChart.css';
import Spinner from '../Spinner/Spinner.jsx';

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weekTempData: [],
      loading: true,
      date: new Date(Date.now()).toISOString().substring(0, 10),
    };
  }

  componentDidMount() {
    this.getWeekOfData();
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
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
          loading: false,
          weekTempData: response.data.moments,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  updateChart = () => {
    const { weekTempData } = this.state;
    // math for chart
    // const weeklyPhTotal = week.reduce(
    //   (accumulator, currentValue) => accumulator + currentValue.ph, 0,
    // );
    // const weeklyPhAverage = Math.floor(weeklyPhTotal / week.length);
    // create array of indoor temps
    const weekTempArray = weekTempData.map((item) => parseInt(item.value));
    
    // chart generator
    const chart4 = c3.generate({
      bindto: '#chart4',
      data: {
        columns: [
          ['Temperature', weekTempArray],
        ],
        type: 'line',
        colors: {
          Temperature: '#F4A460',
        },
      },
      size: {
        width: 400,
        height: 240,
      },
    });
  }

  render() {
    let chart = null;

    if (this.state.weekTempData.length > 0) {
      chart = (
        <div id="chart4" className={classes.Chart_div} />
      );
    }

    if (this.state.loading) {
      chart = <Spinner />;
    }
    console.log(this.state)
    return (
      <div>
        {chart}
      </div>
    );
  }
}

export default LineChart;
