import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classes from './Second.css';
import TaskBoard from '../d-n-d/TaskBoard.jsx';



class Second extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={classes.Second_div}>
        <div className={classes.Drag_N_Drop}>
          <TaskBoard />
        </div>
      </div>
    );
  }
}

export default Second;
