import React, { useState } from 'react';
import classes from './Menu.css';
import Switch from '../Switch.jsx';

const Menu = () => {
  const [value, setValue] = useState(false);
  return (
    <div className={classes.Menu}>
      <div className="icon">
        <img className="logo-1" src="/images/greenhouse3.png" alt="company logo here" />
      </div>
      <div className={classes.Logo_text}>
        Yard Farm
      </div>
      <div className={classes.Search_Container}>
        <form action="/action_page.php">
          <input type="text" placeholder="mm/dd/yy.." name="search" />
          <button aria-label="Search" type="submit"><i className="fa fa-search" /></button>
        </form>
      </div>
      <hr />
      <div className="switch_panel">
        <div className="control_panel">
          <span className="switch_title">Farm Controls</span>
          <Switch
            id="switch-1"
            isOn={value}
            handleToggle={() => setValue(!value)}
            image="/images/fan.png"
          />
          <Switch
            id="switch-2"
            isOn={value}
            handleToggle={() => setValue(!value)}
            image="/images/heater.png"
          />
          <div className="switch_div">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round" />
            </label>
            <img className="camera_icon small_icon" src="/images/photo.png" alt="Camera" title="Camera" />
          </div>
          <div className="switch_div">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round" />
            </label>
            <img className="notify_icon small_icon" src="/images/contact.png" alt="Notify" title="Notify Me" />
          </div>
        </div>
        <hr />
        <div className="nutrients_table">
          <span className="nutrients_header">Current Nutrients</span>
          <div id="progressbar">
            <div className="progressbar_div1" />
          </div>
          <span className="nutrient_label">PH</span>
          <div id="progressbar">
            <div className="progressbar_div2" />
          </div>
          <span className="nutrient_label">EC</span>
          <div id="progressbar">
            <div className="progressbar_div3" />
          </div>
          <span className="nutrient_label">PPM</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
