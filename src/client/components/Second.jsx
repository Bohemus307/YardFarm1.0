/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TaskBoard from './d-n-d/TaskBoard.jsx';

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

  render() {
    return (
      <div className="second_div">
        <div>
          <form className="note_pad" onSubmit={this.handleSubmit}>
            <textarea placeholder="Notes..." className="input_area" type="textarea" value={this.state.value} onChange={this.handleChange} />
            <input className="notes_button" type="submit" value="Save" />
          </form>
        </div>

      </div>
    );
  }
}
Second.propTypes = {
  day: PropTypes.number.isRequired,
};

export default Second;
