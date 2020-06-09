import React from 'react';

const Footer = () => {
  return (
    <div className="alerts_div">
      <span>Alerts</span>
      <div>
        <span>Set Temperature Alert</span>
        <div className="slidecontainer">
          <input className="slider-1" type="range" min="1" max="100" value="50" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
