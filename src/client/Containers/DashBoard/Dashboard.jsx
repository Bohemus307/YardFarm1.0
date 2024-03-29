import React from 'react';

import classes from './Dashboard.css';
import axios from 'axios';

import SensorBar from '../SensorBAr/SensorBar.jsx';
import Main from '../Main/Main.jsx';
import Second from '../Second/Second.jsx';
import NavBar from '../../Components/NavBar/Navbar.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      dataLoaded: false,
      dataFeeds: ['temperature', 'humidity', 'pressure', 'tvoc', 'co2', 'uv', 'altitude'],
      dataIds: [1415191, 1415192, 1415193, 1415196, 1415197, 1415203, 1415204],
    };
  }

  loadDataToDb = (dataId, dataFeed) => {
    axios.get('/data/allFeedData', { 
      params: {
        feed_id: dataId,
        feed_name: dataFeed
      }
    })
    .then((response) => response)
    .catch((err) => console.log(err));
  }

  componentDidMount() {
    // if page refresh reload all data
    if (!this.state.dataLoaded) {
      this.callAllFeeds();
      this.setState({ dataLoaded: true });
    } 
  }

  callAllFeeds = () => {
    const ids = this.state.dataIds;
    const dataFeeds = this.state.dataFeeds;
    ids.map((id, i) => {
      this.loadDataToDb(id, dataFeeds[i]);
    })
  }

  render() {
    return (
      <div className={classes.Dashboard}>
        <NavBar />
        <div className="grid-container">
          <div className={classes.Item2}>
            <span>Enviromental Sensor Readings</span>
            <SensorBar />
          </div>
          <div className={classes.Item3}>
            <Main />
          </div>
          <div className={classes.Item4}>
            <Second />
          </div>
        </div>  
      </div>
    );
  }
}
export default Dashboard;
