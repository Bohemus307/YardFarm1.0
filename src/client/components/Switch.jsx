import React from 'react';

const Switch = ({ isOn, handleToggle, image }) => (
  <>
    <input
      checked={isOn}
      onChange={handleToggle}
      className="react-switch-checkbox"
      id="react-switch-new"
      type="checkbox"
    />
    <label className="switch" htmlFor="react-switch-new">
      <span className="react-switch-button" />

    </label>
    <img className="fan_icon small_icon" src={image} alt="fan" title="Fans" />
  </>
);

export default Switch;

// <div className="switch_div">
//           <label className="switch">
//             <input type="checkbox" />
//             <span className="slider round" />
//           </label>
//           <img className="fan_icon small_icon" src="/images/fan.png" alt="fan" title="Fans" />
//         </div>