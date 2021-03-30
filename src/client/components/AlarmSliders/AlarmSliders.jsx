import React, {
  useCallback,
  useState,
  useMemo,
} from 'react';

import propTypes from 'prop-types';
import classes from './AlarmsSliders.css';
import RangeSlider from '../Slider/Slider.jsx';
// import AlertsHandler from '../AlertsHandler/AlertsHandler.jsx';

const Alerts = ({
  alertConfig,
}) => {
  const [sliders, setSliders] = useState([
    {
      key: 'MinSlider',
      unit: alertConfig.config.UOM,
      divKey: 1,
      min: 0,
      max: 10,
      value: alertConfig.config.Min,
      step: 0.10,
      label: 'Min',
      locked: true,
      alarm: false,
      valueChanged: false,
    },
    {
      key: 'MaxSlider',
      unit: alertConfig.config.UOM,
      divKey: 2,
      min: 0,
      max: 10,
      value: alertConfig.config.Max,
      step: 0.10,
      label: 'Max',
      locked: true,
      alarm: false,
      valueChanged: false,
    },
  ]);

  const lockSlider = useCallback((label) => {
    // get index of item with key = label
    const index = sliders.map((slider) => slider.label).indexOf(label);
    const expr = sliders[index].locked;
    const newSliders = [...sliders];
    // swtich for true false
    switch (expr) {
      case true:
        newSliders[index].locked = false;
        break;
      case false:
        newSliders[index].locked = true;
        break;
      default:
        newSliders[index].locked = true;
    }
    setSliders(newSliders);
  },
  [sliders]);

  const sliderValueChanged = useCallback((val, key) => {
    // console.log('NEW VALUE', val, key);
    // change value in sliders based on label and new value
    const index = sliders.map((slider) => slider.label).indexOf(key);
    const newSliders = [...sliders];
    newSliders[index].value = parseFloat(val);
    newSliders[index].valueChanged = true;
    setSliders(newSliders);
  },
  [sliders]);

  const sliderList = (
    sliders.map((slider) => {
      const slideProps = useMemo(
        () => ({
          divkey: slider.divKey,
          min: slider.min,
          max: slider.max,
          value: slider.value,
          step: slider.step,
          label: slider.label,
          onChange: (e, key) => sliderValueChanged(e, key),
        }),
        [
          slider.divKey,
          slider.min,
          slider.max,
          slider.step,
          slider.value,
          slider.label,
        ],
      );
      return (
        <div className={classes.Value_Div} key={slideProps.divkey}>
          <RangeSlider
            classes={classes.Slider}
            type={alertConfig.id}
            key={slider.label}
            UOM={alertConfig.config.UOM}
            {...slideProps}
            disabled={slider.locked}
          />
          <button
            aria-label="lock slider"
            className={classes.Lock_Button}
            style={{
              backgroundImage: 'url( /images/padlock.svg )',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              // backgroundColor: '#282e33',
            }}
            type="button"
            name="Lock"
            onClick={() => lockSlider(slideProps.label)}
          />
        </div>
      );
    })
  );

  const groupBy = (property, label) => sliders.reduce((acc, obj) => {
    const value = obj[property];
    const key = obj[label];
    if (!acc[key]) {
      acc[key] = value;
    }
    return acc;
  }, {});

  const values = groupBy('value', 'label');
  const valueChecker = sliders.reduce((acc, obj) => {
    const value = obj.valueChanged;
    const key = 'valueChanged';
    if (!acc[key]) {
      acc[key] = value;
    }
    return acc;
  }, {});

  return (
    <div className={classes.Alerts}>
      <div className={classes.List_Div}>
        {sliderList}
        {/* <AlertsHandler
          sensorType={type}
          minValue={values.Min}
          maxValue={values.Max}
          valueChanged={valueChecker.valueChanged}
        /> */}
      </div>
    </div>
  );
};

// Alerts.propTypes = {
//   type: propTypes.string.isRequired,
//   unitOfMeasure: propTypes.string,
//   minValue: propTypes.number.isRequired,
//   maxValue: propTypes.number.isRequired,
// };

// Alerts.defaultProps = {
//   unitOfMeasure: null,
// };

export default Alerts;
