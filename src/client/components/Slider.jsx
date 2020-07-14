import React from 'react';

const Slider = (props) => {
  console.log(props)
  return (
    <div>
      <div>
        <span className="range_title">Set Temperature Alert</span>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            value={props.value1}
            onChange={this.handleChange}
            className="slider-1"
            id="myRange"
          />
        </div>
        <span className="slider_value">
          {props.value1}
          °
        </span>
      </div>
    </div>
  );
};

export default Slider;
