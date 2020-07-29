import React from 'react';

import Menu from './Menu/Menu.jsx';
import Navbar from './NavBar/Navbar.jsx';
import Main from './Main/Main.jsx';
import Second from './Second/Second.jsx';
import Footer from './Footer.jsx';

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
      currentState,
    } = this.state;
    return (
      <div className="grid-container">
        <div className="item1">
          <Navbar
            intemp={currentState.indoor_temp}
            inhum={currentState.indoor_hum}
            outtemp={currentState.outdoor_temp}
            outhum={currentState.outdoor_hum}
            watertemp={currentState.water_temp}
            far={currentState.far}
            cels={currentState.cels}
          />
        </div>
        <div className="item2">
          <Menu />
        </div>
        <div className="item3">
          <Main />
        </div>
        <div className="item4">
          <Second day={currentState.id} />
        </div>
        <div className="item5">
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
