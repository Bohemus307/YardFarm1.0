import React from 'react';
import axios from 'axios';

import Menu from './Menu.jsx';
import Navbar from './Navbar.jsx';

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
        water_temp: 47
      }
    }
  }
  

  render() {
    return (
      <div className="grid-container">
        <div className="item1">
          <Navbar />
        </div>
        <div className="item2">
          <Menu />
        </div>
        <div className="item3">Main</div>  
        <div className="item4">Second</div>
        <div className="item5">Footer</div>
      </div> 
    );
  }
}
export default App;