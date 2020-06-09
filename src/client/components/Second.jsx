/* eslint-disable no-alert */
import React from 'react';
import c3 from 'c3';

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(`Your notes were saved: ${this.state.value}`);
    event.preventDefault();
  }

  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  // eslint-disable-next-line class-methods-use-this
  updateChart() {

    const chart4 = c3.generate({
      bindto: '#chart4',
      data: {
        // iris data from R
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
      <div className="second_div">
        <div>
          <form className="note_pad" onSubmit={this.handleSubmit}>
            <textarea placeholder="Notes..." className="input_area" type="textarea" value={this.state.value} onChange={this.handleChange} />
            <input className="notes_button" type="submit" value="Save" />
          </form>
        </div>
        <div className="chart_div">
          <span className="chart_label_nutrients">Weekly Nutrients Avg</span>
          <div id="chart4" />
        </div>
      </div>
    );
  }
}

export default Second;
