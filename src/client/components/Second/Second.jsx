import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classes from './Second.css';
import TaskBoard from '../d-n-d/TaskBoard.jsx';
import Modal from '../Modal/Modal.jsx';
import TaskInput from '../TaskInput/TaskInput.jsx';

class Second extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={classes.Second_div}>
        <Modal>
          <TaskInput />
        </Modal>
        <div className={classes.Board_control}>
          <span className={classes.Task_header}>Tasks</span>
          <div className={classes.Board_control}>
            <input type="image" src="/images/plus.png" name="addTask" className={classes.Add_button} alt="add task" title="Add Task" />
            <span className={classes.Board_icon}>Task</span>
            <input type="image" src="/images/plus.png" name="addColumn" className={classes.Add_button} alt="add Column" title="Add Column" />
            <span className={classes.Board_icon}>Column</span>
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
