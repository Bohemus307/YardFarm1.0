import React from 'react'

const Navbar = ({intemp, outtemp, inhum, outhum, watertemp, cels, far}) => {
  if (cels === true) {
    var scale = 'C';
  } 
  if (far === true) {
    scale = 'F'
  }
  function DisplayCurrentTime() {
    const date = new Date();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const am_pm = date.getHours() >= 12 ? "PM" : "AM";
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
    
    return time;
  };
  DisplayCurrentTime();

  return (
    <div className='navbar'>
      <div className='header_text'>
        <div className='header_item'>
          Indoor Temperature / Humidity
        </div> 
        <div className='header_item'>
          Outdoor Temperature / Humidity
        </div> 
        <div className='header_item'>
          Water Temperature
        </div> 
        <div className='header_item'>
          Current Time
        </div> 
      </div>
      <div className='data_wrapper'>
        <div className='data_text'>
          {intemp}°{scale}
        </div>
        <div className='data_text'>
          {inhum}%
        </div>
        <div className='data_text middleone'>
          {outtemp}°{scale}
        </div>
        <div className='data_text middleone'>
          {outhum}%
        </div>
        <div className='data_text lasttwo'>
          {watertemp}°{scale}
        </div>
        <div className='data_text lasttwo'>
          {DisplayCurrentTime()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;