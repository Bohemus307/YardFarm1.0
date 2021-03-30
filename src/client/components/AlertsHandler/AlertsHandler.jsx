import React from 'react';
import propTypes from 'prop-types';
// import { useMutation, useQuery } from '@apollo/client';
// import { updateAlert, alertQuery } from '../../graphql/queries.js';

import classes from './AlertsHandler.css';

const AlertsHandler = ({
  sensorType, minValue, maxValue, valueChanged,
}) => {
  const { loading, error, data } = useQuery(alertQuery, { variables: { id: sensorType } });
  const [changeAlert] = useMutation(updateAlert);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const setAlerts = async () => {
    const { maxsetvalue, minsetvalue } = data.alert;
    if (maxsetvalue && minsetvalue) {
      const newAlert = {
        sensor_id: data.alert.sensor_id,
        settingsid: data.alert.settingsid,
        maxsetvalue: parseFloat(maxValue),
        minsetvalue: parseFloat(minValue),
      };
      changeAlert({ variables: { input: { ...newAlert } } });
    }
  };

  let input;

  return (
    <div key={data.sensor_id} className={classes.Alert_Button_Div}>
      <p>{data.sensor_id}</p>
      <button
        style={{
          color: '#434a52',
          height: '80%',
          width: '100%',
          padding: '5px 5px',
          borderRadius: '9px',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
        ref={(node) => {
          input = node;
        }}
        type="button"
        onClick={() => setAlerts()}
        disabled={!valueChanged}
      >
        Submit
      </button>
    </div>
  );
};

AlertsHandler.propTypes = {
  sensorType: propTypes.string.isRequired,
  minValue: propTypes.number.isRequired,
  maxValue: propTypes.number.isRequired,
  valueChanged: propTypes.bool.isRequired,
};

export default AlertsHandler;
