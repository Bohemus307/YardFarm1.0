import React from 'react';
import classes from './NutrientsTable.css';

const NutrientsTable = () => (
  <div className={classes.Nutrients_table}>
    <span className={classes.Nutrients_header}>Current Nutrients</span>
    <div id="progressbar" className={classes.ProgressBar}>
      <div className={classes.Progressbar_div1} />
    </div>
    <span className={classes.Nutrient_label}>PH</span>
    <div id="progressbar" className={classes.ProgressBar}>
      <div className={classes.Progressbar_div2} />
    </div>
    <span className={classes.Nutrient_label}>EC</span>
    <div id="progressbar" className={classes.ProgressBar}>
      <div className={classes.Progressbar_div3} />
    </div>
    <span className={classes.Nutrient_label}>PPM</span>
  </div>
);

export default NutrientsTable;
