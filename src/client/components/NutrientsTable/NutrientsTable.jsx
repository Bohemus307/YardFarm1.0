import React from 'react';
import classes from './NutrientsTable.css';

const NutrientsTable = () => (
  <div className={classes.Table_wrappper}>
    <div className={classes.Nutrients_header}>
      <span>Current Nutrient Levels</span>
    </div>
    <div className={classes.Nutrients_table}>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>PH</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div1} />
        </div>
      </div>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>EC</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div2} />
        </div>
      </div>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>Water Temp</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div1} />
        </div>
      </div>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>PPM</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div3} />
        </div>
      </div>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>ORP</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div2} />
        </div>
      </div>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>Flow Rate</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div3} />
        </div>
      </div>
    </div>
  </div>
);

export default NutrientsTable;
