import React, { useState } from 'react';
import classes from './Menu.css';
import Switch from '../Switch/Switch.jsx';
import NutrientsTable from '../NutrientsTable/NutrientsTable.jsx';

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
          <Switch
            id="switch-3"
            isOn={value}
            handleToggle={() => setValue(!value)}
            image="/images/photo.png"
          />
          <Switch
            id="switch-4"
            isOn={value}
            handleToggle={() => setValue(!value)}
            image="/images/contact.png"
          />
        </div>
        <hr />
        <NutrientsTable />
      </div>
    </div>
  );
};

export default Menu;
