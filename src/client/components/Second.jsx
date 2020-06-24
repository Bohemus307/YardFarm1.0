/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
import React from 'react';
import axios from 'axios';
import c3 from 'c3';

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postNoteToDb = this.postNoteToDb.bind(this);
  }

  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.postNoteToDb();
    alert('Your notes were saved');
    event.preventDefault();
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


  // eslint-disable-next-line class-methods-use-this
  updateChart() {
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
    console.log(this.props);
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

export default Second;
