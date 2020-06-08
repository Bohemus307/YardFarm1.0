/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const Menu = () => {
  return (
    <div className="Menu">
      <div className="icon">
        <img className="logo-1" src="/images/greenhouse3.png" alt="company logo here" />
      </div>
      <div className="logo_text">
        Yard Farm
      </div>
      <div className="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="mm/dd/yy.." name="search" />
          <button type="submit"><i className="fa fa-search" /></button>
        </form>
      </div>
      <hr />
      <div className="switch_panel">
        <span className="switch_title">Farm Controls</span>
        <div className="switch_div">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
          <img className="fan_icon small_icon" src="/images/fan.png" alt="fan" title="Fans" />
        </div>
        <div className="switch_div">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
          <img className="heat_icon small_icon" src="/images/heater.png" alt="heat" title="Heat" />
        </div>
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
        <hr />
        <div className="nutrients_table">
          <span className="nutrients_lable">Current Nutrients</span>
          
        </div>
      </div>
    </div>
  );
};

export default Menu;
