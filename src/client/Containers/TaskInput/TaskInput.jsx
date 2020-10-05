import React from 'react';
import classes from './TaskInput.css';

class TaskInput extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    this.props.taskadded(value);
    this.setState({
      value: '',
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <form className={classes.Note_pad} onSubmit={this.handleSubmit}>
        <textarea
          placeholder="Task..."
          className={classes.Input_area}
          type="textarea"
          value={value}
          onChange={this.handleChange}
        />
        <input className={classes.Notes_button} type="submit" value="Add" />
      </form>
    );
  }
}

export default TaskInput;
