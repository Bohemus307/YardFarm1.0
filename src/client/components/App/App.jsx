import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Dashboard from '../DashBoard/Dashboard.jsx';
import Login from '../Login/Login.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dash Board</Link>
            </li>
            <li>
              <Link to="/alerts">Alerts</Link>
            </li>
            <li>
              <Link to="/controls">Controls</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Alerts() {
  return <h2>Alerts</h2>;
}

function Controls() {
  return <h2>Controls</h2>;
}

function Admin() {
  return <h2>Admin</h2>;
}
