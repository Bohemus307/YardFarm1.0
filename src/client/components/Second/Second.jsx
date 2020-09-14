import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classes from './Second.css';
import TaskBoard from '../d-n-d/TaskBoard.jsx';

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
        throw new Error(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postNoteToDb();
    alert('Your notes were saved');
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className={classes.Second_div}>
        <div className={classes.Board_control}>
          <span className={classes.Task_header}>Tasks</span>

          <div className={classes.Board_control}>
            {/* <form className={classes.Note_pad} onSubmit={this.handleSubmit}>
              <textarea
                placeholder="Task..."
                className={classes.Input_area}
                type="textarea"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <input className={classes.Notes_button} type="submit" value="Save" />
            </form> */}
          </div>
        </div>
        <div className={classes.Drag_N_Drop}>
          <TaskBoard />
        </div>
      </div>
    );
  }
}

export default Second;
