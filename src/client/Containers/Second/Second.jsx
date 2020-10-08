import React from 'react';

import classes from './Second.css';
import TaskBoard from '../d-n-d/TaskBoard.jsx';

const Second = () => (
  <div className={classes.Second_div}>
    <span className={classes.Task_header}>TaskBoard</span>
    <div className={classes.Drag_N_Drop}>
      <TaskBoard />
    </div>
  </div>
);

export default Second;
