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

    this.state = {
      taskAdded: false,
    };
    this.taskHandler = this.taskHandler.bind(this);
  }

  taskHandler() {
    this.setState({ taskAdded: true });
  }

  render() {
    return (
      <div className={classes.Second_div}>
        <Modal show={this.state.taskAdded}>
          <TaskInput />
        </Modal>
        <div className={classes.Board_control}>
          <span className={classes.Task_header}>Tasks</span>
          <div className={classes.Board_control}>
            <input type="image" src="/images/plus.png" name="addTask" className={classes.Add_button} alt="add task" title="Add Task" onClick={this.taskHandler} />
            <span className={classes.Board_icon}>Task</span>
            <input type="image" src="/images/plus.png" name="addColumn" className={classes.Add_button} alt="add Column" title="Add Column" />
            <span className={classes.Board_icon}>Column</span>
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
