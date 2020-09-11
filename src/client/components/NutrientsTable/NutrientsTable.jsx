import React from 'react';
import classes from './NutrientsTable.css';

const NutrientsTable = () => (
  <div className={classes.Table_wrappper}>
    <div className={classes.Nutrients_header}>
      <span>Current Nutrient Readings</span>
    </div>
    <div className={classes.Nutrients_table}>
      <div id="progressbar" className={classes.ProgressBar}>
        <div className={classes.Progressbar_div1} />
      </div>
      <div id="progressbar" className={classes.ProgressBar}>
        <div className={classes.Progressbar_div2} />
      </div>
      <div id="progressbar" className={classes.ProgressBar}>
        <div className={classes.Progressbar_div3} />
      </div>
    </div>
  </div>
);

export default NutrientsTable;
