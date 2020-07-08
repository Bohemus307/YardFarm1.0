/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import c3 from 'c3';

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      week: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postNoteToDb = this.postNoteToDb.bind(this);
    this.getWeekOfData = this.getWeekOfData.bind(this);
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

  // axios request to post notes to db
  postNoteToDb() {
    axios.post('/data/note', {
      id: this.props.day,
      note: this.state.value,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit(event) {
    this.postNoteToDb();
    alert('Your notes were saved');
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // eslint-disable-next-line class-methods-use-this
  updateChart() {
    const { week } = this.state;
    const weeklyTotal = week.reduce((accumulator, currentValue) => accumulator + currentValue.ph, 0);
    const weeklyAverage = Math.floor(weeklyTotal / week.length);
    // create array of indoor temps
    console.log(weeklyAverage);
    const weeklyArray = week.map((item) => item.intemp);
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
    console.log('state in second: ', this.state);
    return (
      <div className="second_div">
        <div>
          <form className="note_pad" onSubmit={this.handleSubmit}>
            <textarea placeholder="Notes..." className="input_area" type="textarea" value={this.state.value} onChange={this.handleChange} />
            <input className="notes_button" type="submit" value="Save" />
          </form>
        </div>
        <div className="chart_div">
          <span className="chart_label_nutrients">Weekly Nutrients Average</span>
          <div id="chart4" />
        </div>
      </div>
    );
  }
}
Second.propTypes = {
  day: PropTypes.number.isRequired,
};

export default Second;
