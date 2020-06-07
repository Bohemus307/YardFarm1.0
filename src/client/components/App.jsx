/* eslint-disable camelcase */
/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';

import Menu from './Menu.jsx';
import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
import Second from './Second.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentState: {
        id: 1,
        time: 12,
        am: true,
        pm: false,
        far: true,
        cels: false,
        indoor_temp: 67,
        outdoor_temp: 83,
        indoor_hum: 66,
        outdoor_hum: 42,
        ph: 6.2,
        ec: 15.4,
        ppm: 1148,
        tds: 56,
        water_temp: 47,
      },
    };
  }


  render() {
    const {
      indoor_hum, indoor_temp, outdoor_hum, outdoor_temp, water_temp, far, cels,
    // eslint-disable-next-line react/destructuring-assignment
    } = this.state.currentState;

    return (
      <div className="grid-container">
        <div className="item1">
          <Navbar intemp={indoor_temp} inhum={indoor_hum} outtemp={outdoor_temp} outhum={outdoor_hum} watertemp={water_temp} far={far} cels={cels} />
        </div>
        <div className="item2">
          <Menu />
        </div>
        <div className="item3">
          <Main />
        </div>
        <div className="item4">
          <Second />
        </div>
        <div className="item5">Footer</div>
      </div>
    );
  }
}
export default App;
