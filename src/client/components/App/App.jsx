import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Dashboard from '../../Containers/DashBoard/Dashboard.jsx';
import Login from '../Login/Login.jsx';
import Navbar from '../NavBar/Navbar.jsx';
import Alerts from '../Alerts/Alerts.jsx';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/alerts">
          <Alerts />
        </Route>
        <Route path="/controls">
          <Controls />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
);

// function Alerts() {
//   return <h2>Alerts</h2>;
// }

function Controls() {
  return <h2>Controls</h2>;
}

function Admin() {
  return <h2>Admin</h2>;
}

export default App;
