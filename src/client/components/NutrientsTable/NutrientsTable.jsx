import React from 'react';
import classes from './NutrientsTable.css';

// note to create map of data to render these values and allow for
// ease of add/remove sensor readings !!!!!!!!!!!!!
const NutrientsTable = () => (
  <div className={classes.Table_wrappper}>
    <div className={classes.Nutrients_header}>
      <span>Nutrient Sensor Readings</span>
    </div>
    <div className={classes.Nutrients_table}>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>PH</span>
        <span className={classes.Unit_label}>6.2</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div1} />
        </div>
      </div>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>EC</span>
        <span className={classes.Unit_label}>1.6 mS/cm</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div2} />
        </div>
      </div>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>TDS</span>
        <span className={classes.Unit_label}>1100 PPM</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div2} />
        </div>
      </div>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>Water Temp</span>
        <span className={classes.Unit_label}>45 °F</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div1} />
        </div>
      </div>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>ORP</span>
        <span className={classes.Unit_label}>320 mV</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div2} />
        </div>
      </div>
      <div className={classes.Table_item}>
        <span className={classes.Feed_label}>Flow Rate</span>
        <span className={classes.Unit_label}>4 GPM</span>
        <div id="progressbar" className={classes.Progress_Bar}>
          <div className={classes.Progressbar_div3} />
        </div>
      </div>
    </div>
  </div>
);

export default NutrientsTable;
