import React from 'react';

const Switch = ({ isOn, handleToggle, image, id }) => (
  <div className="switch_div">
    <label className="switch" id={id} >
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
      />
      <span className="slider round" id={id} />
    </label>
    <img className="fan_icon small_icon" src={image} alt="fan" title="Fans" />
  </div>
);

export default Switch;
