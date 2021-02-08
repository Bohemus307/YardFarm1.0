import React from 'react';
import propTypes from 'prop-types';

const AlertSettings = () => {
return (
  <div>
    <div>
      <h3>
        Alerts Settings
      </h3>
    </div>
    <div>
      Sliders with on/off buttons
    </div>
    <div>
      <span>
        Save Alerts Button
      </span>
      <span>
        Reset Alerts Button
      </span>
    </div>
  </div>
  );
};

AlertSettings.propTypes = {
// name: propTypes.string.isRequired
};

export default AlertSettings;
