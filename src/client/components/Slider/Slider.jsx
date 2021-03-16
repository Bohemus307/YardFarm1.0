/* eslint-disable max-len */
import React, {
  memo,
  useState,
  useEffect,
} from 'react';
import styles from './Slider.css';

// destructive props
const RangeSlider = ({
  classes, label, onChange, value, type, UOM, ...slideProps
}) => {
  // set initial value to 0 this will change inside useEffect in first render also | or you can directly set useState(value)
  const [sliderVal, setSliderVal] = useState(0);

  // keep mouse state to determine whether i should call parent onChange or not.
  // so basically after dragging the slider and then release the mouse then we will call the parent onChange, otherwise parent function will get call each and every change
  const [mouseState, setMouseState] = useState(null);

  useEffect(() => {
    setSliderVal(value); // set new value when value gets changed, even when first render
  }, [value]);

  const changeCallback = (e) => {
    setSliderVal(e.target.value); // update local state of the value when changing
  };

  useEffect(() => {
    if (mouseState === 'up') {
      onChange(sliderVal, label);// when mouse is up then call the parent onChange
    }
  }, [mouseState]);

  return (
    <div className={styles.Slider_Div}>
      <div className={styles.Label_Div}>
        <p style={{
          fontSize: '30px',
          backgroundColor: '#606468',
          color: '#282e33',
          borderRadius: '9px',
          padding: '5px 5px',
        }}
        >
          {type}
          {label}
        </p>
        <span>
          <span>Value: </span>
          { sliderVal }
          { UOM }
        </span>
      </div>
      <input
        type="range"
        value={sliderVal}
        {...slideProps}
        className={classes}
        id="myRange"
        onChange={changeCallback}
        onMouseDown={() => setMouseState('down')} // When mouse down set the mouseState to 'down'
        onMouseUp={() => setMouseState('up')}
      />
    </div>
  );
};

export default memo(RangeSlider);
