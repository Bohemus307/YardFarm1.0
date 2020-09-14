import React from 'react';
import axios from 'axios';
import classes from './TaskInput.css';

class TaskInput extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      currentTasks: [],
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
    alert('Your Task was added');
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form className={classes.Note_pad} onSubmit={this.handleSubmit}>
        <textarea
          placeholder="Task..."
          className={classes.Input_area}
          type="textarea"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input className={classes.Notes_button} type="submit" value="Save" />
      </form>
    );
  }
}

export default TaskInput;
