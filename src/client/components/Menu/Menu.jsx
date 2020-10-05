import React, { useState } from 'react';
import classes from './Menu.css';
import Switch from '../UI/Switch/Switch.jsx';
import Logo from '../Logo/Logo.jsx';

const Menu = () => {
  const [value, setValue] = useState(false);
  return (
    <div className={classes.Menu}>
      <Logo height="15%" />
      <div className={classes.Logo_Text}>
        Yard Farm
      </div>
      {/* <div className={classes.Search_Container}>
        <form action="/action_page.php">
          <input type="text" placeholder="mm/dd/yy.." name="search" />
          <button aria-label="Search" type="submit"><i className="fa fa-search" /></button>
        </form>
      </div> */}
      <hr />
      <div className={classes.Switch_Panel}>
        <div className={classes.Control_Panel}>
          <span className={classes.Switch_Title}>Farm Controls</span>
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
      </div>
    </div>
  );
};

export default Menu;
